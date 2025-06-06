import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Spinner from "../../components/Ui/Spinner";
import MyBookings from "../../components/MyBookings/MyBookings";
import { myBookingsPromise } from "../../api/myBookingsApi";


const Booked = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
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