import React from "react";
import { Link } from "@inertiajs/react";
import PagesDropdown from "./Dropdown";
import ApplicationLogo from "./ApplicationLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ auth }) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="top-0 absolute z-50 w-full flex justify-center items-center px-2 py-3 ">
                <div className="px-4 flex justify-center items-center mx-auto">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FontAwesomeIcon
                                icon={faBars}
                                className="text-white"
                            />
                        </button>
                    </div>

                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen
                                ? " block rounded shadow-lg"
                                : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="flex items-center">
                                <a
                                    className=" text-gray-100 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="/"
                                >
                                    <ApplicationLogo className="h-8 w-8 mr-2 " />{" "}
                                    <span>Education Management</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <PagesDropdown />
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        className="lg:text-slate-200 text-slate-400 text-lg leading-lg"
                                    />
                                    <span className="lg:hidden inline-block ml-2">
                                        Share
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className="lg:text-slate-200 text-slate-400 text-lg leading-lg"
                                    />
                                    <span className="lg:hidden inline-block ml-2">
                                        Tweet
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="lg:text-slate-200 text-slate-400 text-lg leading-lg"
                                    />
                                    <span className="lg:hidden inline-block ml-2">
                                        Star
                                    </span>
                                </a>
                            </li>
                            <div className="sm:top-0 sm:right-0 p-6 ">
                                {auth.user ? (
                                    <Link
                                        href={`/dashboard/${auth.roles}`}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Log in
                                        </Link>

                                        <Link
                                            href={route("register")}
                                            className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
