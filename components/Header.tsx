"use client";
import { Fragment, useState } from "react";
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

export default function Example() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between md:p-0 lg:p-4 xl:p-6 lg:px-8"
        aria-label="Global">
        <RouteNavigationButtons />

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:inline-flex lg:justify-end align-middle items-center ">
          <UserMenu />

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
        </div>
      </nav>
    </header>
  );
}
