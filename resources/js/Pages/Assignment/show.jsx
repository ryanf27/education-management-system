import React from "react";
import { router } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import DetailCard from "@/Components/DetailCard";

const Show = ({ assignment }) => {
    return (
        <Dashboard>
            <DetailCard
                title={assignment.title}
                description={assignment.description}
                deadline={assignment.deadline}
                backUrl={route("assignments.index")}
                onEdit={() => {
                    router.get(route("assignments.edit", assignment.id));
                }}
            />
        </Dashboard>
    );
};

export default Show;
