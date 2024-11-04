import React from "react";
import Link from "next/link";

const cardData = [
  { id: 1, title: "Adventure Awaits", description: "Explore the unknown.", image: "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg" },
  { id: 2, title: "Serenity", description: "Find peace in nature.", image: "https://img.freepik.com/free-photo/stunning-landscape-mountain-view_23-2148530575.jpg" },
  { id: 3, title: "Urban Jungle", description: "Discover the city life.", image: "https://img.freepik.com/free-photo/aerial-view-modern-city_23-2148530578.jpg" },
  { id: 4, title: "Beach Vibes", description: "Relax by the sea.", image: "https://img.freepik.com/free-photo/stunning-sunrise-beach_23-2148530595.jpg" },
  { id: 5, title: "Mountain Trails", description: "Hike the heights.", image: "https://img.freepik.com/free-photo/mountain-landscape_23-2148530581.jpg" },
  { id: 6, title: "Night Lights", description: "Experience the nightlife.", image: "https://img.freepik.com/free-photo/city-night-lights_23-2148530587.jpg" },
];

const FunkyCardDisplay = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-cyan-400 text-white overflow-hidden p-4">
      <h2 className="text-5xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-3 gap-4 w-full max-w-5xl mb-4">
        {cardData.map((card) => (
          <div key={card.id} className="relative h-64 rounded-lg overflow-hidden shadow-lg"> {/* Adjusted height */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="text-center">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-sm mt-2">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/AP"> <button className="mt-4 bg-white text-cyan-400 px-6 py-2 rounded hover:bg-gray-200 transition-colors duration-300">
          Explore All Services
        </button> </Link> 
      
    </div>
  );
};

export default FunkyCardDisplay;
