import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { manageServicesPromise } from "../../api/manageServicesApi";
import MyServices from "../../components/MyServices/MyServices";
import Spinner from "../../components/Ui/Spinner";

const ManageServices = () => {
    const { user } = useContext(AuthContext);

    return (
    <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Manage Your Services
        </h2>
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

