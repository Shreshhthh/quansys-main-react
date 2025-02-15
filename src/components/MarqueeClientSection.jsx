import React from "react";

const marqueeImages = [
  {
    logo: "/1-marg.png",
  },
  {
    logo: "/2-pazcare.png",
  },
  {
    logo: "/3-ayushpay.png",
  },
  {
    logo: "/4-intargos.png",
  },
  {
    logo: "/6-omelo.png",
  },
  {
    logo: "/5-7stone.png",
  },
];

const MarqueeClientSection = () => {
  return (
    <main className=" mx-auto hidden lg:flex overflow-hidden space-x-1 mt-5">
      <div className="animate-loop-scroll flex space-x-15">
        {marqueeImages.map((image, index) => (
          <img
            src={image.logo}
            key={index}
            className={
              index === 1
                ? `backdrop-invert-100 w-20 gap-15`
                : `invert-100 w-20 gap-15`
            }
          />
        ))}
        {marqueeImages.map((image, index) => (
          <img
            src={image.logo}
            key={index}
            className={
              index === 1
                ? `backdrop-invert-100 w-20 gap-15`
                : `invert-100 w-20 gap-15`
            }
          />
        ))}
        {marqueeImages.map((image, index) => (
          <img
            src={image.logo}
            key={index}
            className={
              index === 1
                ? `backdrop-invert-100 w-20 gap-15`
                : `invert-100 w-20 gap-15`
            }
          />
        ))}
      </div>
    </main>
  );
};

export default MarqueeClientSection;
