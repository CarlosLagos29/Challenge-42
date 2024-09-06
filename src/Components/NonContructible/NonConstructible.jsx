import React from "react";
import nonConstructible from "../../Functions/NonContructible/NonContructible";

import { useState } from "react";

const NonConstructible = () => {
  const [result, setResult] = useState("Tu resultado");

  const [coins, setCoins] = useState([]);
  const [currentcoin, setCurrentCoin] = useState(null);

  const handleResult = () => {
    const res = nonConstructible(coins);
    setResult(res);
  };

  const handleCoins = () => {
    if (currentcoin != null) {
      setCoins([...coins, +currentcoin]);
    }
    console.log(coins);
    setCurrentCoin(null);
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-6">
      <h1>
        Aqui podras interactuar con tus monedas y ver cual es el numero minimo
        que no puedes hacer sumandolas
      </h1>
      <h2>{result}</h2>
      <ul>
        {coins.map((c, index) => (
          <li
            key={index}
            onClick={() => {
              setCoins(coins.splice(index));
            }}
          >
            {c}
          </li>
        ))}
      </ul>
      <section className=" flex justify-center items-center gap-3">
        <label>Ingresa tus monedas:</label>
        <input
          type="number"
          min={1}
          onChange={(event) => {
            setCurrentCoin(event.target.value);
          }}
        />
        <button onClick={handleCoins} disabled={currentcoin < 1}>
          Seleccionar moneda
        </button>
      </section>

      <button onClick={handleResult}>Magia</button>
    </div>
  );
};

export default NonConstructible;
