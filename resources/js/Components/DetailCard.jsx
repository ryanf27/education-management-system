import React from "react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

const DetailCard = ({
    title,
    description,
    deadline,
    backUrl,
    onEdit,
    ...props
}) => {
    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
            <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
                <h1 className="text-xl font-semibold">{title}</h1>

                {backUrl && (
                    <Link
                        href={backUrl}
                        className="text-sm bg-gray-200 text-black hover:bg-gray-300 rounded-lg p-2"
                    >
                        Back
                    </Link>
                )}
            </div>
            <div className="p-4">
                <div>
                    <p className="text-gray-700 text-lg mb-4 min-h-20">
                        {description}
                    </p>
                    {deadline && (
                        <p className="text-gray-600">
                            Date:{" "}
                            <span className="text-gray-800 font-medium">
                                {deadline}
                            </span>
                        </p>
                    )}
                </div>
                {Object.keys(props).map((key) => (
                    <div key={key} className="mt-2 ">
                        {key} : {props[key]}
                    </div>
                ))}
            </div>

            {onEdit && (
                <div className="px-4 py-3 bg-gray-50 text-right">
                    <PrimaryButton onClick={onEdit}>Edit</PrimaryButton>
                </div>
            )}
        </div>
    );
};

export default DetailCard;
