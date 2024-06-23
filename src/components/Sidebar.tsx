import logo from "../../renderer/assets/logo.png";
import {
  ChevronRightIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PowerIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { logoutUser } from "../services/auth.services";
import { navigate } from "vike/client/router";
import { Link } from "./Link";
import { classNames } from "../../utils/classNames";

const Sidebar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [navSelected, setNavSelected] = useState<string | null>(null);

  const routes = [
    {
      label: "Settings",
      icon: Cog6ToothIcon,
      children: [
        {
          href: "/settings/general",
          label: "General",
        },
        {
          href: "/settings/security",
          label: "Security",
        },
      ],
    },
    {
      label: "Log out",
      icon: PowerIcon,
      action: async () => {
        await logoutUser();
        await navigate("/login");
      },
    },
  ];

  return (
    <aside className="sticky bg-[#111111] top-0 max-h-screen text-neutral-200 py-6 px-8 flex flex-col max-lg:-translate-x-full max-lg:fixed border-r border-[#2d2d2d]">
      <span className="flex gap-3 items-center text-lg uppercase font-inter-bold">
        <img src={logo} alt="" className="w-11" />
        Inventary App
      </span>
      <div className="relative w-full min-w-[255px] h-10 my-7">
        <div className="grid place-items-center absolute text-gray-500 top-2/4 right-3 -translate-y-2/4 w-5 h-5">
          <MagnifyingGlassIcon className="w-5" />
        </div>
        <input
          className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-gray-200 focus:border-gray-400"
          placeholder=" "
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-300 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t before:border-l before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t after:border-r after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-400 peer-focus:text-gray-400 before:border-gray-200 peer-focus:before:!border-gray-400 after:border-gray-200 peer-focus:after:!border-gray-400">
          Search
        </label>
      </div>
      <nav className="h-full">
        <ul className="flex flex-col gap-1 h-full">
          <li className="group hover:bg-neutral-800 transition duration-300 rounded-md">
            <Link
              className="flex gap-4 p-3 items-center text-base group-hover:text-neutral-300 leading-relaxed"
              href="/dashboard"
            >
              <PresentationChartBarIcon width={24} />
              Dashboard
            </Link>
          </li>
          <li className="group hover:bg-neutral-800 transition duration-300 rounded-md">
            <Link
              className="flex p-3 gap-4 items-center text-base group-hover:text-neutral-300 leading-relaxed"
              href="/locations"
            >
              <MapPinIcon width={22} />
              Locations
            </Link>
          </li>
          <hr className="my-2 border-neutral-700" />
          {routes.map(({ label, children, icon: Icon, action }) => {
            const isNested = children?.length;
            return (
              <li
                className="group transition duration-300 cursor-pointer"
                key={label}
              >
                <div
                  className="flex justify-between items-center hover:bg-neutral-800 p-3 rounded-md"
                  onClick={() => {
                    if (isNested) {
                      setNavSelected((prev) => (prev ? null : label));
                    } else {
                      action && action();
                    }
                  }}
                >
                  <span className="flex gap-4 items-center">
                    <Icon width={20} />
                    {label}
                  </span>
                  {isNested && <ChevronRightIcon width={20} />}
                </div>
                {isNested && (
                  <ul
                    className={classNames(
                      "flex flex-col gap-1 overflow-hidden transition-[max-height] duration-300",
                      label === navSelected ? " max-h-36" : " max-h-0"
                    )}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {children.map(({ label, href }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="flex py-3 pl-12 gap-4 items-center text-base hover:text-neutral-400 transition-colors duration-200 leading-relaxed cursor-pointer"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
