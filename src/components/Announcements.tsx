import React from "react";

const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Duyurular</h1>
                <span className="text-xs text-gray-400"> View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-colorSkyLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">01-01-2025</h2>
                        <span className="text-xs text-gray-400 bg-white p-1">12-01-2024</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                </div>

                <div className="bg-colorPurpleLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">01-01-2025</h2>
                        <span className="text-xs text-gray-400 bg-white p-1">12-01-2024</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                </div>

                <div className="bg-colorYellowLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">01-01-2025</h2>
                        <span className="text-xs text-gray-400 bg-white p-1">12-01-2024</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Announcements;
