import { Menu, Transition } from "@headlessui/react";
import { redirect } from "next/dist/server/api-utils";
import { MouseEventHandler, use } from "react";

function UserMenu({user}) {
 
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
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Menu.Items
              static
              className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                    <a
                      onClick={handleSignOut}
                      MouseEventHandler
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      Sign out
                    </a>
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
