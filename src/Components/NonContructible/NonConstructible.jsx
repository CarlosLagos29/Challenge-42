import React, { useState } from 'react';
import nonConstructible from '../../Functions/NonContructible/NonContructible';

const NonConstructible = () => {
  const [result, setResult] = useState('Tu resultado');
  const [coins, setCoins] = useState([]);
  const [currentcoin, setCurrentCoin] = useState(0);

  const handleResult = () => {
    const res = nonConstructible(coins);
    setResult(res);
  };

  const handleCoins = () => {
    if (currentcoin > 0) {
      setCoins([...coins, +currentcoin]);
      setCurrentCoin(0);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className=" text-center text-balance text-2xl">
        Aquí podrás interactuar con tus monedas y ver cuál es el número mínimo
        que no puedes hacer sumándolas
      </h1>
      <h2 className=" text-2xl underline text-green-400 px-4 decoration">
        {result}
      </h2>
      <ul className="flex gap-2">
        {coins.map((c, index) => (
          <li
            className="border rounded-xl border-slate-400 px-2 hover:bg-red-600"
            key={index}
            onClick={() => {
              setCoins(coins.filter((_, i) => i !== index));
            }}
          >
            {c}
          </li>
        ))}
      </ul>
      <section className="flex justify-center items-center gap-3">
        <label>Ingresa tus monedas:</label>
        <input
          className=" text-slate-900 px-2 rounded-xl"
          type="number"
          min={1}
          value={currentcoin}
          onChange={(event) => setCurrentCoin(event.target.value)}
        />
        <button
          className="px-3 border rounded-xl text-white bg-blue-500 disabled:bg-slate-500"
          onClick={handleCoins}
          disabled={currentcoin < 1}
        >
          Seleccionar moneda
        </button>
      </section>

      <button
        className="px-5 py-2 border rounded-xl text-white bg-blue-500 disabled:bg-slate-500"
        onClick={handleResult}
      >
        Poner a prueba!
      </button>
    </div>
  );
};

export default NonConstructible;
