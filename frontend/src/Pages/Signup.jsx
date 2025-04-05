import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

// Import the image (adjust the path as needed)
import interiorDesignSignup from "../assets/interiorDesignSignup.jpg"; // Example path

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    retypePassword: "",
  });
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email format.");
      return false;
    }

    const phoneRegex = /^(\+962|0)(7[0-9]{8})$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setError(
        "Phone number must be a valid Jordanian number (e.g., +9627XXXXXXXX)."
      );
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }

    if (formData.password !== formData.retypePassword) {
      setError("Passwords do not match.");
      return false;
    }

    if (!image) {
      setError("Please upload a profile image.");
      return false;
    }

    return true;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("image", image);

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Signup successful!",
        text: "You can now login with your credentials",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          error.response?.data?.message || "Signup failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 bg-gradient-to-br from-blue-400 to-purple-700 text-gray-800">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Create an Account
            </h2>
            <p className="text-gray-600 mt-1 text-sm">
              Fill your details to register
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 px-3 py-2 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Form fields */}
            <div className="col-span-2 md:col-span-1">
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  name="phoneNumber"
                  type="tel"
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                  placeholder="+962XXXXXXXXX"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                  placeholder="Your address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full pl-10 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-4 w-4 text-gray-400" />
                    ) : (
                      <FaEye className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    name="retypePassword"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full pl-10 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                    placeholder="Re-enter your password"
                    value={formData.retypePassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile Image
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="flex-grow w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                />
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Profile preview"
                    className="h-12 w-12 object-cover rounded-full border-2 border-[#6C63FF]"
                  />
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="col-span-2 mt-2 w-full bg-[#6C63FF] text-white py-2 px-4 rounded-lg hover:bg-[#5A52D5] transition duration-200 font-medium"
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>

            <div className="col-span-2 text-center mt-3">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-[#6C63FF] hover:text-[#5A52D5]"
                >
                  Sign in instead
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Info */}
      <div className="hidden lg:flex lg:w-1/2 bg-white flex-col justify-between shadow-2xl">
        <div className="p-9">
          <div className="text-2xl font-extrabold">
            <span className="text-indigo-700">
              Freedom<span className="text-pink-400">Road</span>
            </span>
          </div>
          <Link
            to="/"
            className="inline-block mt-3 px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-400 to-pink-500 rounded-full hover:from-blue-500 hover:to-pink-600 transition-all duration-200 shadow-md"
          >
            Back to Home
          </Link>
        </div>

        <div className="p-9">
          <img
            src={interiorDesignSignup}
            alt="Interior design showcase"
            className="rounded-lg shadow-lg object-cover w-full h-64"
          />
        </div>

        <div className="px-9 pb-24">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Transform Your Space With Exceptional Design
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Access your workspace, browse premium products, and explore our
            design services.
          </p>
          <div className="flex space-x-3">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <div className="h-3 w-3 rounded-full bg-gray-200"></div>
            <div className="h-3 w-3 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
