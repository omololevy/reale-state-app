"use client";
import Image from "next/image";
import logo from "../../../assets/images/app-logo.png";
import { useState } from "react";

const SignUpPage = () => {
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });
  function handleLogin(e: React.FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    if (formState.password === formState.repeatPassword) {
      fetch("/api/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      }).then((res) => {
        if (res.ok) {
          window.location.href = `${window.location.origin}/signin`;
        } else {
          alert("failed to sign up");
        }
      });
    } else {
      // handle error for not matching password
      alert("password and repeat password does not matched!");
    }
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-20 w-auto"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  User Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setFormState((prevState) => ({
                      ...prevState,
                      username: e.target.value,
                    }));
                  }}
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="text-gray-dark pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setFormState((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }));
                  }}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-3 text-gray-dark block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setFormState((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }));
                  }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="text-gray-dark pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Repeat Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setFormState((prevState) => ({
                      ...prevState,
                      repeatPassword: e.target.value,
                    }));
                  }}
                  id="repeat_password"
                  name="repeat_password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="text-gray-dark pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="bg-blue flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;
