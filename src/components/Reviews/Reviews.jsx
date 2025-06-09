import React from 'react';

const Reviews = () => {
  return (
    <div>
      <div className="text-center">
        <h1>Customer Reviews For This Service</h1>
        <div className="">
          <span>★ ★ ★ ★ ★</span> <span> 4.0/5 (3 reviews)</span>
        </div>
      </div>
      {/* review and rating container */}
      <div className="">
        <div className="space-y-4 h-[240px] overflow-y-auto ">
          <div className="p-5 border rounded">
            <p>★ ★ ★ ★ ★ <span>jane smith</span></p>
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
          <div className="p-5 border rounded">
            <p>★ ★ ★ ★ ★ <span>jane smith</span></p>
            <p>Good Support , but a bit slow response time</p>
          </div>
        </div>
        <form className="">
          <h1>Your Rating</h1>
          <p>★ ★ ★ ★ ★</p>
          <textarea
           className='border w-full'
           placeholder='Write your review'
           rows={4}
           >
           </textarea>
           <button type='submit' className='btn w-full'>Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
