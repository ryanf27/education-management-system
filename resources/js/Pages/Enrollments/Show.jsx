import React from "react";
import { router } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import DetailCard from "@/Components/DetailCard";

const Show = ({ enrollment }) => {
    return (
        <Dashboard>
            <DetailCard
                title={enrollment.class_name}
                description={enrollment.class_grade}
                deadline={enrollment.created_at}
                backUrl={route("enrollments.index")}
                onEdit={() => {
                    router.get(route("enrollments.edit", enrollment.id));
                }}
                Name={enrollment.student_name}
            />
        </Dashboard>
    );
};

export default Show;
