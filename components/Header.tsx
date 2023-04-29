"use client";
import { Fragment, use, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import UserMenu from "./UserMenu";
import RouteNavigationButtons from "./RouteNavigationButton";
import Link from "next/link";

// async function getAuthUser() {
//   return fetch("/api/authuser", { method: "post" }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//   });
// }
// const p = getAuthUser();

export default function Header({ className = "" }) {
  const user = {};
  // const user = use(p);
  // console.log("user", user);
  return (
    <Disclosure>
      {({ open }) => {
        console.log("open", open);
        return (
          <div className={`bg-gray-dark px-8  ${className}`}>
            <header className="bg-white h-full w-full flex items-center">
              <nav
                className="flex max-w-7xl items-center justify-between "
                aria-label="Global">
                <RouteNavigationButtons />

                <div className="flex lg:hidden">
                  <Disclosure.Button>
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mb-2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 ">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                          />
                        </svg>
                    
                    )}
                  </Disclosure.Button>
                </div>
              </nav>
              <div className="hidden ml-auto lg:inline-flex justify-end lg:justify-end md:justify-end align-middle items-center ">
                {!!user && <UserMenu user={user} />}

                {!user && (
                  <>
                    <Link
                      href="/signin"
                      className="px-2 text-sm font-semibold leading-6 text-gray-900">
                      Sign In <span aria-hidden="true"></span>
                    </Link>
                    <Link
                      href="/signup"
                      className="px-2 text-sm font-semibold leading-6 text-gray-900">
                      Sign Up <span aria-hidden="true"></span>
                    </Link>
                  </>
                )}
              </div>
            </header>
          </div>
        );
      }}
    </Disclosure>
  );
}
