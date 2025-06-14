import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { filterReviews } from '../../utils/utils';
import Lottie from 'lottie-react';
import empty from '../../assets/animation/empty.json'

const Reviews = ({id}) => {
  const [rating, setRating] = useState(0);
  const [reviewTextError, setReviewTextError] = useState('');
  const [allReviews, setAllReviews] = useState([])
  const [reviews, setReviews] = useState([]);
  const { user, setLoading } = useContext(AuthContext);
  const date = new Date().toISOString().split('T')[0];
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = reviews.length > 0  ? (totalRating / reviews.length).toFixed(1) : "0.0"

  useEffect(() => {
    axios.get('http://localhost:3000/reviews')
      .then(res =>{
        setAllReviews(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const initialReviews = filterReviews(allReviews, id);
    setReviews(initialReviews)
  }, [allReviews, setReviews, id])
  

  const handleRatingChange = (rate) =>{
    setRating(rate)
  }
  
  const handleReviewSave = (e) => {
    e.preventDefault();
    const reviewText = e.target.reviewText.value;

    if (reviewText.length < 4) {
      setReviewTextError("Please write at least 4 characters for your review.");
      return;
    }
    
    const reviewInfo = {
      serviceReviewId: id,
      clientName: user.displayName,
      rating,
      reviewText,
      date

    }

    // send review info to DB
    axios.post('http://localhost:3000/reviews', reviewInfo,  {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.data.insertedId){
        Swal.fire({
          title: 'Thank You!',
          text: 'Your review has been submitted successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        setReviews(prev => [...prev, reviewInfo]);
        setRating(0);
        e.target.reviewText.value = "";
        setReviewTextError("");
      }
      
    })
    .catch(error => {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.log('error saving reviews', error);
    })

  }


  return (
    <div>
      <div className="text-center mt-14 space-y-3 mb-6">
        <h1 className='text-2xl sm:text-3xl text-base-content/90'>Customer Reviews For This Service</h1>
        <div className="text-xl sm:text-2xl">
          <Rating
            readonly
            initialRating={averageRating}
            emptySymbol={<FaRegStar className="text-gray-500 text-2xl" />}
            fullSymbol={<FaStar className="text-primary text-2xl" />}
            placeholderSymbol={<FaStarHalfAlt className="text-primary text-2xl" />}
          /> 
          <span> {averageRating}/5 ({reviews.length} reviews)</span>
        </div>
      </div>
      {/* review and rating container */}
      <div className="">
        <div className="space-y-4 max-h-[300px] overflow-y-auto border p-1 @min-[500px]:p-2 rounded border-gray-500">

          {
           !reviews.length ? 
            <p className='text-base px-3 sm:text-xl md:text-2xl text-base-content/70 flex flex-col items-center mb-5'>
               <Lottie animationData={empty} className='w-[100px] mt-4' ></Lottie>
                No reviews yet. Be the first to share your experience!
            </p> :
            reviews.map( ({serviceReviewId, clientName, rating, reviewText, date}) => (
              <div className="p-4 border border-gray-300 bg-base-300/50 rounded space-y-2">
                <p>
                  <Rating
                    initialRating={rating}
                    emptySymbol={<FaRegStar className="text-gray-400 mr-[3px]" />}
                    fullSymbol={<FaStar className="text-primary mr-[3px]" />}
                    readonly
                  /> 
                  <span className='text-base-content/60'> by  </span> 
                  <span className='text-secondary'>{clientName}</span>
                  <span className='text-base-content/60'> on </span>
                  <span className='text-base-content/80'>{date}</span>
                </p>
                <p>{reviewText}</p>
              </div>
            ))
          }

        </div>


        <div className="mt-14">
          <h1 className='text-base-content/85 text-3xl mb-2'>Rate This Service</h1>
          <p className="text-base-content/60 mb-4 text-sm">
            Your honest review will help others make better service decisions.
          </p>
          <form onSubmit={handleReviewSave} className="rounded p-4 bg-base-300">
            <h1 className='text-base-content/85 text-[21px] mb-2'>Your Rating</h1>
            <Rating 
              emptySymbol={<FaRegStar className="text-gray-500 text-[28px] cursor-pointer" />}
              fullSymbol={<FaStar className="text-primary text-[28px] cursor-pointer" />}
              initialRating={rating}
              onChange={handleRatingChange}
            />
            <textarea
              name='reviewText'
              className='border border-gray-300 p-2 rounded bg-base-100/80 w-full mt-5'
              placeholder='Write your review'
              rows={4}
              required
            >
            </textarea>
            <p className='text-error my-1.5'>{reviewTextError}</p>
            <button type='submit' className='btn w-full btn-secondary hover:outline text-lg mt-2'>Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
