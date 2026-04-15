import React, { useContext } from "react";
import { toast } from "react-toastify";
import { TimelineContext } from "../components/TimelineContext";

const Contact = ({ card }) => {
  const { addToTimeline } = useContext(TimelineContext);

  const handleVideo = () => {

console.log("CARD:", card);
console.log("PICTURE:", card?.picture);


    toast.success("🎥 Video call started!");

    addToTimeline({
      user: "You",
      name: card?.name,
      picture: card?.picture,
      type: "Video Call",
      date: new Date().toLocaleString(),
    });
  };

  const handleCall = () => {
    toast.success("📞 Audio Call started!");
  };

  const handleMessage = () => {
    toast.info("💬 Message sent!");
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>

      <div className="grid grid-cols-3 gap-4">
        <button onClick={handleCall}>
          <img src="/call.png" />
          <p>Audio</p>
        </button>

        <button onClick={handleMessage}>
          <img src="/text.png" />
          <p>Message</p>
        </button>

        <button onClick={handleVideo}>
          <img src="/video.png" />
          <p>Video</p>
        </button>
      </div>
    </div>
  );
};

export default Contact ;
