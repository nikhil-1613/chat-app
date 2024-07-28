import React from 'react'
import GenderCheckbox from './GenderCheckbox'

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-5xl font-semibold text-center text-black ">
          Signup
          <span className="text-blue-800"> </span>
        </h1>
        <form>
          <div>
            <label className="label p-2 mt-1">
              <span className=" label-text font-bold text-xl">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              className="input input-bordered w-full max-w-xs"
            />
             <label className="label p-2 mt-1">
              <span className=" label-text font-bold text-xl">Usernmae</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label p-2 mt-1">
              <span className=" label-text font-bold text-xl">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="input input-bordered w-full max-w-xs"
            />

            <label className="label p-2 mt-1">
              <span className=" label-text font-bold text-xl">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
            <GenderCheckbox/>
          <a href="#" className="test-sm hover:underline hover:text-red-600 mt-3 inline-block"> Already have an account??? Login</a>
          <div class="flex justify-center items-center ">
            <button class="btn btn-neutral mt-1 flex items-center justify-center bg-red-600 text-white py-2 px-4 rounded">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
