import React from 'react';
import NonConstructible from './Components/NonContructible/NonConstructible';
import TwoNumsum from './Components/TwoNumSum/TwoNumsum';

import { useState } from 'react';

const App = () => {
  const [view, setView] = useState(true);

  return (
    <main className=" w-[95%] m-auto lg:h-[100vh] py-5 pt-10 flex flex-col items-center space-y-3 ">
      <nav className="w-full flex flex-wrap justify-center gap-2 lg:gap-10">
        <button
          className={` px-5 py-2 border rounded-xl ${view ? 'bg-blue-500' : 'bg-slate-500'} text-white`}
          onClick={() => setView(true)}
        >
          Non-Constructible Change
        </button>
        <button
          className={` px-5 py-2 border ${!view ? 'bg-blue-500' : 'bg-slate-500'} text-white rounded-xl`}
          onClick={() => setView(false)}
        >
          Two Number Sum
        </button>
      </nav>

      <div className=" m-auto w-[50%] flex items-center justify-center">
        {view ? <NonConstructible /> : <TwoNumsum />}
      </div>
    </main>
  );
};

export default App;
