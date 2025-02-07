import React from "react";

const MarqueeClientSection = () => {
  return (
    <main className="lg:flex hidden overflow-hidden space-x-1 mt-5 mx-auto">
      <ul className="animate-loop-scroll flex space-x-6">
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/1.png"
            alt="marg"
            className="invert-100"
          />
        </li>
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/2.png"
            alt="payzcare"
            className="backdrop-invert-100"
          />
        </li>
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/3.png"
            alt="ayushpay"
            className="invert-100 "
          />
        </li>
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/4.png"
            alt="intargos"
            className="invert-100"
          />
        </li>
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/6.png"
            alt="omelo"
            className="invert-100 "
          />
        </li>
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/5-1.png"
            alt="7stone"
            className="invert-100"
          />
        </li>
      </ul>

      <ul className="animate-loop-scroll flex space-x-6" aria-hidden>
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/1.png"
            alt="marg"
            className="invert-100 "
          />
        </li>
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/2.png"
            alt="payzcare"
            className="backdrop-invert-100 "
          />
        </li>
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/3.png"
            alt="ayushpay"
            className="invert-100"
          />
        </li>
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/4.png"
            alt="intargos"
            className="invert-100 "
          />
        </li>
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/6.png"
            alt="omelo"
            className="invert-100 "
          />
        </li>
        <li>
          <img
            src="https://quansys.ai/wp-content/uploads/2024/12/5-1.png"
            alt="7stone"
            className="invert-100 "
          />
        </li>
      </ul>
    </main>
  );
};

export default MarqueeClientSection;
