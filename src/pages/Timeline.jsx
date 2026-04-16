import { useContext, useState } from "react";
import { TimelineContext } from "../components/TimelineContext";
import { FaVideo, FaPhone, FaComment } from "react-icons/fa";
import Noactivity from "../components/Noactivity";
import FilterBtn from "../components/FilterBtn";

const Timeline = () => {
  const [open, setOpen] = useState(false);
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("all");

  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>

      {/* FILTER BUTTONS */}

      {timeline.length > 0 && (
        <div className="relative mb-4 inline-block">
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-2 bg-gray-100 border rounded flex items-center gap-2"
          >
            <span>{filter === "all" ? "Filter Timeline" : filter}</span>
          </button>

          {open && (
            <div className="absolute mt-2 w-40 bg-white border rounded shadow p-2 flex flex-col gap-1 z-10">
              <button
                onClick={() => {
                  setFilter("message");
                  setOpen(false);
                }}
                className="text-left px-3 py-2 hover:bg-gray-100 rounded"
              >
                Message
              </button>

              <button
                onClick={() => {
                  setFilter("call");
                  setOpen(false);
                }}
                className="text-left px-3 py-2 hover:bg-gray-100 rounded"
              >
                Call
              </button>

              <button
                onClick={() => {
                  setFilter("video");
                  setOpen(false);
                }}
                className="text-left px-3 py-2 hover:bg-gray-100 rounded"
              >
                Video
              </button>
            </div>
          )}
        </div>
      )}

      {/* EMPTY STATE */}

      {timeline.length === 0 ? (
        <Noactivity />
      ) : (
        filteredTimeline.map((item) => (
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
              <h2 className="font-semibold">
                {item.type}{" "}
                <span className="text-gray-400">with {item.name}</span>
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
