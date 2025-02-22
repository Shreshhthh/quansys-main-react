import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="flex items-center justify-center bg-black h-[250px]">
      <footer className="w-[90%] lg:mt-10 lg:mb-10">
        {/* <div className="h-[1px] bg-gray-400"></div> */}
        {/* <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-5">
          <div className="lg:flex hidden items-center gap-6 mb-4 md:mb-0 flex-col">
            <a href="/" className="text-xl font-medium">
              <img src="/logo.png" alt="" className="w-40 invert-[100%]" />
            </a>
            <div className="flex items-center gap-10">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6 lg:text-sm text-xs text-gray-600">
            <span>© 2024 Quansys AI. All rights reserved.</span>
            <a href="/terms" className="hover:text-gray-900">
              Terms
            </a>
            <a href="/privacy" className="hover:text-gray-900">
              Privacy
            </a>
          </div>
        </div> */}

        <div className="flex items-center justify-between lg:mt-10">
          <div className="flex items-center gap-10">
            <img src="/logo-light.png" alt="" className="w-35 invert-[100%]" />

            <ul className="lg:flex hidden justify-between items-center gap-7">
              <li className="">
                <Link to="/" className="text-sm font-semibold text-white">
                  Home
                </Link>
              </li>
              <li className="">
                <a
                  href="/#table-images"
                  className="text-sm font-semibold text-white"
                >
                  Phone Call Agent
                </a>
              </li>
              <li className="">
                <a href="/#lisa" className=" text-sm font-semibold text-white">
                  Virtual Human Agent
                </a>
              </li>
              <li className="">
                <a
                  href="#features"
                  className=" text-sm font-semibold text-white"
                >
                  Features
                </a>
              </li>
              <li className="">
                <Link
                  to="/book-a-demo"
                  className=" text-sm font-semibold text-white"
                >
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-10 text-black">
            <a href="https://x.com/QuansysAI" target="_blank">
              <FaXTwitter className="w-7 h-7 bg-white p-1 rounded cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/Quansys" target="_blank">
              <FaLinkedinIn className="w-7 h-7 bg-white p-1 rounded cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="h-[1px] bg-gray-700 w-full lg:mt-15 mt-7 mb-5 lg:mb-6" />

        <div className="lg:flex flex-col lg:flex-row items-center justify-between">
          <p className="text-sm font-semibold text-gray-200 text-center">
            © 2024 Quansys AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-2 lg:mt-0 justify-center">
            <p className="text-white text-sm cursor-pointer hover:underline hover:text-gray-400">
              Privacy Policy
            </p>
            <p className="text-white text-sm cursor-pointer hover:underline hover:text-gray-400 ">
              Terms of service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
