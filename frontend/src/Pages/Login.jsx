import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Swal from "sweetalert2";
import interiorDesignLogin from "../assets/interiorDesignLogin.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      await Swal.fire({
        icon: "success",
        title: "Welcome back!",
        text: "Login successful",
        timer: 1500,
        showConfirmButton: false,
        background: "#ffffff",
        iconColor: "#6366f1",
        titleColor: "#1e293b",
        textColor: "#475569",
        customClass: { popup: "rounded-lg shadow-xl" },
      });

      // Wait for the login function to complete and set user data
      await login(response.data.token);
      navigate("/"); // Navigate after user data is set
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
        background: "#ffffff",
        iconColor: "#ef4444",
        titleColor: "#1e293b",
        textColor: "#475569",
        customClass: { popup: "rounded-lg shadow-xl" },
      });
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-400 to-purple-700 text-gray-800">
      {/* Left Side - Decorative/Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-white flex-col justify-between shadow-2xl">
        <div className="p-9">
          <div className="text-2xl font-extrabold  ">
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
            src={interiorDesignLogin}
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

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Welcome Back
            </h2>
            <p className="text-gray-500">
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="mb-2 flex justify-between items-center">
                <label
                  htmlFor="email-address"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg block w-full pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
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
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg block w-full pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                        clipRule="evenodd"
                      />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-gray-100 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 shadow-md"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="./signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create one now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
