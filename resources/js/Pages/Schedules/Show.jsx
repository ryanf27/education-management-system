import React from "react";
import { router } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import DetailCard from "@/Components/DetailCard";

const Show = ({ schedules, classes }) => {
    return (
        <Dashboard>
            <DetailCard
                title={schedules.day}
                description={schedules.start_time}
                deadline={schedules.end_time}
                backUrl={route("schedules.index")}
                onEdit={() => {
                    router.get(route("schedules.edit", schedules.id));
                }}
                classes={classes.name}
            />
        </Dashboard>
    );
};

export default Show;
