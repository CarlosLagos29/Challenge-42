import React, { useState } from 'react';
import twoNumSum from '../../Functions/TwoNumSum/TwoNumsSum';

const TwoNumsum = () => {
  const [result, setResult] = useState('Tu resultado');
  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(0);

  const [currentSum, setCurrentsum] = useState(0);
  const [targetsum, setTargetsum] = useState(0);

  const handleResult = () => {
    const res = twoNumSum(numbers, targetsum);
    if (res.length) {
      setResult(res);
    } else {
      setResult(`No existen dos numeros que al sumarlos de ${targetsum}`);
    }
  };

  const handleNumbers = () => {
    if (currentNumber != null && currentNumber > 0) {
      setNumbers([...numbers, +currentNumber]);
      setCurrentNumber(0);
    }
    console.log(numbers);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-5 lg:gap-6">
      <h1 className=" text-center text-balance text-lg lg:text-2xl">
        Aquí podrás ver de una serie de números, si al pasarle otro número se
        puede lograr una suma de dos números para obtener ese resultado y qué
        números lo componen.
      </h1>
      <h2 className=" text-lg lg:text-2xl underline text-green-400 px-4 decoration">
        {Array.isArray(result) ? `${result[0]} y ${result[1]}` : result}
      </h2>

      <section className="flex flex-col justify-center items-center gap-3">
        <span className=" flex flex-wrap justify-center items-center gap-3">
          <label>Tu número objetivo:</label>
          <input
            className=" text-slate-900 px-2 rounded-xl"
            type="number"
            min={1}
            value={currentSum || ''}
            onChange={(event) => {
              setCurrentsum(event.target.value);
            }}
          />
          <button
            className="px-3 border rounded-xl text-white bg-blue-500 disabled:bg-slate-500"
            onClick={() => setTargetsum(currentSum)}
            disabled={currentSum < 1}
          >
            Seleccionar número
          </button>
        </span>

        <span>Suma actual: {targetsum}</span>
      </section>

      <section className="flex flex-col justify-center items-center gap-3">
        <span className="flex flex-wrap justify-center items-center gap-3">
          <label>Ingresa tus números:</label>
          <input
            className=" text-slate-900 px-2 rounded-xl"
            type="number"
            min={1}
            value={currentNumber || ''}
            onChange={(event) => {
              setCurrentNumber(event.target.value);
            }}
          />
          <button
            className="px-3 border rounded-xl text-white bg-blue-500 disabled:bg-slate-500"
            onClick={handleNumbers}
            disabled={currentNumber < 1}
          >
            Seleccionar número
          </button>
        </span>

        <span>
          <ul className="flex gap-2">
            {numbers.map((c, index) => (
              <li
                className="border rounded-xl border-slate-400 px-2 hover:bg-red-600"
                key={index}
                onClick={() => {
                  setNumbers(numbers.filter((_, i) => i !== index));
                }}
              >
                {c}
              </li>
            ))}
          </ul>
        </span>
      </section>
      <button
        className="px-5 py-2 border rounded-xl text-white bg-blue-500 disabled:bg-slate-500"
        onClick={handleResult}
        disabled={targetsum < 1}
      >
        Poner a prueba!
      </button>
    </div>
  );
};

export default TwoNumsum;
