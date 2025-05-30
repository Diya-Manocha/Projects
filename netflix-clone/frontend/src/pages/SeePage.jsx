import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContentStore } from "../store/content";
import axios from "axios";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPlayer from 'react-player';
import { ORIGINAL_IMG_BASE_URL, SMALL_IMG_BASE_URL } from "../utiles/constant";


function formatReleaseDate(date) {
  return new Date(date).toLocaleDateString("en-US",{
    year: "numeric",
    month: "long",
    day: "numeric"
  })
}

const SeePage = () => {
  const { id } = useParams();
  const [trailers, setTrailers] = useState([]);
  const [currentTrailerIdx, setCurrentTrailerIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({});
  const [similarContent, setSimilarContent] = useState([]);
  const { contentType } = useContentStore();
  const sliderRef = useRef(null)

  useEffect(() => {
    const getTrailers = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/trailers`);
        setTrailers(res.data.trailers);
      } catch (error) {
        if (error.message.includes("404")) {
          setTrailers([]);
        }
      }
    };
    getTrailers();
  }, [contentType, id]);

  useEffect(() => {
    const getSimilarContent = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/similar`);
        setSimilarContent(res.data.similar);
      } catch (error) {
        if (error.message.includes("404")) {
          setSimilarContent([]);
        }
        
      }
    };
    getSimilarContent();
  }, [contentType, id]);

  useEffect(() => {
    const getContentDetails = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/details`);
        setContent(res.data.content);
      } catch (error) {
        if (error.message.includes("404")) {
          setContent(null);
        }
      } finally {
        setLoading(false);
      }
    };
    getContentDetails();
  }, [contentType, id]);

  const handleNext = () => {
    if (currentTrailerIdx < trailers.length - 1)
      setCurrentTrailerIdx(currentTrailerIdx + 1);
  };

  const handlePrev = () => {
    if (currentTrailerIdx > 0) setCurrentTrailerIdx(currentTrailerIdx - 1);
  };

  const sliderLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const sliderRight = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };


  return (
    <div className="bg-black min-h-screen text-white">
      <div className="mx-auto container px-4 py-8 h-full">
        <Navbar />

        {trailers.length > 0 && (
          <div className="flex justify-between items-center mb-4">
            <button
              className={` bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${
                currentTrailerIdx === 0
                  ? " opacity-50 curser-not-allowed  "
                  : ""
              }`}
              disabled={currentTrailerIdx === 0}
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={` bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${
                currentTrailerIdx === 0
                  ? "  opacity-50 curser-not-allowed "
                  : ""
              }`}
              disabled={currentTrailerIdx === 0}
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        <div className="aspect-ratio mb-8 p-2 sm:px-10 md:px-32">
          {trailers.length > 0 && (
            <ReactPlayer
            controls={true}
            width={"100%"}
            height={"70vh"}
            className="mx-auto overflow-hidden rounded-lg"
            url={`https://www.youtube.com/watch?v=${trailers[currentTrailerIdx].key}`}
            />
          )}

          {trailers?.length === 0 && (
            <h2 className="text-lg text-center mt-5">
              No Trailers Available For {" "}
              <span className="font-bold text-red-600">{content?.title || content?.name}</span>
            </h2>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-20 max-x-6xl mx-auto">
          <div className="mb-4 md:mb-0">
          <h2 className="text-5xl font-bold text-balance">{content?.title || content?.name}</h2>
          <p className="mt-2 text-lg">
            {formatReleaseDate(content?.release_date || content?.first_air_date)} | {" "}
            {content?.adult ? (
              <span className="text-red-600">18+</span>
            ):(
              <span className="text-green-600">PG-13</span>
            )}{" "}
          </p>
          <p className="mt-4 text-lg">{content?.overview}</p>
          </div>
          <img src={ORIGINAL_IMG_BASE_URL + content.poster_path} alt="poster-image" className="max-h-[600px] rounded-md" />
        </div>
        {similarContent.length > 0 && (
        <div className="mt-12 max-w-5xl mx-auto relative">
          <h3 className="text-3xl font-bold mb-4">
            Similar Movies/Tv
          </h3>
          <div className="flex overflow-x-scroll scrollbar-hide gap-4 pb-4 group" ref={sliderRef}>
            {similarContent.map((content) => (
              <Link key={content.id} to={`/watch/${content.id}`} className="w-52 flex-none">
                <img src={SMALL_IMG_BASE_URL+content.poster_path} alt="" className="w-full h-auto rounded-md" />
                <h4 className="mt-2 text-lg font-semibold">{content.title || content.name}</h4>
              </Link>
            ))}
<ChevronLeft className="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer bg-red-600 text-white rounded-full"
            onClick={sliderLeft}/>
            <ChevronRight className="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer bg-red-600 text-white rounded-full"
            onClick={sliderRight}/>
            

          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default SeePage;
