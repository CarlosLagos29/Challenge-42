import React from "react";
import twoNumSum from "../../Functions/TwoNumSum/TwoNumsSum";

import { useState } from "react";

const TwoNumsum = () => {
  const [result, setResult] = useState("Tu resultado");

  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);

  const [targetsum, setTargetsum] = useState(null);

  const handleResult = () => {
      

      const res = twoNumSum(numbers, targetsum);
      
      console.log(res);
  };

  const handleNumbers = () => {
    if (currentNumber != null) {
      setNumbers([...numbers, +currentNumber]);
    }
    console.log(numbers);
    setTargetsum(null);
  };

  return (
    <div>
      <h1></h1>
      <h2>{result}</h2>

      <input
        type="number"
        min={1}
        onChange={(event) => {
          setTargetsum(event.target.value);
        }}
      />

      <section className=" flex justify-center items-center gap-3">
      <ul>
        {numbers.map((c, index) => (
          <li
            key={index}
            onClick={() => {
                setNumbers(numbers.splice(index));
            }}
          >
            {c}
          </li>
        ))}
      </ul>
        <label>Ingresa tus monedas:</label>
        <input
          type="number"
          min={1}
          onChange={(event) => {
            setCurrentNumber(event.target.value);
          }}
        />
        <button onClick={handleNumbers} disabled={currentNumber < 1}>
          Seleccionar moneda
        </button>
      </section>
      <button onClick={handleResult}>
        Magia
      </button>
    </div>
  );
};

export default TwoNumsum;
