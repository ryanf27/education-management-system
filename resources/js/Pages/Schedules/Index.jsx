import React from "react";
import Dashboard from "../Dashboard";
import PrimaryButton from "@/Components/PrimaryButton";
import MainHeader from "@/Components/MainHeader";
import Table from "@/Components/Table";
import { Head, Link, router } from "@inertiajs/react";

const Index = ({ schedules }) => {
    const handleDelete = (id) => {
        router.delete(route("schedules.destroy", id));
    };

    const handleEdit = (id) => {
        router.get(route("schedules.edit", id));
    };
    const handleDetail = (id) => {
        router.get(route("schedules.show", id));
    };

    const headers = [
        { id: "day", label: "day" },
        { id: "start_time", label: "start_time" },
        { id: "end_time", label: "end_time" },
    ];

    return (
        <Dashboard>
            <Head title="schedules" />
            <div className="container mx-auto p-4">
                <MainHeader>
                    <h2 className="text-2xl">schedules</h2>
                    <PrimaryButton>
                        <Link href={route("schedules.create")}>
                            Add New schedules
                        </Link>
                    </PrimaryButton>
                </MainHeader>

                {schedules.length > 0 ? (
                    <Table
                        headers={headers}
                        data={schedules}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        handleDetail={handleDetail}
                    />
                ) : (
                    <div className="text-center py-4">
                        <p>No schedules created yet.</p>
                    </div>
                )}
            </div>
        </Dashboard>
    );
};

export default Index;
