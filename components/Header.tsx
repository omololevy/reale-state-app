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

const products = [
  // {
  //   name: "Analytics",
  //   description: "Get a better understanding of your traffic",
  //   href: "#",
  //   icon: ChartPieIcon,
  // },
  // {
  //   name: "Engagement",
  //   description: "Speak directly to your customers",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Security",
  //   description: "Your customers’ data will be safe and secure",
  //   href: "#",
  //   icon: FingerPrintIcon,
  // },
  // {
  //   name: "Integrations",
  //   description: "Connect with third-party tools",
  //   href: "#",
  //   icon: SquaresPlusIcon,
  // },
  // {
  //   name: "Automations",
  //   description: "Build strategic funnels that will convert",
  //   href: "#",
  //   icon: ArrowPathIcon,
  // },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between md:p-0 lg:p-4 xl:p-6 lg:px-8"
        aria-label="Global">
        <RouteNavigationButtons />

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:inline-flex lg:justify-end  items-center ">
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
