import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";

export default function Dashboard({ children }) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex min-h-screen">
                <Sidebar />
                <div
                    id="main"
                    className="flex-1 md:ml-64 bg-slate-100 justify-center items-center flex-col"
                >
                    {children}
                </div>
            </div>
        </>
    );
}
