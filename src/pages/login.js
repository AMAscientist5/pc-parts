/* eslint-disable react/no-unescaped-entities */

import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import auth from "@/firebase/firebaseAuth";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    signIn("github", {
      callbackUrl:
        "https://pc-builder-client-fkyuo4k6y-amascientist5.vercel.app/build-pc",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      {/* <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-96 space-y-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
            className="w-full  py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", { required: true })}
            className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          // onClick={login}
          // className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold py-2 rounded-md hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-colors"
          className="w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-blue-500 text-white font-semibold py-2 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 transition-colors"
        >
          Login
        </button>
        <p className="mt-4 text-gray-600">
          New here?{" "}
          <Link href="/registration" className="text-blue-500 font-medium">
            Create account
          </Link>
        </p>
        <div
          onClick={() =>
            signIn("github", {
              callbackUrl:
                "https://pc-builder-client-fkyuo4k6y-amascientist5.vercel.app/build-pc",
            })
          }
          className="flex items-center justify-center text-white"
        >
          <AiFillGithub className="text-center text-3xl bg-gray-500 w-16 h-8 rounded-full" />
        </div>
      </form>
    </div>
  );
}
