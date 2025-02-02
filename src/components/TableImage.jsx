import React from "react";
import Features from "./Features";
import Footer from "./Footer";

const TableImage = () => {
  return (
    <div className=" bg-gray-200 flex flex-col items-center justify-center">
      <main className="container mx-auto py-8 px-4 w-[90%] flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-2">
            Revolutionizing Customer Support
            <br />
            with Cutting-Edge AI Solutions
          </h1>
        </div>

        <div className="bg-white border-gray-700 rounded-2xl shadow-md p-6 flex items-center justify-center flex-col w-[90%] ">
          <h2 className="text-xl font-semibold mb-4">
            Multilingual AI Call Agent
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            AI-powered multilingual call agents designed to handle support and
            sales across languages. They integrate seamlessly with your
            enterprise systems, automating tasks like data retrieval and updates
            to boost efficiency and customer satisfaction.
          </p>

          <img
            src="https://www.quansys.ai/wp-content/uploads/2024/12/Screenshot.png"
            alt="table"
            className="w-[70%] m-7"
          />
        </div>
      </main>

      <Features />
      <Footer />
    </div>
  );
};

export default TableImage;
