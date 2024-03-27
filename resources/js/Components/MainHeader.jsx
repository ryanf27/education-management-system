import React from "react";

const MainHeader = ({ children }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                {children}
            </div>
        </div>
    );
};

export default MainHeader;
