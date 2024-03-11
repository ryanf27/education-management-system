import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

const SidebarLink = ({ to, children }) => (
    <li className="items-center">
        <Link
            className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
            href={to}
        >
            {children}
        </Link>
    </li>
);

export default function Sidebar({ auth }) {
    const [isOpen, setIsOpen] = useState(false);
    const { role } = usePage().props;

    const getLinksByRole = (role) => {
        switch (role) {
            case "teacher":
                return [
                    <SidebarLink to="/dashboard">Dashboard</SidebarLink>,
                    <SidebarLink to="/assignments">Assignments</SidebarLink>,
                    <SidebarLink to="/schedule">Schedule</SidebarLink>,
                ];
            case "student":
                return [
                    <SidebarLink to="/dashboard">Dashboard</SidebarLink>,
                    <SidebarLink to="/courses">Courses</SidebarLink>,
                    <SidebarLink to="/schedule">Schedule</SidebarLink>,
                ];
            case "parent":
                return [
                    <SidebarLink to="/dashboard">Dashboard</SidebarLink>,
                    <SidebarLink to="/child-progress">
                        Child's Progress
                    </SidebarLink>,
                    <SidebarLink to="/meetings">Meetings</SidebarLink>,
                ];
            default:
                return [<SidebarLink to="/">Home</SidebarLink>];
        }
    };

    const roleBasedLinks = getLinksByRole(role);

    return (
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-800 text-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
            <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                <button
                    className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className="fas fa-bars"></i>
                </button>
                <Link href="/" className="flex">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-300" />
                </Link>
                <div
                    className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    <div className="md:min-w-full block pb-4 mb-4 border-b border-solid border-blueGray-200">
                        <div className="flex flex-wrap justify-end">
                            <button
                                className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                onClick={() => setIsOpen(false)}
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                        {roleBasedLinks}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
