import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
    const { auth } = usePage().props;
    const roles = auth.roles[0] + auth.roles.slice(1);

    return (
        <aside>
            <nav className="sm:left-0 sm:fixed sm:top-0 sm:min-w-full md:bottom-0 md:min-w-64 md:overflow-y-auto md:flex md:flex-col md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-800 text-white  z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    <Link
                        href="/"
                        className="flex border-b-2 border-bottom-width: 2px; items-center "
                    >
                        <ApplicationLogo className="block w-auto size-10 mb-2" />
                        <span className="ml-3 text-white text-2xl">
                            Dashboard
                        </span>
                    </Link>
                    <ul className="md:flex-col md:min-w-full flex flex-col list-none mt-6 mb-3 border-b-2 border-bottom-width: 2px;">
                        {/* Inline conditional logic for role-based rendering */}
                        <SidebarLink to={`/dashboard/${auth.roles}`}>
                            Home
                        </SidebarLink>
                        <SidebarLink to={route("announcement.index")}>
                            Annauncement
                        </SidebarLink>
                        {roles === "teacher" && (
                            <>
                                <SidebarLink to={route("assignments.index")}>
                                    Assignments
                                </SidebarLink>
                                <SidebarLink to={route("schedules.index")}>
                                    Schedule
                                </SidebarLink>
                            </>
                        )}
                        {roles === "student" && (
                            <>
                                <SidebarLink to={route("courses.index")}>
                                    Courses
                                </SidebarLink>
                                <SidebarLink to={route("submissions.index")}>
                                    Submission
                                </SidebarLink>
                                <SidebarLink to={route("enrollments.index")}>
                                    My Class
                                </SidebarLink>
                                <SidebarLink to="dashboard/teacher/assignment">
                                    Events
                                </SidebarLink>
                                <SidebarLink to="dashboard/teacher/assignment">
                                    GPA
                                </SidebarLink>
                                <SidebarLink to={route("schedules.index")}>
                                    Schedule
                                </SidebarLink>
                            </>
                        )}
                        {roles === "parent" && (
                            <>
                                <SidebarLink to="dashboard/child-progress">
                                    Child's Progress
                                </SidebarLink>
                                <SidebarLink to="dashboard/meetings">
                                    Meetings
                                </SidebarLink>
                            </>
                        )}
                        {roles !== "teacher" &&
                            roles !== "student" &&
                            roles !== "parent" && (
                                <SidebarLink to="/">Home</SidebarLink>
                            )}
                    </ul>
                    <ul className="hidden md:flex md:flex-col md:min-w-full x:hidden  flex-col list-none mt-6 mb-3 border-b-2 border-bottom-width: 2px;">
                        <SidebarLink to={route("profile.edit")}>
                            Profile
                        </SidebarLink>
                        <SidebarLink to={route("logout")} method="post">
                            Logout
                        </SidebarLink>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}
