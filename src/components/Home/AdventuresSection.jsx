import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import maui1 from "../../assets/home/maui1.png";
import maui2 from "../../assets/home/maui2.png";
import maui3 from "../../assets/home/maui3.png";
import maui4 from "../../assets/home/maui4.png";
import maui5 from "../../assets/home/maui5.png";
import maui6 from "../../assets/home/maui6.png";
import maui7 from "../../assets/home/maui7.png";
import maui8 from "../../assets/home/maui8.png";

const mockAdventures = [
  {
    id: 1,
    title: "The Island of Maui",
    location: "Hawaii",
    description: "",
    price: "",
    image: maui1,
  },
  {
    id: 2,
    title: "Paris",
    location: "France",
    description: "A Paris Adventure",
    price: "$600",
    image: maui2,
  },
  {
    id: 3,
    title: "Tokyo",
    location: "Japan",
    description: "A Tokyo Adventure",
    price: "$900",
    image: maui3,
  },
  {
    id: 4,
    title: "Sydney",
    location: "Australia",
    description: "A Sydney Adventure",
    price: "$1200",
    image: maui4,
  },
  {
    id: 5,
    title: "New York",
    location: "USA",
    description: "A New York Adventure",
    price: "$800",
    image: maui5,
  },
  {
    id: 6,
    title: "Cape Town",
    location: "South Africa",
    description: "A Cape Town Adventure",
    price: "$700",
    image: maui6,
  },
  {
    id: 7,
    title: "London",
    location: "UK",
    description: "A London Adventure",
    price: "$650",
    image: maui7,
  },
  {
    id: 8,
    title: "Rome",
    location: "Italy",
    description: "A Rome Adventure",
    price: "$750",
    image: maui8,
  },
];

const AdventuresSection = () => {
  return (
    <div className="mt-10 md:mt-[300px] px-4 md:px-0">
      {/* top */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-layover-blue font-extrabold">
            Set Sail on Unforgettable Adventures
          </p>
          <p className="font-montserratAlternates text-2xl md:text-3xl font-bold">
            Discover Your Vacation
          </p>
        </div>

        <div>
          <button className="border-[1px] border-layover-blue hover:bg-blue-50 text-layover-blue rounded-md text-xs py-2 px-4 md:px-8">
            See all
          </button>
        </div>
      </div>
      {/* content */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mockAdventures.map((adventure) => (
            <div
              key={adventure.id}
              className="relative rounded-3xl overflow-hidden mb-8 w-full"
            >
              <img
                src={adventure.image}
                alt={adventure.title}
                className="w-full h-[300px] md:h-[420px] object-cover"
              />
              <div className="z-10 absolute bottom-0 w-full px-4 py-6 text-white bg-gradient-to-t from-black via-transparent">
                <p className="font-montserratAlternates text-xl md:text-2xl font-medium">
                  {adventure.title}
                </p>
                <div className="flex items-center gap-1">
                  <HiLocationMarker />
                  <p>{adventure.location}</p>
                </div>
                {adventure.description && (
                  <div className="flex items-center justify-between gap-1 mb-4">
                    <p className="font-light">{adventure.description}</p>
                    <p className="text-2xl">{adventure.price}</p>
                  </div>
                )}
                <button className="w-full bg-white text-layover-blue text-xs text-center rounded-3xl py-2 px-4">
                  More details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdventuresSection;
