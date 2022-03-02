import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Button from "./button";
import { Menu } from "@headlessui/react";

export default function Navbar() {
  const navigation = [
    // "About", // default is Product
    "Services", // default is Features
    "Industries", // default is Pricing
    "Case Studies", // default is Company
    // "Blog", // default Blog
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <img
                        src="/img/mindworks_logo.svg"
                        alt="N"
                        width=""
                        height=""
                        className=""
                      />
                    </span>
                    {/* <span>Nextly</span> */}
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/">
                        <a className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:opacity-80 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none ">
                          {item}
                        </a>
                      </Link>
                    ))}
                    <Link href="/">
                    <Button
      className="" href="/" name="Contact Us"
      >
      </Button>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          {/* About Dropdown menu  */}
          {/* <Menu>
            <Menu.Button className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">About</Menu.Button>
            <Menu.Items>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    }`}
                    href="/account-settings"
                  >
                    Company
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    }`}
                    href="/account-settings"
                  >
                    Our Methods
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    }`}
                    href="/account-settings"
                  >
                    Careers
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu> */}

          {/* About Dropdown menu start */}
          <div className="relative inline-block group">
            <button className="inline-flex items-center px-4 py-2">
              <span className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none dark:focus:bg-gray-800">
                About
              </span>
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="absolute hidden pt-1 text-gray-700 group-hover:block">
              <li className="">
                <a
                  className="block px-4 py-2 text-gray-800 whitespace-no-wrap rounded-t hover:opacity-80 dark:text-gray-200"
                  href="#"
                >
                  Company
                </a>
              </li>
              <li className="">
                <a
                  className="block px-4 py-2 text-gray-800 whitespace-no-wrap hover:opacity-80 dark:text-gray-200"
                  href="#"
                >
                  Our Methods
                </a>
              </li>
              <li className="">
                <a
                  className="block px-4 py-2 text-gray-800 whitespace-no-wrap rounded-b hover:opacity-80 dark:text-gray-200"
                  href="#"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* About Dropdown menu end*/}

          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/">
                  <a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 hover:opacity-80">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="/">
          <Button
      className="" href="/" name="Contact Us"
      >
      </Button>
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
