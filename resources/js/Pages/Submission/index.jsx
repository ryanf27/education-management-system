import React from "react";
import Dashboard from "../Dashboard";
import MainHeader from "@/Components/MainHeader";
import PrimaryButton from "@/Components/PrimaryButton";
import Table from "@/Components/Table";
import { Head, Link, router } from "@inertiajs/react";

const Index = ({ submissions }) => {
    const handleDelete = (id) => {
        router.delete(route("submissions.destroy", id));
    };

    const handleEdit = (id) => {
        router.get(route("submissions.edit", id));
    };

    const handleDetail = (id) => {
        router.get(route("submissions.show", id));
    };

    const headers = [
        { id: "file", label: "file" },
        { id: "score", label: "score" },
        { id: "assignment_id", label: "assignment_id" },
    ];

    return (
        <Dashboard>
            <Head title="Submissions" />

            <div className="container mx-auto p-4">
                <MainHeader>
                    <h2 className="text-2xl">submissions</h2>
                    <PrimaryButton>
                        <Link href={route("submissions.create")}>
                            Add New submissions
                        </Link>
                    </PrimaryButton>
                </MainHeader>

                {submissions.length > 0 ? (
                    <Table
                        headers={headers}
                        data={submissions}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        handleDetail={handleDetail}
                    />
                ) : (
                    <div className="text-center py-4">
                        <p>No submissions created yet.</p>
                    </div>
                )}
            </div>
        </Dashboard>
    );
};

export default Index;
