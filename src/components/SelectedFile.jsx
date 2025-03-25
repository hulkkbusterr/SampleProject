import React, { useEffect, useState } from "react";

function SelectedFile({ file }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!file) return;

    const fileType = file.type;

    if (fileType.startsWith("image/")) {
      // Create image preview URL
      const imageUrl = URL.createObjectURL(file);
      setPreview(<img src={imageUrl} alt="Selected" className="w-full h-full object-cover rounded" />);
    } 
    else if (fileType === "application/pdf") {
      // Show PDF icon with an open link
      setPreview(
        <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center justify-center h-full">
            📄 <span className="text-sm text-gray-700">PDF</span>
          </div>
        </a>
      );
    } 
    else if (fileType.startsWith("text/") || fileType.includes("word")) {
      // Show text file icon
      setPreview(
        <div className="flex flex-col items-center justify-center h-full text-center">
          📝 <span className="text-sm text-gray-700">{file.name}</span>
        </div>
      );
    } 
    else {
      // Unknown file type
      setPreview(
        <div className="flex flex-col items-center justify-center h-full">
          ❓ <span className="text-sm text-gray-700">{file.name}</span>
        </div>
      );
    }

    // Cleanup object URL on unmount
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [file]);

  return (
    <div className="h-28 w-20 border rounded-lg bg-amber-50 flex items-center justify-center overflow-hidden">
      {preview}
    </div>
  );
}

export default SelectedFile;
