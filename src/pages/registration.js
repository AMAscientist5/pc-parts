import { useForm, SubmitHandler } from "react-hook-form";
import { signOut as logOut } from "firebase/auth";
import { signIn } from "next-auth/react";

import { useRouter } from "next/router";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import auth from "@/firebase/firebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Signup() {
  // const [createUserWithEmailAndPassword, user, loading, error] =
  //   useCreateUserWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();
  const router = useRouter();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  // const [user, loading, error] = useAuthState(auth);

  // const logout = () => {
  //   logOut(auth);
  //   router.push(
  //     // "https://pc-builder-client-fkyuo4k6y-amascientist5.vercel.app/"
  //     "http://localhost:3000/"
  //   );
  // };

  const onSubmit = async (data) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      if (user) {
        toast("user created successfully");
        console.log(user, "from register");
        // router.push("https://pc-builder-client-amascientist5.vercel.app");
        // logOut(auth);
      }
      // signIn("github", {
      //   callbackUrl:
      //     // "https://pc-builder-client-fkyuo4k6y-amascientist5.vercel.app/",
      //     "http://localhost:3000/build-pc",
      // });
    } catch (error) {
      toast("There is something wrong");
    }
  };

  return (
    // <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r bg-gray-400">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-96 space-y-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Registration
        </h2>
        <div>
          <label htmlFor="userName" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            {...register("name", { required: true })}
            className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
            className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
          className="w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-blue-500 text-white font-semibold py-2 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 transition-colors"
        >
          Sign Up
        </button>

        <p className="mt-4 text-gray-600">
          Have account?{" "}
          <Link href="/login" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>
        <div
          onClick={() =>
            signIn("github", {
              callbackUrl:
                "https://pc-builder-client-amascientist5.vercel.app/build-pc",
            })
          }
          className="flex items-center justify-center text-white"
        >
          <AiFillGithub className="text-center text-3xl bg-gray-500 w-16 h-8 rounded-full" />
        </div>
      </form>
      <Toaster />
    </div>
  );
}

// const onSubmit = async (data) => {
// try {
//   console.log(data, "from handle");
//   const { user } = await createUserWithEmailAndPassword(
//     data.email,
//     data.password
//   );
//   if (user) {
//     toast("user created successfully");
//     logOut(auth);
//   }
//   signIn("github", {
//     callbackUrl:
//       // "https://pc-builder-client-fkyuo4k6y-amascientist5.vercel.app/",
//       "http://localhost:3000/build-pc",
//   });
// } catch (error) {
//   toast("There is something wrong");
// }
