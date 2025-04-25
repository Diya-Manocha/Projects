import { useLocation, useNavigate } from "react-router-dom";

export default function NoteDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const note = location.state?.note;

    if(!note){
        return <p>Note Not Found</p>
    }
    return(
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold">{note.title}</h1>
            <p className="mt-4 text-gray-700">{note.content}</p>
            <button className="mt-6 px-4 py-2 text-black rounded" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}