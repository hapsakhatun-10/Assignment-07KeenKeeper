import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-700">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-6 px-5 py-2 bg-green-900 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
}
