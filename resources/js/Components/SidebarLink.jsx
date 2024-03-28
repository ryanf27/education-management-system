import React from "react";
import { Link } from "@inertiajs/react";

const SidebarLink = ({ to, children, method = "get" }) => (
    <li className="items-center">
        <Link
            className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
            href={to}
            method={method}
            as="button"
        >
            {children}
        </Link>
    </li>
);

export default SidebarLink;
