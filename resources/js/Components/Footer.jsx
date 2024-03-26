import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebookSquare,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <>
            <div className="relative bg-slate-200 pt-8 pb-6">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-slate-200 fill-current"
                            points="2560 0 2560 105 0 105"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4 w-[80%]">
                    <div className="flex flex-wrap text-center lg:text-left">
                        {/* Left Section */}
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold">
                                Stay Connected with Us!
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-slate-600">
                                Follow us on social media, we share educational
                                tips and updates.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                {/* Social Icons */}
                                <button
                                    className="bg-white text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </button>
                                <button
                                    className="bg-white text-sky-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </button>
                                <button
                                    className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </button>
                                <button
                                    className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </button>
                            </div>
                        </div>

                        {/* Right Section - Links */}
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-start mb-6">
                                {/* Useful Links */}
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-slate-800 text-sm font-semibold mb-2">
                                        Resources
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-gray-500 hover:text-slate-800 font-semibold block pb-2 text-sm"
                                                href="#"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-500 hover:text-slate-800 font-semibold block pb-2 text-sm"
                                                href="#"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-500 hover:text-slate-800 font-semibold block pb-2 text-sm"
                                                href="#"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-slate-800 text-sm font-semibold mb-2">
                                        Learn More
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-gray-500 hover:text-slate-800 font-semibold block pb-2 text-sm"
                                                href="#"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-500 hover:text-slate-800 font-semibold block pb-2 text-sm"
                                                href="#"
                                            >
                                                Terms & Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-500 hover:text-slate-800 font-semibold block pb-2 text-sm"
                                                href="#"
                                            >
                                                Support
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-slate-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-slate-500 font-semibold py-1">
                                Copyright © {new Date().getFullYear()}{" "}Education
                                Management System
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
