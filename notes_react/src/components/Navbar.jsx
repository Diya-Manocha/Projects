
import { Link } from "react-router-dom";
import searchIcon from "../assets/search.svg"
import infoIcon from "../assets/vector.svg"
import { useState } from "react";


const Navbar = () => {

  const [showSearch, setShowSearch] = useState(false)

return(
    <nav>
        <div className="container mx-auto flex justify-around items-center mt-3">
<Link to='/' className="text-4xl text-white">
Notes
</Link>
<div className="flex space-x-6">
     <Link onClick={() => setShowSearch(!showSearch)} className="p-[10px] rounded-xl bg-[#3B3B3B]">
       <img src={searchIcon} alt="" />
     </Link>
     <Link to="/info" className="p-[10px] rounded-xl bg-[#3B3B3B]">
       <img src={infoIcon} alt="" />
     </Link>
</div>
        </div>

        {showSearch && (
          <input type="text"
          placeholder="Search..."
          className="absolute top-[0.75rem] max-sm:top-[4rem] mt-1 w-[400px] sm:w-[343px] left-1/2 sm:left-[500px] transform -translate-x-1/2 sm:translate-x-0 p-2 border-none rounded-md bg-[#3B3B3B] shadow-md"
>
          </input>
        )}
    </nav>

   
)
}
export default Navbar;