
const MyServiceCard = ({service}) => {
    const { _id, description, imageUrl, price, serviceArea, serviceName } = service
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-6">
                <div
                className="border rounded-xl shadow-md p-5 bg-white"
                >
                <img
                    src={imageUrl}
                    alt={serviceName}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                    {service.serviceName}
                </h3>
                <p className="text-gray-600 mt-2">
                    {description.slice(0, 100)}...
                </p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-green-600 font-bold">${price}</span>
                    <span className="text-indigo-600 font-medium">
                    {serviceArea}
                    </span>
                </div>

                <div className="flex justify-end gap-4 mt-5">
                    <button
                    onClick={()=>document.getElementById(`edit-modal-${_id}`).showModal()}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                    Edit
                    </button>
                    <button
                    
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                    Delete
                    </button>
                </div>
                </div>
            </div>

            {/* edit modal */}
        <dialog id={`edit-modal-${_id}`} className="modal">
        <div className="modal-box max-w-xl">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Edit Service</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Service Name</label>
              <input
                type="text"
                name="serviceName"
                defaultValue={serviceName}
                className="w-full border px-4 py-2 rounded-md focus:outline-purple-500"
              />
            </div>

            <div>
              <label className="block font-medium">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                className="w-full border px-4 py-2 rounded-md focus:outline-purple-500"
              />
            </div>

            <div>
              <label className="block font-medium">Service Area</label>
              <input
                type="text"
                name="serviceArea"
                defaultValue={serviceArea}
                className="w-full border px-4 py-2 rounded-md focus:outline-purple-500"
              />
            </div>

            <div>
              <label className="block font-medium">Description</label>
              <textarea
                name="description"
                rows="3"
                defaultValue={description}
                className="w-full border px-4 py-2 rounded-md focus:outline-purple-500"
              />
            </div>

            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById(`edit-modal-${_id}`).close()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-purple-700 text-white hover:bg-purple-800"
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