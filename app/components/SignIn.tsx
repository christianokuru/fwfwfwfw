"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { LucideEye, EyeOff } from "lucide-react";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-sm mx-auto px-11 pt-11 lg:px-0 lg:max-w-md lg:pb-16">
        <div>
            <h1 className="hidden lg:block lg:pb-9 lg:scroll-m-20 lg:font-extrabold lg:tracking-tight lg:text-4xl">Sign in to your account</h1>
        </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Username Field */}
        <div>
          <label htmlFor="username" className="block font-semibold mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register("username")}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-600"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block font-semibold mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? (
                <LucideEye className="w-5 h-5 text-gray-500" />
              ) : (
                <EyeOff className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Forgot Username/Password Links */}
        <div className="text-xs text-right space-x-2 pb-3">
          <span>Forgot</span>
          <a href="#" className="text-[#0060fc] underline">
            username
          </a>
          <span>or</span>
          <a href="#" className="text-[#0060fc] underline">
            password?
          </a>
        </div>

        {/* Sign in Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#5b2f91] text-white font-semibold rounded-md hover:bg-purple-700"
        >
          Sign in
        </button>

        {/* Create Account Link */}
        <div className="text-center my-5">
          <a href="#" className="text-[#0060fc] hover:underline font-semibold">
            Create a new account
          </a>
        </div>
      </form>
    </div>
  );
}
