import React from 'react';

const Reviews = () => {
  return (
    <div>
      <div className="text-center mt-14 space-y-3 mb-6">
        <h1 className='text-2xl sm:text-3xl text-base-content/90'>Customer Reviews For This Service</h1>
        <div className="text-xl sm:text-2xl">
          <span className='text-primary'>★ ★ ★ ★ ★</span> <span> 4.0/5 (3 reviews)</span>
        </div>
      </div>
      {/* review and rating container */}
      <div className="">
        <div className="space-y-4 max-h-[300px] overflow-y-auto border p-1 @min-[500px]:p-2 rounded border-gray-500">
          <div className="p-4 border border-gray-300 bg-base-300/50 rounded space-y-2">
            <p>
              <span className='text-primary'>★ ★ ★ ★ ★</span> 
              <span className='text-base-content/60'> by  </span> <span className='text-secondary'>jane smith</span>
              <span className='text-base-content/60'> on </span>
              <span className='text-base-content/80'>24 july 2024</span>
            </p>
            <p>Good Support , but a bit slow response time</p>
          </div>


          <div className="p-5 border rounded">
            <p>★ ★ ★ ★ ★ <span>by jane smith</span></p>
            <p>Good Support , but a bit slow response time</p>
          </div>
          <div className="p-5 border rounded">
            <p>★ ★ ★ ★ ★ <span>jane smith</span></p>
            <p>Good Support , but a bit slow response time</p>
          </div>
          <div className="p-5 border rounded">
            <p>★ ★ ★ ★ ★ <span>jane smith</span></p>
            <p>Good Support , but a bit slow response time</p>
          </div>
        </div>


        <form className="mt-14 rounded p-4 bg-base-300">
          <h1 className='text-base-content/90 text-2xl'>Your Rating</h1>
          <p className='text-primary text-2xl sm:text-3xl mt-1'>★ ★ ★ ★ ★</p>
          <textarea
           className='border border-gray-300 p-2 rounded bg-white w-full mt-5'
           placeholder='Write your review'
           rows={4}
           >
           </textarea>
           <button type='submit' className='btn w-full btn-secondary hover:outline text-lg mt-2'>Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
