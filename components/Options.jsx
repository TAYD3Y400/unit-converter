
const Options = ({ setMeasuresList, setConversionType }) => {
    const handleLengthClick = () => {
      setMeasuresList([
        'Meter',
        'Kilometer',
        'Centimeter',
        'Millimeter',
        'Micrometer',
        'Nanometer',
        'Mile',
        'Yard',
        'Foot',
        'Inch'
      ]);
      setConversionType('length');
    };
  
    const handleWeightClick = () => {
      setMeasuresList([
        'Kilogram',
        'Gram',
        'Milligram',
        'Metric ton',
        'Long ton',
        'Short ton',
        'Pound',
        'Ounce',
        'Carrat',
        'Atomic mass unit'
      ]);
      setConversionType('weight');
    };
  
    const handleTemperatureClick = () => {
      setMeasuresList([
        'Celsius',
        'Fahrenheit',
        'Kelvin'
      ]);
      setConversionType('temperature');
    };

  return (
    <div
      className="inline-flex rounded-md shadow-sm w-full flex-center"
      role="group"
    >
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={handleLengthClick}
      >
        Length
      </button>
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={handleWeightClick}
      >
        Weight
      </button>
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={handleTemperatureClick}
      >
        Temperature
      </button>
    </div>
  );
};

export default Options;
