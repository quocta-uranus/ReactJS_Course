// import { useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className="relative" >
      <header className=" pl-16 pr-16 py-8 absolute z-10 w-full ">
      <nav className=" flex justify-between items-center  max-w-5xl mx-40   ">
        <a className="">
          <img src="https://www.haujr.click/assets/header-logo-f3f84f25.svg" alt=""  width="130" height="29"/>
        </a>
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden   ">
          <li >
              <a href = "/home "className=" font-montserrat leading-normal text-lg font-bold text-slate-300  hover:text-red-300 m-5  ">
                Home
                </a>
          </li>
          <li >
              <a href = "/home "className=" font-montserrat leading-normal text-lg font-bold text-slate-300  hover:text-red-300 m-5  ">
                Product
                </a>
          </li>
          <li >
              <a href = "/home "className=" font-montserrat leading-normal text-lg font-bold text-slate-300  hover:text-red-300 m-5  ">
                About Us
                </a>
          </li>

        </ul>
       </nav>
      </header>
      <section className=" w-full " >
        <div className="relative xl:w-2/5 flex flex-col">
           
        </div>

      </section>
     
    </main>
  );
}

export default App;
