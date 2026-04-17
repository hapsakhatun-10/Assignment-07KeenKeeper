import React, { useContext } from "react";
import { toast } from "react-toastify";
import { TimelineContext } from "../components/TimelineContext";

const Contact = ({ card }) => {
  const { addToTimeline } = useContext(TimelineContext);

  const handleVideo = () => {
    toast.success("🎥 Video call started!");

    addToTimeline({
      type: "video",
      name: card?.name,
      date: new Date().toLocaleString(),
    });
  };

  const handleCall = () => {
    toast.success("📞 Audio Call started!");

    addToTimeline({
      type: "call",
      name: card?.name,
      date: new Date().toLocaleString(),
    });
  };

  const handleMessage = () => {
    toast.info("💬 Message sent!");

    addToTimeline({
      type: "message",
      name: card?.name,
      date: new Date().toLocaleString(),
    });
  };
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>

      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={handleCall}
          className="border border-gray-300 rounded-xl p-3 flex flex-col items-center gap-1 hover:bg-gray-50 transition"
        >
          <img src="/call.png" />
          <p>Audio Call</p>
        </button>

        <button
          onClick={handleMessage}
          className="border border-gray-300 rounded-xl p-3 flex flex-col items-center gap-1 hover:bg-gray-50 transition"
        >
          <img src="/text.png" />
          <p>Message</p>
        </button>

        <button
          onClick={handleVideo}
          className="border border-gray-300 rounded-xl p-3 flex flex-col items-center gap-1 hover:bg-gray-50 transition"
        >
          <img src="/video.png" />
          <p>Video Call</p>
        </button>
      </div>
    </div>
  );
};

export default Contact;
