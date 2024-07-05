"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const page = () => {
  const signInUser = (data: FormData) => {
    const email = data.get("email");
    const password = data.get("password");

    console.log(email, password);

    signIn("credentials", { email, password });
  };
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="border rounded-md w-[500px] min-h-[300px] p-4 ">
        <div>Sign in Screen</div>

        <div className="my-10">
          <hr />
        </div>

        <form action={signInUser}>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-8 h-[55px] flex items-center justify-center text-white bg-neutral-800 rounded-md"
          >
            Sign in
          </button>
        </form>

        <div className="text-[12px] my-4 text-center  ">
          Don't have an Account{" "}
          <Link href="/register" className="italic font-semibold ">
            Sign in Here
          </Link>
        </div>

        <div className="my-3">
          <hr />
        </div>

        <div>
          <p className="text-[12px] font-bold">
            Register through your Social Account
          </p>

          <div className="flex items-center gap-2">
            <button className="w-full mt-2 h-[55px] flex items-center justify-center text-white bg-red-600 hover:bg-red-500 duration-300  rounded-md text-[35px]">
              <FaGoogle />
            </button>
            <button className="w-full mt-2 h-[55px] flex items-center justify-center text-white bg-neutral-800 hover:bg-neutral-900 rounded-md text-[35px]">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
