import React from "react";
import Dashboard from "../Dashboard";
import PrimaryButton from "@/Components/PrimaryButton";
import MainHeader from "@/Components/MainHeader";
import Table from "@/Components/Table";
import { Link, router } from "@inertiajs/react";

const Index = ({ announcements }) => {
    const handleDelete = (id) => {
        router.delete(route("announcement.destroy", id));
    };

    const handleEdit = (id) => {
        router.get(route("announcement.edit", id));
    };

    const handleDetail = (id) => {
        router.get(route("announcement.show", id));
    };

    const headers = [
        { id: "title", label: "Title" },
        { id: "body", label: "body" },
        { id: "expire_date", label: "expire_date" },
    ];
    return (
        <>
            <Dashboard>
                <div className="container mx-auto p-4">
                    <MainHeader>
                        <h2 className="text-2xl ">Announcements List</h2>
                        <PrimaryButton>
                            <Link href={route("announcement.create")}>
                                Create Announcement
                            </Link>
                        </PrimaryButton>
                    </MainHeader>

                    {announcements.length > 0 ? (
                        <Table
                            headers={headers}
                            data={announcements}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            handleDetail={handleDetail}
                        />
                    ) : (
                        <div className="text-center py-4">
                            <p>No Announcement created yet.</p>
                        </div>
                    )}
                </div>
            </Dashboard>
        </>
    );
};

export default Index;
