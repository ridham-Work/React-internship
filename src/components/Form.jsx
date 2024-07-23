import React from "react";
import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

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
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Enter your email:
          <input
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
            className="text-red-500"
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
        <p className="text-red-800">Your name is: {inputs.username}</p>
        <p className="text-red-800">Your email is: {inputs.email}</p>
        <p className="text-red-800">Your age is: {inputs.age}</p>
      </div>
    </div>
  );
};

export default Form;
