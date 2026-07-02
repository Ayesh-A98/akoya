import { useSelector } from "react-redux";

const SelectedItems = () => {

  const selectedService = useSelector(
    (state) => state.service.selectedService
  );

  if (!selectedService) {
    return (
      <div className="p-10">
        <p className="text-gray-500">No service selected</p>
      </div>
    );
  }

  return (
    <div className="p-10">

      <h2 className="text-xl font-semibold mb-6">
        Selected Service
      </h2>

      <div className="flex justify-between items-center border rounded-xl p-6 bg-white">

        <div className="flex items-center gap-4">
          <span className="text-2xl">{selectedService.icon}</span>

          <div>
            <p className="font-semibold">{selectedService.title}</p>
            <p className="text-sm text-gray-500">
              {selectedService.desc}
            </p>
          </div>
        </div>

        <span className="font-bold text-[#D4AF37]">
          {selectedService.price} QAR
        </span>

      </div>

    </div>
  );
};

export default SelectedItems;