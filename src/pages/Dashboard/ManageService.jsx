import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { manageServicesPromise } from "../../api/manageServicesApi";
import MyServices from "../../components/MyServices/MyServices";
import Spinner from "../../components/Ui/Spinner";
import { Helmet } from "react-helmet-async";

const ManageServices = () => {
    const { user } = useContext(AuthContext);

    return (
    <section className="max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0 pt-12">
        <Helmet>
            <title>Manage Services | TechTinker</title>
        </Helmet>

        {/* title and subtitle */}
        <div className="text-center px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Manage Your Services
            </h2>
            <p className="text-base md:text-lg mt-2 text-base-content/50 max-w-xl mx-auto">View, update, or delete the services you’ve added.</p>
        </div>
        <Suspense fallback={<Spinner></Spinner>}>
            <MyServices
                manageServicesPromise={manageServicesPromise(user.email)}
            >
            </MyServices>
        </Suspense>
       

    </section>
    );
};

export default ManageServices;

