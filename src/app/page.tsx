// pages/upload.js

export default function UploadPage() {
  return (
    <>
      <header>
        <title>GTP-Two Doc Upload</title>
        <meta name="description" content="Upload your documents for the competition" />
      </header>
      <main className="bg-gray-300 flex flex-col items-center text-gray-900 min-h-screen">
      <h2 className=" font-bold text-4xl flex  justify-center text-green-600 pt-10">TWEEK 2024</h2>
      <span className=" font-bold text-md flex  justify-center ">Knust Hackathon</span>

      <h2 className=" font-bold text-2xl flex  justify-center pt-6">GPT - TWO</h2>
      <div className="flex items-center mt-10b justify-center ">
        <div className="bg-white p-10 rounded-2xl rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-2xl font-semibold mb-6">GPT-Two Upload</h1>
          <p className=" mb-4">Choose a document to upload.</p>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="file-upload" className="block text-gray-600 font-medium mb-2">Select Document:</label>
              <input
                type="file"
                id="file-upload"
                name="file-upload"
                className="block w-full text-gray-800 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
      </main>
    </>
  );
}


// // pages/upload.js

// import { useState } from 'react';

// export default function UploadPage() {
//   const [filePreview, setFilePreview] = useState('');

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFilePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <header>
//         <title>Document Upload</title>
//         <meta name="description" content="Upload your documents" />
//       </header>
//       <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
//           <h1 className="text-xl font-semibold mb-4">Upload Document</h1>
//           <form action="#" method="POST">
//             <div className="mb-4">
//               <input
//                 type="file"
//                 id="file-upload"
//                 name="file-upload"
//                 accept=".pdf,.doc,.docx,.txt" // Adjust accepted file types if necessary
//                 className="block w-full text-gray-800 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 onChange={handleFileChange}
//               />
//             </div>
//             {filePreview && (
//               <div className="mb-4">
//                 <iframe
//                   src={filePreview}
//                   title="Document Preview"
//                   className="w-full h-64 border border-gray-300 rounded-lg"
//                 ></iframe>
//               </div>
//             )}
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               Upload
//             </button>
//           </form>
//         </div>
//       </main>
//     </>
//   );
// }
