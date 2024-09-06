import React from "react";
import NonConstructible from "./Components/NonContructible/NonConstructible";
import TwoNumsum from "./Components/TwoNumSum/TwoNumsum";

import { useState } from "react";

const App = () => {
  const [view, setView] = useState(true);

  return (
    <main className=" w-[95%] m-auto py-5 flex flex-col items-center space-y-3 ">
      <nav className="w-full flex justify-center gap-10">
        <button className={` px-5 py-2 border rounded-xl ${ view? 'bg-blue-500' : 'bg-slate-500'} text-white`}
        onClick={() => setView(true)}>
          Non-Constructible Change
          </button>
        <button 
        className={` px-5 py-2 border ${ !view? 'bg-blue-500' : 'bg-slate-500'} text-white rounded-xl`}
        onClick={() => setView(false)}>
          Two Number Sum
          </button>
      </nav>

    <div className="">
      {view ? <NonConstructible /> : <TwoNumsum />}
    </div>
    </main>
  );
};

export default App;
