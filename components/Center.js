// import { ChevronDownIcon } from "@heroicons/react/outline";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import React from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { useEffect, Fragment, useRef, useState } from "react";

// const Center = () => {
//   const { data: session, status } = useSession();
//   console.log(session);
//   return (
//     <div className="flex flex-grow text-white">
//       <header>
//         <div
//           className="flex items-center bg-green-500 space-x-3
//         opacity-90 hover:opacity-80 rounded-full cursor-pointer
//         p-1 pr-2"
//         >
//           <img
//             className="rounded-full w-10 h-10"
//             src={session?.user.image}
//             alt="profile_image"
//           />
//           <h2>{session?.user.name}</h2>
//           <ChevronDownIcon className="h-5 w-5" />
//         </div>
//       </header>
//       <section>{/* image */}</section>
//     </div>
//   );
// };

// export default Center;

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { shuffle } from "lodash";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-yellow-500",
  "from-orange-500",
  "from-red-500",
  "from-purple-500",
  "from-pink-500",
];

export default function Center() {
  const { data: session, status } = useSession();
  const [color, setColor] = useState(null);
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);
  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <Menu as="div" className="relative inline-block text-left">
          <div
            className="flex items-center bg-green-500 space-x-0.5
        opacity-90 hover:opacity-80 rounded-full cursor-pointer
        p-1 pr-2"
          >
            <img
              className="rounded-full w-10 h-10"
              src={session?.user.image}
              alt="profile_image"
            />
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md bg-opacity-90 hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              {session?.user.name}
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      onClick={() => signOut()}
                    >
                      {active ? (
                        <SignOutActiveIcon
                          className="w-5 h-5 mr-2 text-violet-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <SignOutInactiveIcon
                          className="w-5 h-5 mr-2 text-violet-400"
                          aria-hidden="true"
                        />
                      )}
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b
      to to-black ${color} h-80 text-white p-8 w-full`}
      >
        <h1>hello</h1>
      </section>
    </div>
  );
}

function SignOutInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function SignOutActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
