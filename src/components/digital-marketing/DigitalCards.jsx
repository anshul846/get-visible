import React from "react";

export default function Digitalcards() {
  return (
    <div className="bg-blue-900 text-white min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-400 p-6 rounded-lg text-black">
            <h3 className="text-xl font-bold mb-4">
              SEARCH ENGINE OPTIMISATION
            </h3>
            <p className="text-sm mb-4">
              It takes structure, discipline and in-depth understanding of SEO
              to curate and deliver bespoke strategies that work for your
              individual business needs.
            </p>
            <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">
              VIEW our SEO Solutions
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-extrabold">
            INCREASE LEAD GENERATION AND SALES WITH OUR PROVEN STRATEGIES AND
            CROSS-SECTOR INSIGHTS.
          </h2>
        </div>
      </div>
    </div>
  );
}
