import { Input, Button } from "./index";
import { useForm } from "react-hook-form";
import {authService} from "./index"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../app/authSlice";
import {Link, useNavigate} from 'react-router-dom'


export default function Login() {
    const [error,setError]=useState();
    const dispatch=useDispatch();
    const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async(data) => {
    setError("")
    console.log("Form Data:", data);
    try{
    const session=await authService.login(data);
    if(session){
        const sessionData=await authService.getCurrentUser();
        if(sessionData){dispatch(authLogin(sessionData))}
        console.log("sesionData--",sessionData);
        navigate("/");
    }
    }catch(err){
        setError(err.message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Login to hookedBlogger 🚀
        </h2>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div>
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email address"
                }
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message:
                    "Password must be at least 6 characters with letters and numbers"
                }
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        {/* Optional Link */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
      </div>
    </div>
  );
}
