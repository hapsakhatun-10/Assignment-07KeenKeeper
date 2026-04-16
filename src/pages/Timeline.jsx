import { useContext } from "react";
import { TimelineContext } from "../components/TimelineContext";
import { FaVideo, FaPhone, FaComment } from "react-icons/fa";
import Noactivity from "../components/Noactivity";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>

      {timeline.length === 0 ? (
       <Noactivity/>
      ) : (
        timeline.map((item) => (
          <div
            key={item.id}
            className="bg-white p-3 mb-2 rounded shadow flex items-center gap-3"
          >
            <div className="text-xl">
              {item.type === "video" && <FaVideo />}
              {item.type === "call" && <FaPhone />}
              {item.type === "message" && <FaComment />}
            </div>

            <div>
              <h2 className="font-semibold ">
                {item.type}{" "}
                <span className="font-m text-gray-400"> with {item.name}</span>
              </h2>

              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Timeline;
