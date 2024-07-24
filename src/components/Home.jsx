import React from "react";
import { useState,useEffect } from "react";

const Home = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
   
    alert("welcome to the home page!")
  }, [])
  

  return (
    <div className="font-bold flex flex-col justify-center  items-center mt-40 gap-5">
        <h1>Basic Counter</h1>
      <h1>{count}</h1>
      <button className="p-3 hover:text-black bg-red-300 text-white rounded-md" onClick={()=>setcount(()=>count+1)}>click me</button>
    </div>
  );
};

export default Home;
