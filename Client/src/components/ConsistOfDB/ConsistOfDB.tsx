import { useEffect, useState } from "react";

export default function ConsistOfDB() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const GetTheConsistFromLocalStorge = localStorage.getItem(
      "TheConsistFromLocalStorge"
    );
    if (
      GetTheConsistFromLocalStorge &&
      GetTheConsistFromLocalStorge === "true"
    ) {
      setShowModal(false);
    }
  }, []);

  /**
   * Handles the acceptance action for the modal dialog.
   * Sets a flag in local storage to prevent showing the modal again
   * and updates the state to close the modal.
   */
  const handleAccept = () => {
    localStorage.setItem("TheConsistFromLocalStorge", "true");
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center !z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Database Information
              </h2>
              <div className="text-sm text-gray-600 mt-2 flex flex-col space-y-2">
                <span>
                  {" "}
                  Due to our use of free databases, data fetching may take
                  longer than usual.{" "}
                </span>

                <span>
                  {" "}
                  We're actively exploring new options to improve performance.{" "}
                </span>

                <span> Thank you for your patience.</span>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-all duration-200 ease-in-out"
                onClick={handleAccept}
              >
                I understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
