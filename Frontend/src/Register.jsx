import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    console.log(name)
        console.log(email)
            console.log(password)
 
            //submitted details are send to backend 
            const handlechange=async(e)=>{
                e.preventDefault();
                if(!name||!email||!password){
                    alert("pls enter all fields");
                    return;
                }
                

                
            try{
                const res=await axios.post("http://localhost:3001/register",{
                    name,email,password
                })
             console.log(res.data)




            }catch(e){
                console.log(e)


            }


            }


    return (
        <>
                 <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50'> 
      <form className="border border-gray-200 px-10 py-8 shadow-md bg-white" onSubmit={handlechange}>
       <h2 className='text-4xl font-bold mb-2 text-teal-300'> Register</h2>
                <p className='text-gray-400 mb-5'>Already a member? <Link to="/" className='text-gray-600  hover:text-teal-200'>Log in</Link> </p>


{/* Name */}
        <div className='mb-4'>
          <label className='font-semibold text-gray-500 '>Name</label>
          <input type='text' value={name} className='w-full p-2 border border-teal-200 rounded' onChange={(e)=>setName(e.target.value)}/>
     </div>
{/* email */}
        <div className='mb-4'>
          <label className='font-semibold text-gray-500 '>Email</label>
          <input type='email' value={email}  className='w-full p-2 border border-teal-200 rounded' onChange={(e)=>setEmail(e.target.value)}/>
     </div>
{/* password */}
        <div className='mb-6'>
          <label className='font-semibold text-gray-500 '>Password</label>
          <input type='password' value={password} className='w-full p-2 border border-teal-200 rounded' onChange={(e)=>setPassword(e.target.value)}/>
     </div>

     <div className="w-full flex justify-center  ">
        <button className="bg-teal-300 px-6 py-2 text-white rounded hover:bg-teal-200" type="submit">Submit</button>
     </div>


      </form>

    </div>
        </>
    )

}
export default Register