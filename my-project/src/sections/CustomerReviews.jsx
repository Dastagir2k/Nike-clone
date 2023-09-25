import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquin text-center font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Says?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
        </p>
        <div className="flex flex-1 mt-24 justify-evenly
        items-center max-lg:flex-col gap-14">
          {reviews.map((review)=>(
            <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            CustomerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}/>
          ))}
        </div>
    </section>
  )
}

export default CustomerReviews