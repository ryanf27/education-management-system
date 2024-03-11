import { Head } from "@inertiajs/react";

import Sidebar from "@/Components/Sidebar";

export default function Dashboard({ auth, children }) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex min-h-screen">
                <Sidebar auth={auth} />
                <div className="flex-1 md:ml-64 bg-blueGray-100">
                    {children}
                </div>
            </div>
        </>
    );
}
