import React, { useState } from "react";


function App() {
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState("");

  function bmicalc(e) {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || isNaN(h) || isNaN(w)) {
      alert("Please enter valid height and weight.");
    } else {
      const bmi = (weight / (height * height)) * 703;
      setbmi(bmi.toFixed(1));

      if (bmi < 25) {
        setmessage("you r underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setmessage("perfect weight");
      } else {
        setmessage("you r overweight");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          BMI Calculator
        </h1>
        <form onSubmit={bmicalc} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">
              Height (in inches)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Weight (in pounds)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Calculate BMI
          </button>
        </form>

        {bmi && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Your BMI is: <span className="text-blue-600">{bmi}</span>
            </h3>
            <p className="text-gray-600 mt-2">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
