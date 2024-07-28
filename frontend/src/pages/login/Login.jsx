import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-5xl font-semibold text-center text-black ">
          Login
          <span className="text-blue-800"> </span>
        </h1>
        <form>
          <div>
            <label className="label p-2 mt-2">
              <span className=" label-text font-bold text-xl">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label p-2 mt-2">
              <span className=" label-text font-bold text-xl">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <a href="#" className="test-sm hover:underline hover:text-red-600 mt-3 inline-block"> Don't have an account create now</a>
          <div class="flex justify-center items-center ">
            <button class="btn btn-neutral mt-2 flex items-center justify-center bg-red-600 text-white py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



//started code
// import React from "react";

// export default function Login() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-5xl font-semibold text-center text-black ">
//           Login
//           <span className="text-blue-800"> </span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2 mt-2">
//               <span className=" label-text font-bold text-xl">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="input input-bordered w-full max-w-xs"
//             />
//             <label className="label p-2 mt-2">
//               <span className=" label-text font-bold text-xl">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Password"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <a href="#" className="test-sm hover:underline hover:text-red-600 mt-3 inline-block"> Don't have an account create now</a>
//           <div class="flex justify-center items-center ">
//             <button class="btn btn-neutral mt-2 flex items-center justify-center bg-red-600 text-white py-2 px-4 rounded">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
