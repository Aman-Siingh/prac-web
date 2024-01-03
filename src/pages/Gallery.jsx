import React from 'react';

const GalleryItem = ({ imageUrl, title }) => (
    <div className="m-4">
        <img src={imageUrl} alt={title} className="rounded-lg shadow-md" />
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
    </div>
);

const GalleryPage = () => {
    const galleryItems = [
        {
            title: "Image 1",
            imageUrl: "https://via.placeholder.com/300",
        },
        {
            title: "Image 2",
            imageUrl: "https://via.placeholder.com/300",
        },
        {
            title: "Image 3",
            imageUrl: "https://via.placeholder.com/300",
        },
        {
            title: "Image 3",
            imageUrl: "https://via.placeholder.com/300",
        },
        // Add more images here...
    ];

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl font-bold mb-8">Gallery</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {galleryItems.map((item, index) => (
                    <GalleryItem key={index} title={item.title} imageUrl={item.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
