import React, { useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { BiSolidSend } from "react-icons/bi";
import SelectedFile from "./SelectedFile";

function FileUpload({ selectedBtn }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSelectFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSend = () => {
    console.log("Selected Btn", selectedBtn);
    console.log("File", file);
    console.log("Message", message);
  };


  return (
    <div className="w-[60%] rounded-lg bg-[#37383A] text-white h-40 mt-48 flex items-center px-4 border border-gray-600 hover:border-white">
      <div
        className="w-10 h-10 border border-gray-400 flex items-center justify-center bg-[#37383A] rounded-full cursor-pointer transition hover:border-white group"
        onClick={handleSelectFile}
      >
        <GoPlus size={20} className="text-gray-400 transition group-hover:text-white" />
      </div>

      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
        onChange={handleFileChange}
      />

      {file && <SelectedFile file={file} />}

      <input 
        disabled={!file}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text" 
        placeholder="Type a message..." 
        className="flex-1 mx-4 bg-transparent outline-none text-white placeholder-gray-400"
      />

      <div className="w-10 h-10 border border-gray-400 flex items-center justify-center bg-[#37383A] rounded-full cursor-pointer transition hover:border-white hover:bg-white group">
        <BiSolidSend onClick={handleSend} size={20} className="text-gray-400 transition group-hover:text-black" />
      </div>
    </div>
  );
}

export default FileUpload;
