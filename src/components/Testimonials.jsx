import React from "react";
import MarqueeClientSection from "./MarqueeClientSection";

const testimonials = [
  {
    text: "Quansys AI has transformed the way we handle customer calls. The AI's multilingual fluency and quick learning curve have made our support process seamless and more efficient.",
    author: "Lovely",
    role: "Founder & CEO of 7Stone Finance",
    date: "Nov 20, 2024",
    avatar: "/111.jpg",
    logo: "/5-7stone.png",
  },
  {
    text: "I was amazed during the Quansys AI demo; the AI voice agents were so real and naturally conversational that I genuinely thought I was speaking to a human, blurring the line between machine and human communication.",
    author: "Akash Gupta",
    role: "Co-Founder & CEO of Zypp Electric",
    date: "Feb 17, 2024",
    avatar: "/akash.png",
    logo: "/Zypp-Electric.png",
  },
];
const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-[#d7cecc] " id="testimonial">
      <div className="max-w-7xl lg:py-20 mx-auto">
        <h1 className="text-3xl lg:text-[64px] font-bold text-center mb-12">
          Testimonials
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-15">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-lg flex flex-col justify-center gap-4 "
            >
              {/* Quote mark */}

              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`${testimonial.author}'s avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-500 text-xs lg:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={testimonial.logo}
                    alt=""
                    className={
                      index === 1 ? "max-w-30 " : "invert-100 max-w-30 "
                    }
                  />
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl">
                <div className="ml-4">
                  <svg
                    className="h-16 w-16 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                </div>

                {/* Testimonial content */}
                <div className="max-w-90 p-5 ml-20 flex flex-col items-end">
                  <p className="text-gray-600 lg:text-lg mb-8 leading-relaxed text-center">
                    {testimonial.text}
                  </p>

                  <p className="mt-4 text-gray-600">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="lg:flex hidden flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mt-24 mb-5">Our Clients</h1>
          <MarqueeClientSection />
        </div> */}
      </div>
    </section>

    // <div className="bg-[#f3f5ff] h-[100vh]">
    //   <div className="w-[80%] mx-auto pt-20 pb-20">
    //     <h1 className="text-3xl lg:text-[64px] font-bold text-center mb-12">
    //       Testimonials
    //     </h1>
    //     <div className="flex items-center justify-center gap-x-30">
    //       {testimonials.map((item, index) => (
    //         <div className="h-100 w-100 flex item-center justify-center flex-col rounded-2xl">
    //           <div className="bg-[#eeeeff] flex h-40 items-center justify-center rounded-t-2xl">
    //             <img src={item.logo} alt="" className="invert-100 w-40 h-13" />
    //           </div>
    //           <div className="bg-white rounded-b-2xl h-100">
    //             <div className=" w-[85%] mx-auto">
    //               <h3 className="font-semibold text-lg mt-5 text-[#1c224f]">
    //                 {item.text}
    //               </h3>
    //               <div className="h-[1px] w-full bg-gray-100 opacity-100 mt-5 mb-7" />
    //               <div className="flex gap-x-5 ">
    //                 <img
    //                   src={item.avatar}
    //                   alt=""
    //                   className="rounded-full w-12 h-12"
    //                 />
    //                 <div className="">
    //                   <h3>{item.author}</h3>
    //                   <p>{item.role}</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Testimonials;
