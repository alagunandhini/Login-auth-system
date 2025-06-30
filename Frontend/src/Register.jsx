import { Link } from "react-router-dom"
const Register=()=>{
    return (
        <>
                 <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50'> 
      <form className="border border-gray-200 px-10 py-8 shadow-md bg-white">
       <h2 className='text-4xl font-bold mb-2 text-teal-300'> Register</h2>
                <p className='text-gray-400 mb-5'>Already a member? <Link to="/" className='text-gray-600  hover:text-teal-200'>Log in</Link> </p>


{/* Name */}
        <div className='mb-4'>
          <label className='font-semibold text-gray-500 '>Name</label>
          <input type='text ' className='w-full p-2 border border-teal-200 rounded'/>
     </div>
{/* email */}
        <div className='mb-4'>
          <label className='font-semibold text-gray-500 '>Email</label>
          <input type='text ' className='w-full p-2 border border-teal-200 rounded'/>
     </div>
{/* password */}
        <div className='mb-6'>
          <label className='font-semibold text-gray-500 '>Password</label>
          <input type='password' className='w-full p-2 border border-teal-200 rounded'/>
     </div>

     <div className="w-full flex justify-center  ">
        <button className="bg-teal-300 px-6 py-2 text-white rounded hover:bg-teal-200">Submit</button>
     </div>


      </form>

    </div>
        </>
    )

}
export default Register