"use client";
import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
export default function SideBar({ className = "" }: { className: string }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          {open && (
            <Disclosure.Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 bg-blue rounded-r-full  right-4  absolute left-0 top-1/2 -translate-y-full">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Disclosure.Button>
          )}
          <div
            className={`lg:translate-x-0 transition-transform  overflow-hidden duration-300 ag-side-bar w-1/3 h-full  ${className} ${
              open ? "xs:-translate-x-full" : "xs:translate-x-0"
            }`}>
            <div
              className={`lg:translate-x-0 transition-transform  duration-300 h-full w-full bg-purple ${
                open ? "xs:translate-x-full" : "xs:translate-x-0"
              }`}>
              {!open && (
                <Disclosure.Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 lg:hidden bg-blue absolute right-4 top-4">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Disclosure.Button>
              )}
              Content not moving
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
