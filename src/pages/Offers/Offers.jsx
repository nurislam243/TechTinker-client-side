import { Link, useLoaderData } from 'react-router';

const Offers = () => {
  const data = useLoaderData();
  const offers = data.filter(offer => offer.discountedPrice);

  return (
    <div className="w-full min-h-[89vh] py-10 bg-base-100 max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">🔥 Special Offers</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 @min-[928px]:grid-cols-3 @min-[1210px]:grid-cols-4 gap-6">
        {offers.map(offer => (
          <div
            key={offer._id}
            className="bg-base-200 rounded-lg shadow hover:shadow-md transition"
          >
            <img
              src={offer.imageUrl}
              alt={offer.serviceName}
              className="w-full h-40 object-cover rounded-t-md"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-secondary">
                    {offer.serviceName}
                </h3>
                <p className="text-sm text-gray-500">{offer.shortDescription}</p>
                <p className="text-primary font-bold">
                    Price: ৳ {offer.discountedPrice}
                    <span className="line-through text-gray-400 ml-2">
                    ৳ {offer.price}
                    </span>
                </p>
                <div className="">
                    <Link to={`/services/${offer._id}`} className="btn btn-sm btn-primary   mt-2">
                        View Details
                    </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
