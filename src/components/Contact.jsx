import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const handleCall = () => {
    toast.success("📞 Audio Call started!");
  };

  const handleMessage = () => {
    toast.info("💬 Message sent!");
  };

  const handleVideo = () => {
    toast.success("🎥 Video call started!");
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>

      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={handleCall}
          className="flex flex-col items-center justify-center py-8 border border-gray-200 rounded-3xl hover:border-gray-300 hover:bg-gray-50 transition"
        >
          <img src="/call.png" />
          <p className="font-semibold">Audio</p>
        </button>

        <button
          onClick={handleMessage}
          className="flex flex-col items-center justify-center py-8 border border-gray-200 rounded-3xl hover:border-gray-300 hover:bg-gray-50 transition"
        >
          <img src="/text.png" />
          <p className="font-semibold">Message</p>
        </button>

        <button
          onClick={handleVideo}
          className="flex flex-col items-center justify-center py-8 border border-gray-200 rounded-3xl hover:border-gray-300 hover:bg-gray-50 transition"
        >
          <img src="/video.png" />
          <p className="font-semibold">Video </p>
        </button>
      </div>
    </div>
  );
};

export default Contact;
