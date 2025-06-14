export const filterReviews = (allReviews, id) => {
    const reviews = allReviews.filter(review => id === review.serviceReviewId)
    return reviews;
}