import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Spinner from "../../components/Ui/Spinner";
import MyBookings from "../../components/MyBookings/MyBookings";
import { myBookingsPromise } from "../../api/myBookingsApi";


const Booked = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0 p-12">
            <div className="text-center p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    My Booked Services
                </h2>
                <p className="text-base md:text-lg mt-2 text-base-content/50 max-w-xl mx-auto">Here you can view all the services you’ve booked from providers.</p>
            </div>

            <Suspense fallback={<Spinner></Spinner>}>
                <MyBookings
                   myBookingsPromise={myBookingsPromise(user.email)} 
                    >
                </MyBookings>
            </Suspense>
        </div>
    );
};

export default Booked;