import { useState } from "react"
import plusIcon from '../assets/Plus.svg'
import EmptyScreen from "./EmptyHome";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotesApp() {
   
    const [isOpen, setIsOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notes, setNotes] = useState([]);


    const handleSave = () => {
        if(title.trim() === "" && content.trim() === "") return;

        const newNote = {title, content};
        setNotes([...notes, newNote]);
        setIsOpen(false)
        setTitle("")
        setContent("")
    }

    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-pink-500", "bg-purple-500"]

    return(
        <div className="relative">
        <div className="fixed bottom-5 right-5">
        <button onClick={()=> setIsOpen(true)} className="shadow-[ -5px_0px_10px_rgba(0,0,0,0.4 ) ] p-[12px] rounded-3xl">
        <img src={plusIcon} alt="" />
        </button>
        </div>


        <div className="p-6">
        {notes.length === 0 ? (
            <EmptyScreen/>
        ):(
            <div className="grid grid-cols-1 md:grid-cold-2 lg:grid-cols-3 gap-4">
                {notes.map((note, index) => {
                    const randomColor = colors[Math.floor(Math.random()* colors.length)]
                    return(
                        <div key={index} className={` p-4 rounded-lg shadow-sm text-white cursor-pointer ${randomColor}`}
                        onClick={() => Navigate(`/note/${note.id}`,{state:{note}})}>
                        <h3 className="text-xl font-bold">{note.title}</h3>
                        <p className="text-sm mt-2 overflow-hidden text-ellipsis whitespace-nowrap">{note.content}</p>
                    </div>
                    );
                })}
            </div>
        )}
        </div>

        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
                <div className="bg-[#252525] p-6 rounded-lg shadow-lg w-[50%] h-[400px]">
                    <h2 className="text-xl font-bold mb-3">New Note</h2>
                    <input type="text"
                    placeholder="Title"
                    className="w-full p-2 rounded-md mb-2 bg-inherit text-3xl"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                     />
                     <textarea name="" id=""
                     placeholder="Type Something..."
                     className="w-full p-2 bg-inherit rounded-md h-[200px] resize-none"
                     value={content}
                     onChange={(e)=> setContent(e.target.value)}></textarea>
                     <div className="flex justify-evenly mt-3 space-x-2">
                        <button onClick={()=> setIsOpen(false)}
                            className="px-6 py-2 bg-[#FF0000] rounded-lg">
                            Cancel
                        </button>
                        <button onClick={handleSave}
                        className="px-6 py-2 bg-[#30BE71] text-white rounded-lg">
                            Save
                        </button>
                     </div>
                </div>
            </div>
        )}

        {/* {selectedNote && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-xl font-bold text-black">{selectedNote.title}</h3>
                <p className="text-sm mt-2 text-gray-700">{selectedNote.content}</p>
                <button
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => setSelectedNote(null)}
                >
                    Close
                </button>
                
            </div>
        </div>
        )} */}
      
        </div>
    )
};

