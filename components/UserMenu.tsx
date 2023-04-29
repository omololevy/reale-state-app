import { Menu, Transition } from "@headlessui/react";
import { Logout } from "@heroicons/react/outline";
import { MouseEventHandler, use } from "react";

function UserMenu({ user }) {
  async function handleSignOut(e: MouseEventHandler<HTMLAnchorElement>) {
    await fetch("/api/signout", { method: "post", cache: "no-store" }).then(
      (res) => {
        if (res.ok) {
          window.location = window.location.origin + "/signin";
        }
      }
    );
  }
  return (
    <Menu as="div" className=" relative inline-block text-left">
      {({ open }) => (
        <div>
          <div>
            <Menu.Button className="flex items-center space-x-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Avatar"
              />
              <span className="font-medium text-gray-800">
                {user && user.username}
              </span>
            </Menu.Button>
          </div>

          <Transition
            show={open}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 bg-[#fff] scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Menu.Items
              static
              className="absolute mt-4 bg-gray-dark right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      Settings
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <div className="flex justify-between items-center pr-2 cursor-pointer">
                      <a
                        onClick={handleSignOut}
                        MouseEventHandler
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                        Sign out
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
}

export default UserMenu;
