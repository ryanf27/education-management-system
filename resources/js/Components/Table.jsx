import React from "react";

const Table = ({ headers, data, handleDelete, handleEdit, handleDetail }) => {
    return (
        <div className="overflow-x-auto ">
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr className="bg-gray-800 text-xs font-medium text-gray-50 uppercase tracking-wider  ">
                        {headers.map((header) => (
                            <th
                                key={header.id}
                                className="px-3 py-4 text-left "
                            >
                                {header.label}
                            </th>
                        ))}
                        <th className="px-3 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                    {data.map((item, index) => (
                        <tr key={item.id || index}>
                            {headers.map((header) => (
                                <td key={header.id} className="px-3 py-2">
                                    {item[header.id]}
                                </td>
                            ))}
                            <td className="px-3 py-2 flex items-center space-x-2">
                                <button
                                    onClick={() => handleDetail(item.id)}
                                    className="bg-gray-400 text-white px-3 py-1 rounded mr-3"
                                >
                                    Detail
                                </button>
                                <button
                                    onClick={() => handleEdit(item.id)}
                                    className="bg-blue-600 text-white px-3 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
