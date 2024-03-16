import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";

export default function Dashboard({ children }) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex min-h-screen">
                <Sidebar />
                <div className="flex-1 md:ml-64 bg-blueGray-100">
                    {children}
                </div>
            </div>
        </>
    );
}
