import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          <div>
            <h2 className="text-xl font-bold">KeenKeeper</h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              A simple app to manage your tasks and stay productive.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:text-base">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <a href="#" className="text-gray-400 hover:text-white">Home</a>
            <a href="#" className="text-gray-400 hover:text-white">About</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </div>

      </div>
    </footer>
  );
}