import React from 'react'

const Noactivity = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
  <div className="text-6xl mb-4">📭</div>

  <h2 className="text-xl font-semibold text-gray-700">
    No Activity Yet
  </h2>

  <p className="text-gray-500 mt-2 max-w-md">
    You haven’t done any calls, messages, or video activities yet. Start interacting to see your timeline here.
  </p>
</div>
  )
}

export default Noactivity