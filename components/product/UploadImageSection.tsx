"use client";

import { UploadButton } from "@/utils/uploadthing";

export default async function UploadedImageSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
