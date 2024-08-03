import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Enter fullname'
							className='w-full input input-bordered  h-10'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter Username'
							className='w-full input input-bordered h-10'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						href='#'
					>
						Already have an account?
					</Link>

					<div>
          <div className="flex justify-center items-center">
            <button type="submit" className="btn btn-neutral mt-1 flex items-center justify-center bg-sky-600 text-white py-2 px-4 rounded" disabled={loading}>
               {/* Signup */}
			   {loading? <span className="loading loading-spinner"></span>:"Sign up"}
            </button>
            </div>
						{/* <button className='btn btn-block btn-sm mt-2 border border-sky-600' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button> */}
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;

// import React, { useState } from 'react'
// import GenderCheckbox from './GenderCheckbox'
// import { Link } from 'react-router-dom'
// import useSignup from '../../hooks/useSignup'

// export default function SignUp() {
//   const [inputs, setInputs] = useState({
//     fullName: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     gender: ''
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setInputs({
//       ...inputs,
//       [name]: value
//     })
//   }
//   //handling checkboxes
//   const handleCheckboxChange = (gender)=>{
//     setInputs({...inputs,gender})
//   }


//   const {loading,signup} = useSignup()
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     await signup(inputs)
//     // console.log(inputs)
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-5xl font-semibold text-center text-black">
//           Signup
//           <span className="text-blue-800"> </span>
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className="label p-2 mt-1">
//               <span className="label-text font-bold text-xl">FullName</span>
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Enter fullname"
//               value={inputs.fullName}
//               onChange={handleChange}
//               className="input input-bordered w-full max-w-xs"
//             />
//             <label className="label p-2 mt-1">
//               <span className="label-text font-bold text-xl">Username</span>
//             </label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Enter username"
//               value={inputs.username}
//               onChange={handleChange}
//               className="input input-bordered w-full max-w-xs"
//             />
//             <label className="label p-2 mt-1">
//               <span className="label-text font-bold text-xl">Password</span>
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter password"
//               value={inputs.password}
//               onChange={handleChange}
//               className="input input-bordered w-full max-w-xs"
//             />
//             <label className="label p-2 mt-1">
//               <span className="label-text font-bold text-xl">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={inputs.confirmPassword}
//               onChange={handleChange}
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <GenderCheckbox onCheckboxChange= {handleCheckboxChange} selectedGender={inputs.gender}/>
//           <Link to="/login" className="test-sm hover:underline hover:text-sky-500 mt-3 inline-block text-black font-semibold">Already have an account??? Login</Link>
//           <div className="flex justify-center items-center">
//             <button type="submit" className="btn btn-neutral mt-1 flex items-center justify-center bg-sky-600 text-white py-2 px-4 rounded">
//               Signup
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

