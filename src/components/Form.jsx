import React from "react";
import { useState } from "react";

export default function Form() {
    const [data,setData]=useState({
        name:'',
        number:'',
        email:'',
        gender:''
    })
const [submittedData,setSubmittedData]=useState(null)
    const submitForm=(e)=>{
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSubmittedData(data)
    }
  return (
    <div>

    <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-green-400 p-4 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl text-black mb-6 text-center">Survey Form</h1>
                <form action="" onSubmit={handleSubmit} className="space-y-2 ">
                    <div >
                        <label htmlFor="name" className="block text-black">Enter Your Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            onChange={submitForm}
                            value={data.name}
                            placeholder="Enter Name ..."
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="number" className="block text-black">Enter Your Number</label>
                        <input 
                            type="number" 
                            name="number" 
                            id="number" 
                            onChange={submitForm}

                            value={data.number}
                            placeholder="Enter PhoneNumber"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-black">Enter Your Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onChange={submitForm}

                            value={data.email}
                            placeholder="Enter Email ..."
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-black mb-1">Select Gender</label>
                        <div className="flex items-center space-x-4">
                            <label className="text-black">
                            <input type="radio" name="gender" onChange={submitForm} checked={data.gender==="Male"} value={'Male'} className="mr-2" /> Male
                            </label>
                            <label className="text-black">
                                <input type="radio" name="gender" checked={data.gender==='Female'} onChange={submitForm} value={'Female'} className="mr-2" /> Female
                            </label>
                        </div>
                    </div>
                    
                    <div>
                        <button 

                            type="submit" 
                            className="w-1/3 mt-4 py-2 bg-blue-600 text-black font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
           
        </div>
        <div>
           {submittedData && (
                <div className="mt-6 p-4 bg-white rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Submitted Data:</h2>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Number:</strong> {submittedData.number}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Gender:</strong> {submittedData.gender}</p>
                </div>
            )}
           </div>
    </div>

  );
}
