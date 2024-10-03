"use client";
import { useState } from "react";
import Options from "@components/Options";
import { useEffect } from "react";


const Form = () => {

  const [value, setValue] = useState(0);
  const [convertFrom, setConvertFrom] = useState("");
  const [convertTo, setConvertTo] = useState("");
  const [measuresList, setMeasuresList] = useState([]);
  const [conversionType, setConversionType] = useState("");
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (measuresList.length > 0) {
      setConvertFrom(measuresList[0]);
      setConvertTo(measuresList[1]);
    }
  }, [measuresList]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/convert", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: parseFloat(value),
        convertFrom,
        convertTo,
        conversionType,
      }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <Options setMeasuresList={setMeasuresList} setConversionType={setConversionType}/>
      <br />
      <div className="mb-5">
        <label
          htmlFor="value"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
            Enter the value to convert
        </label>
        <input
          type="number"
          id="value"
          value={value}
          className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="0.0"
          required
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="mb-5">
      <label htmlFor="convertFrom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Unit to convert from:</label>
      <select id="convertFrom" value={convertFrom} onChange={(e) => setConvertFrom(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    {measuresList.map((measure) => (
                <option key={measure} value={measure}>{measure}</option>
    ))}
</select>
      </div>
      <div className="mb-5">
        <label
          htmlFor="convertTo"
          className="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-900"
        >
          Unit to convert to:
        </label>
        <select id="convertTo" value={convertTo} onChange={(e)=> setConvertTo(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    {measuresList.map((measure) => (
        <option key={measure} value={measure}>{measure}</option>
    ))}
</select>
      </div>
      <div className="flex flex-row space-x-4">
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-50 sm:w-auto px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-pink-700 dark:focus:ring-blue-800"
      >
        Convert
      </button>
      <input type="text" id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={result} disabled readonly/>
      </div>
      
    </form>
  );
};

export default Form;
