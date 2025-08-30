import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReviews } from '../hooks/useData';

const Reviews = () => {
  const { reviews, loading } = useReviews();

  if (loading) {
    return (
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/2 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Client <span className="text-red-500">Reviews</span>
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-300">4.8 Google Reviews</span>
            </div>
          </div>

          <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-4 h-4" fill="currentColor" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {review.review_text}
              </p>

              {/* Reviewer info */}
              <div className="flex items-center space-x-3">
                <img
                  src={review.avatar_url}
                  alt={review.customer_name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white text-sm">{review.customer_name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;