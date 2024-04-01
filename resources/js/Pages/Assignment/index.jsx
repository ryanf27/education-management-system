import React from "react";
import Dashboard from "../Dashboard";
import PrimaryButton from "@/Components/PrimaryButton";
import MainHeader from "@/Components/MainHeader";
import Table from "@/Components/Table";
import { Head, Link, router } from "@inertiajs/react";

const Index = ({ assignments }) => {
    console.log(assignments);
    const handleDelete = (id) => {
        router.delete(route("assignments.destroy", id));
    };

    const handleEdit = (id) => {
        router.get(route("assignments.edit", id));
    };
    const handleDetail = (id) => {
        router.get(route("assignments.show", id));
    };

    const headers = [
        { id: "title", label: "Title" },
        { id: "description", label: "Description" },
        { id: "deadline", label: "Deadline" },
    ];

    return (
        <Dashboard>
            <Head title="Assignment" />
            <div className="container mx-auto p-4">
                <MainHeader>
                    <h2 className="text-2xl">Assignments</h2>
                    <PrimaryButton>
                        <Link href={route("assignments.create")}>
                            Add New Assignment
                        </Link>
                    </PrimaryButton>
                </MainHeader>

                {assignments.length > 0 ? (
                    <Table
                        headers={headers}
                        data={assignments}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        handleDetail={handleDetail}
                    />
                ) : (
                    <div className="text-center py-4">
                        <p>No assignments created yet.</p>
                    </div>
                )}
            </div>
        </Dashboard>
    );
};

export default Index;
