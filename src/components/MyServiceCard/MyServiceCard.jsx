import axios from "axios";
import Swal from "sweetalert2";

const MyServiceCard = ({service, handleDeleteService, handleUpdateService}) => {
    const { _id, description, imageUrl, price, serviceArea, serviceName } = service;

    const handleEdit = (e) =>{
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const updatedService = Object.fromEntries(formData.entries());
      

      // send updated data to db
      axios.put(`https://techtinker-server.vercel.app/services/${_id}`, updatedService, {
        withCredentials: true
      } )
      .then(res => {
        if(res.data.modifiedCount){
          document.getElementById(`edit-modal-${_id}`).close();
          Swal.fire({
            icon: 'success',
            title: 'Service Updated!',
            text: 'The service information has been successfully updated.',
            confirmButtonText: 'OK'
          });

          handleUpdateService({ ...updatedService, _id });
          
        }
      })
      .catch(error =>{
        console.log(error);
      })

    }

    return (
        <div>
            <div className="">
                <div
                className="border border-gray-200/60 rounded-sm shadow-md p-5 bg-base-200/50"
                >
                <img
                    src={imageUrl}
                    alt={serviceName}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-base-content">
                    {service.serviceName}
                </h3>
                <p className="text-base-content/75 mt-2">
                    {description.slice(0, 100)}...
                </p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-green-600 font-bold">৳{price}</span>
                    <span className="text-accent font-medium">
                    {serviceArea}
                    </span>
                </div>

                <div className="flex justify-end gap-4 mt-5">
                    <button
                    onClick={()=>document.getElementById(`edit-modal-${_id}`).showModal()}
                    className="btn btn-secondary hover:outline"
                    >
                    Edit
                    </button>
                    <button
                    onClick={()=>handleDeleteService(_id)}
                    className="btn btn-error hover:outline"
                    >
                    Delete
                    </button>
                </div>
                </div>
            </div>

        {/* edit modal */}
        <dialog id={`edit-modal-${_id}`} className="modal">
        <div className="modal-box max-w-xl border border-gray-200/40">
          <h2 className="text-2xl font-bold mb-4 text-secondary">Edit Service</h2>
          <form onSubmit={handleEdit} className="space-y-4">
            <div>
              <label className="block font-medium">Service Image Url</label>
              <input
                type="text"
                name="imageUrl"
                defaultValue={imageUrl}
                className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"
              />
            </div>
            <div>
              <label className="block font-medium">Service Name</label>
              <input
                type="text"
                name="serviceName"
                defaultValue={serviceName}
                className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"
              />
            </div>

            <div>
              <label className="block font-medium">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"
              />
            </div>

            <div>
              <label className="block font-medium">Service Area</label>
              <input
                type="text"
                name="serviceArea"
                defaultValue={serviceArea}
                className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"
              />
            </div>

            <div>
              <label className="block font-medium">Description</label>
              <textarea
                name="description"
                rows="3"
                defaultValue={description}
                className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"
              />
            </div>

            <div className="modal-action">
              <button
                type="button"
                className="btn hover:outline"
                onClick={() => document.getElementById(`edit-modal-${_id}`).close()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary hover:outline"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </dialog>

      </div>
    );
};

export default MyServiceCard;