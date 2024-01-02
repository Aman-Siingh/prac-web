import React from 'react';

const FeatureSection = ({ title, description }) => (
    <div className="p-6 bg-white rounded-lg shadow-md m-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
    </div>
);

const HomePages = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col items-center justify-center">
            <div className="text-white text-center">
                <h1 className="text-4xl font-bold mb-4">Gupta Clinic</h1>
                <p className="text-lg mb-8">Discover amazing thiings about us </p>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 mb-4">Get Started</button>

                <div className="flex justify-center">
                    <button className="bg-white text-blue-500 px-4 py-2 mx-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">Call</button>
                    <button className="bg-white text-blue-500 px-4 py-2 mx-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">Refer</button>
                    <button className="bg-white text-blue-500 px-4 py-2 mx-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">History</button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center">
                <FeatureSection title="Dental" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <FeatureSection title="Heart" description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                <FeatureSection title="Cancer" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." />
            </div>
        </div>
    );
}

export default HomePages;
