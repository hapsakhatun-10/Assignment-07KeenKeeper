import React from 'react';


import { useLoaderData } from "react-router-dom";
import FriendsCard from '../friends/FriendsCard';
const HomePage = () => {

  const data = useLoaderData() || [];

  const count = {
    total: 0
  };

  data.forEach(item => {

    if (count[item.status]) {
      count[item.status]++;
    } else {
      count[item.status] = 1;
    }

    count.total++;
  });

  return (
    <>
      <div className="p-6 rounded-lg bg-white text-center">
        <h1 className="text-4xl mt-8 font-bold">
          Friends Status Dashboard
        </h1>

        <p className='text-s text-gray-600 mt-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
<button className="btn btn-neutral mt-6 bg-[#244D3F] text-white">+ Add a Friend</button>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-6">

       

 <div className='border border-gray-200' >
          <h2 className='font-semibold text-xl'>{count.total || 0}</h2>
          <p>Total Friends</p>
        </div>


 <div className='border border-gray-200' >
          <h2 className='font-semibold text-xl'>{count["overdue"] || 0}</h2>
          <p>Overdue</p>
        </div>

 <div className='border border-gray-200' >
          <h2 className='font-semibold text-xl'>{count["on-track"] || 0}</h2>
          <p>On Track</p>
        </div>

 <div className='border border-gray-200' >
          <h2 className='font-semibold text-xl'>{count["almost due"] || 0}</h2>
          <p>Almost Due</p>
        </div>


      </div>

   <div className="min-h-screen flex justify-center bg-gray-100 p-4">
  
  <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    
    {data.map((item) => (
      <FriendsCard key={item.id} data={item} />
    ))}

  </div>

</div>

    </>
  );
};

export default HomePage;