import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link } from "@inertiajs/react";

const Index = ({ studentClass }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredClasses, setFilteredClasses] = useState(studentClass);

    // // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [classesPerPage] = useState(6);

    // // Calculate the current classes to display
    const indexOfLastClass = currentPage * classesPerPage;
    const indexOfFirstClass = indexOfLastClass - classesPerPage;
    const currentClasses = filteredClasses.slice(
        indexOfFirstClass,
        indexOfLastClass
    );

    // // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const results = studentClass.filter((cls) =>
            cls.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredClasses(results);
        setCurrentPage(1);
    }, [searchTerm, studentClass]);

    return (
        <Dashboard>
            <Head title="Enrollment" />
            <div className="my-4 text-center">
                <input
                    type="text"
                    placeholder="Search ..."
                    className="px-4 py-2 border rounded-lg w-4/5"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* card list */}
            {/* card list */}
            <div id="classListCard" className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-4">
                    Class List
                </h2>

                {/* card grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentClasses.map((cls) => (
                        <div
                            key={cls.id}
                            className="border border-gray-200 rounded-lg shadow-md p-4 grid gap-4"
                        >
                            {/* card header */}
                            <div className="grid grid-flow-col auto-cols-max gap-2  place-items-center text-center border-b border-gray-200 pb-2 mb-2">
                                <ApplicationLogo className="block w-12 h-12 mb-2 bg-black rounded-full" />
                                <h3 className="text-lg font-semibold">
                                    {cls.name}
                                </h3>
                            </div>
                            {/* card body */}
                            <div className="grid gap-2">
                                <p className="text-gray-600">
                                    Grade: {cls.grade}
                                </p>
                                <p>{cls.subject.name}</p>
                                <p>{cls.subject.description}</p>

                                <Link
                                    href={route("enrollments.create", {
                                        classId: cls.id,
                                    })}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                                >
                                    Enroll Now!
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <nav className="mt-8">
                <ul className="flex justify-center space-x-2">
                    {[
                        ...Array(
                            Math.ceil(filteredClasses.length / classesPerPage)
                        ).keys(),
                    ].map((number) => (
                        <li
                            key={number}
                            className="bg-white border px-4 py-2 cursor-pointer"
                            onClick={() => paginate(number + 1)}
                        >
                            {number + 1}
                        </li>
                    ))}
                </ul>
            </nav>
        </Dashboard>
    );
};

export default Index;
