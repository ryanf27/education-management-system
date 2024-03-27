import React from "react";
import { router } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import DetailCard from "@/Components/DetailCard";

const Show = ({ announcement }) => {
    return (
        <Dashboard>
            <DetailCard
                title={announcement.title}
                description={announcement.body}
                deadline={announcement.expiry_date}
                backUrl={route("announcement.index")}
                onEdit={() => {
                    router.get(route("announcement.edit", announcement.id));
                }}
            />
        </Dashboard>
    );
};

export default Show;
