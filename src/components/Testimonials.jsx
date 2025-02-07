import React from "react";
import MarqueeClientSection from "./MarqueeClientSection";

const testimonials = [
  {
    text: "Quansys AI has transformed the way we handle customer calls. The AI's multilingual fluency and quick learning curve have made our support process seamless and more efficient.",
    author: "Lovely",
    role: "Founder & CEO of 7Stone Finance",
    date: "Nov 20, 2024",
    avatar: "https://quansys.ai/wp-content/uploads/2024/12/111.jpg",
    logo: "https://www.quansys.ai/wp-content/uploads/2024/12/11.png",
  },
  {
    text: "Our sales have soared since integrating Quansys AI. The proactive and emotionally intelligent interactions have truly personalized our customer experience, leading to better retention and conversions.",
    author: "Amogh Tiwari",
    role: "Founder & CEO of Omelo",
    date: "Nov 28, 2024",
    avatar: "https://quansys.ai/wp-content/uploads/2024/12/222.jpg",
    logo: "https://www.quansys.ai/wp-content/uploads/2024/12/22.png",
  },
];
const Testimonials = () => {
  return (
    <section className="py-16 px-4" id="testimonial">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Testimonials</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-lg flex flex-col justify-center gap-4 hover:rotate-2 "
              data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
              data-aos-duration="3000"
              data-aos-mirror="true"
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
                  <img src={testimonial.logo} alt="" className="w-40" />
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
                <div
                  className="max-w-90 p-5 ml-20 flex flex-col items-end"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <p className="text-gray-600 lg:text-lg mb-8 leading-relaxed text-center ">
                    {testimonial.text}
                  </p>

                  <p className="mt-4 text-gray-600">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:flex hidden flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mt-24 mb-5">Our Clients</h1>
          <MarqueeClientSection />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
