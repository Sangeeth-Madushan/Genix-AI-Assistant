import React, { useEffect, useState } from "react";
import { dummyPlans } from "../assets/assets";
import Loading from "./Loading";

const Credits = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPlans = async () => {
    setPlans(dummyPlans);
    setLoading(false);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-8 mt-12 min-h-screen bg-gray-50 dark:bg-[#1c1c1c] transition-colors duration-300">
      <h1 className="mb-10 text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
        Credit Plans
      </h1>

      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className={`flex flex-col justify-between border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden p-6 relative ${
              plan._id === "pro"
                ? "bg-gradient-to-b from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 border-purple-400 scale-[1.02]"
                : "bg-white dark:bg-[#242424]"
            }`}
          >
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
                {plan.name}
              </h3>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                <span className="font-bold text-purple-600 dark:text-purple-400">
                  ${plan.price}
                </span>{" "}
                / {plan.credits} credits
              </p>

              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside dark:text-gray-300">
                {plan.features.map((feature, index) => (
                  <li key={index} className="leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`mt-6 w-full py-2.5 rounded-xl text-white font-medium transition-all duration-300 ${
                plan._id === "pro"
                  ? "bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30"
                  : "bg-gray-800 hover:bg-gray-900 dark:bg-purple-700 dark:hover:bg-purple-800"
              }`}
            >
              Buy Now
            </button>

            {plan._id === "pro" && (
              <span className="absolute px-3 py-1 text-xs font-semibold text-white uppercase bg-purple-600 rounded-full shadow-md top-3 right-3">
                Most Popular
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;
