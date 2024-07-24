import React from "react";
import { useState,useEffect } from "react";
const Form = () => {
  const [inputs, setInputs] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    console.log(inputs);
    alert("Data has been submitted!");
  };

  useEffect(() => {
   
    alert("welcome to the form page!")
  }, [])
  
  const submitHandle = () => {
    alert("data has been submited!");
  };
  return (
    <div>
    
      <h1 className="font-bold text-2xl text-center mt-5">
        User Detail's Form
      </h1>
      <form
        className="flex flex-col font-semibold justify-center m-5 p-5 gap-10 border-2 border-red-200"
        onSubmit={handleSubmit}
      >
        <label>
          Enter your name:
          <input className="border-2 border-red-400 ml-2"
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Enter your email:
          <input className="border-2 border-red-400 ml-2"
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Enter your age:
          <input
         className="border-2 border-red-400 ml-5"
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
            required
          />
        </label>
        <input
          className="cursor-pointer"
          type="submit"
          onClick={() => submitHandle()}
        />
      </form>

      <div className="formdata font-semibold flex flex-col justify-center items-center">
        <h1 className="text-2xl">Form Data</h1>
        <p className="text-black">Your name is: {isSubmitted && inputs.username}</p>
        <p className="text-black">Your email is: {isSubmitted && inputs.email}</p>
        <p className="text-black">Your age is: { isSubmitted && inputs.age}</p>
      </div>
    </div>
  );
};

export default Form;
