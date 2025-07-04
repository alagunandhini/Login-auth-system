import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";

const Login=()=>{


         const navigate = useNavigate();
         const location=useLocation();
         const {email:passedEmail,password:passedPass}=location.state;
         const [email,setEmail]=useState(passedEmail||"");
         const [password,setPassword]=useState(passedPass||"");
   


         const handlechange=async(e)=>{
                e.preventDefault();
                if(!email||!password){
                    alert("pls enter all fields");
                    return;
                }
                

                
            try{
                const res=await axios.post("http://localhost:3001/login",{
                    email,password
                })
                

             console.log(res.data)
             navigate('/dash')




            }catch(e){
                console.log(e)


            }


            }




    return(
        <>
           <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50'> 
      <form className="border border-gray-200 px-10 py-8 shadow-md bg-white" onSubmit={handlechange}>
       <h2 className='text-4xl font-bold mb-2 text-teal-300'> Log in</h2>
                <p className='text-gray-400 mb-5'>Don't Have An Account? <Link to="/register" className='text-gray-600  hover:text-teal-200'>Register</Link> </p>


{/* Name */}
        {/* <div className='mb-4'>
          <label className='font-semibold text-gray-500 '>Name</label>
          <input type='text ' className='w-full p-2 border border-teal-200 rounded'/>
     </div> */}
{/* email */}
        <div className='mb-4'>
          <label className='font-semibold text-gray-500 '>Email</label>
          <input type='text ' className='w-full p-2 border border-teal-200 rounded'value={email} onChange={(e)=>setEmail(e.target.value)}/>
     </div>
{/* password */}
        <div className='mb-6'>
          <label className='font-semibold text-gray-500 '>Password</label>
          <input type='password' className='w-full p-2 border border-teal-200 rounded' value={password} onChange={(e)=>setPassword(e.target.value)}/>
     </div>

     <div className="w-full flex justify-center  ">
        <button className="bg-teal-300 px-6 py-2 text-white rounded hover:bg-teal-200" type="submit" >Log in</button>
     </div>


      </form>

    </div>
        
        </>
    )
     

}
export default Login 