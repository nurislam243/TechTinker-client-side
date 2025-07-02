import axios from "axios";
import Swal from "sweetalert2";

const MyServiceRow = ({ service, handleDeleteService, handleUpdateService }) => {
  const { _id, description, imageUrl, price, serviceArea, serviceName } = service;

  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedService = Object.fromEntries(formData.entries());

    // send updated data to db
    axios
      .put(`https://techtinker-server.vercel.app/services/${_id}`, updatedService, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          document.getElementById(`edit-modal-${_id}`).close();
          Swal.fire({
            icon: "success",
            title: "Service Updated!",
            text: "The service information has been successfully updated.",
            confirmButtonText: "OK",
          });

          handleUpdateService({ ...updatedService, _id });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* Table Row */}
      <tr className="hover:bg-base-200 hover:border-t hover:border-b hover:border-gray-200">
        <td>
          <div className="flex items-center gap-3">
            <img
              src={imageUrl}
              alt={serviceName}
              className="w-12 h-12 object-cover rounded"
            />
            <span className="min-w-[142px] mr-4">{serviceName}</span>
          </div>
        </td>
        <td className={`max-w-[350px] ${description.length < 40 ? "" : "min-w-[330px]"}`}>
          <span>{description?.slice(0, 100) || "N/A"}</span>
        </td>
        <td>
          <span className="text-green-600 font-bold">৳{price}</span>
        </td>
        <td>
          <span className="text-accent font-medium">{serviceArea}</span>
        </td>
        <td className="flex gap-2">
          <button
            onClick={() => document.getElementById(`edit-modal-${_id}`).showModal()}
            className="btn btn-secondary btn-sm"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteService(_id)}
            className="btn btn-error btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>

      {/* Edit Modal */}
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
              <button type="submit" className="btn btn-primary hover:outline">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default MyServiceRow;
