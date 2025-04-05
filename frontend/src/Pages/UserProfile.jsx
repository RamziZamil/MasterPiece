import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import Swal from "sweetalert2";

const EditModal = ({
  formData,
  formErrors,
  handleInputChange,
  handleImageChange,
  handleSubmit,
  loading,
  onClose,
}) => (
  <div className="fixed inset-0 backdrop-blur-sm bg-transparent bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300">
    <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-2xl transform transition-all duration-300 animate-[fadeIn_0.3s_ease-out,slideUp_0.3s_ease-out]">
      {/* Modal header */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-3 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        Edit Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full p-3 border rounded-lg ${
              formErrors.name ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
            placeholder="Enter your name"
          />
          {formErrors.name && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              {formErrors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="Enter your address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={`w-full p-3 border rounded-lg ${
              formErrors.phoneNumber ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
            placeholder="Enter your phone number"
          />
          {formErrors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              {formErrors.phoneNumber}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Picture
          </label>
          <div className="mt-1 flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="profile-upload"
              />
              <label
                htmlFor="profile-upload"
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer inline-flex items-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Choose File
              </label>
              <span className="text-sm text-gray-500 truncate max-w-xs">
                {formData.image ? formData.image.name : "No file chosen"}
              </span>
            </div>
            {formData.image && (
              <div className="bg-gray-100 p-2 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">Selected file:</div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium truncate">
                    {formData.image.name}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border border-gray-200 font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-70 font-medium shadow-md disabled:shadow-none relative overflow-hidden"
          >
            <span className={`${loading ? "opacity-0" : "opacity-100"}`}>
              Save Changes
            </span>
            {loading && (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  </div>
);

const UserProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    image: null,
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5000/api/users/profile",
        {
          withCredentials: true,
        }
      );

      console.log("Profile API response:", response.data);
      const userData = response.data.user || response.data;
      setUser(userData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setError(error.response?.data?.message || "Failed to load user profile");
      setLoading(false);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      await Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please check all required fields",
      });
      return;
    }

    try {
      setLoading(true);
      const formDataToSend = new FormData();

      if (formData.name && formData.name !== user.name) {
        formDataToSend.append("name", formData.name.trim());
      }
      if (formData.address && formData.address !== user.address) {
        formDataToSend.append("address", formData.address.trim());
      }
      if (formData.phoneNumber && formData.phoneNumber !== user.phoneNumber) {
        formDataToSend.append("phoneNumber", formData.phoneNumber.trim());
      }
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      if ([...formDataToSend.entries()].length > 0) {
        const response = await axios.put(
          `http://localhost:5000/api/users/${user._id}`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );

        setUser(response.data.user);
        setIsModalOpen(false);

        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Profile updated successfully",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        setIsModalOpen(false);
        await Swal.fire({
          icon: "info",
          title: "No Changes",
          text: "No changes were made to your profile",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Update error details:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        serverError: error.response?.data?.error,
      });

      await Swal.fire({
        icon: "error",
        title: "Update Failed",
        text:
          error.response?.data?.message ||
          "An error occurred while updating your profile. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-lg">
        <div className="bg-red-50 p-6 rounded-lg border border-red-100 mb-6">
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-500 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-red-700">
              Error Loading Profile
            </h3>
          </div>
          <p className="text-red-600 ml-11 mb-4">{error}</p>
          <div className="flex justify-center mt-2">
            <button
              onClick={fetchUserProfile}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-lg">
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 mb-6">
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-500 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-yellow-700">
              No Profile Data
            </h3>
          </div>
          <p className="text-yellow-600 ml-11 mb-4">
            No user data is currently available
          </p>
          <div className="flex justify-center mt-2">
            <button
              onClick={fetchUserProfile}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Retry Fetching Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-12 px-4">
      {/* Removed the outer white frame with shadow */}
      {/* Header section with cover photo */}
      <div className="h-48 bg-gradient-to-r from-indigo-300 to-purple-400 relative rounded-t-2xl">
        {/* User picture overlapping the banner */}
        <div className="absolute -bottom-20 left-10">
          <div className="rounded-full border-4 border-white overflow-hidden h-40 w-40 shadow-lg">
            <img
              src={user.image || "/default-avatar.png"}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="pt-24 pb-8 px-8 bg-white rounded-b-2xl">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            {user.name || "Not set"}
          </h1>

          {/* Moved edit button here next to the name */}
          <button
            onClick={() => {
              setFormData({
                name: user.name || "",
                address: user.address || "",
                phoneNumber: user.phoneNumber || "",
                image: null,
              });
              setIsModalOpen(true);
            }}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all shadow-md flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="font-medium text-gray-600">Email</h3>
            </div>
            <p className="text-lg pl-7">{user.email || "Not set"}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="font-medium text-gray-600">Phone Number</h3>
            </div>
            <p className="text-lg pl-7">{user.phoneNumber || "Not set"}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow md:col-span-2">
            <div className="flex items-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="font-medium text-gray-600">Address</h3>
            </div>
            <p className="text-lg pl-7">{user.address || "Not set"}</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <EditModal
          formData={formData}
          formErrors={formErrors}
          handleInputChange={handleInputChange}
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          loading={loading}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;
