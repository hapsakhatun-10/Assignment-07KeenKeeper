import { useParams, useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import Contact from "./Contact";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData() || [];

  const card = data.find((item) => String(item.id) === id);

  if (!card) return <h1>Card not found</h1>;

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Profile Card */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={card.picture}
                alt={card.name}
                className="w-28 h-28 rounded-full object-cover mb-4"
              />

              <h2 className="text-2xl font-semibold text-gray-900">
                {card.name}
              </h2>

              <div className="flex gap-2 mt-3 flex-wrap justify-center">
                <span className="px-4 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                  {card.status}
                </span>

                {card.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-gray-600 italic text-sm">{card.bio}</p>

              <p className="text-gray-500 text-xs mt-1">
                Preferred: {card.email}
              </p>
            </div>

            {/* Action Buttons */}

            <Button />
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-gray-900">
                  {card.days_since_contact}
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Days Since Contact
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-gray-900">
                  {card.goal}
                </div>
                <div className="text-gray-500 text-sm mt-1">Goal (Days)</div>
              </div>

              <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                <div className="text-3xl font-semibold text-gray-900">
                  {card.next_due_date}
                </div>
                <div className="text-gray-500 text-sm mt-1">Next Due</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Relationship Goal</h3>
                  <p className="text-gray-600 mt-1">
                    Connect every{" "}
                    <span className="font-medium">{card.goal} days</span>
                  </p>
                </div>

                <button className="px-5 py-2 text-sm border border-gray-300 rounded-2xl hover:bg-gray-50">
                  Edit
                </button>
              </div>
            </div>

            <Contact card={card} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
