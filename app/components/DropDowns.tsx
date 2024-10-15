"use client";
import { MapPin, GlobeIcon } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LocationSelector() {
  const [selectedLocation, setSelectedLocation] = useState("USA");
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");

  // For the countries
  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  // For the languages
  const handleLanguageSelect = (language: string) => {
    if (language === "English") {
      setSelectedLanguage("EN");
    } else if (language === "Spanish") {
      setSelectedLanguage("SPN");
    }
  };

  return (
    <div className="flex space-x-4 lg:space-x-6">
      {/* Dropdown for MapPin */}
      <div className="flex items-center space-x-1 lg:space-x-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="border rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
              <MapPin className="p-[4px] lg:p-[5px] text-gray-700" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="mt-2">
            {/* Dropdown items with full-width buttons */}
            <DropdownMenuItem asChild>
              <button
                className="w-full border-b pb-3 pt-1 text-left hover:bg-transparent focus:bg-transparent"
                onClick={() => handleLocationSelect("United States of America")}
              >
                United States of America
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                className="w-full border-b pb-3 pt-1 text-left hover:bg-transparent focus:bg-transparent"
                onClick={() => handleLocationSelect("International")}
              >
                International
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                className="w-full border-b pb-3 pt-1 text-left hover:bg-transparent focus:bg-transparent"
                onClick={() => handleLocationSelect("Canada")}
              >
                Canada
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                className="w-full border-b pb-3 pt-1 text-left hover:bg-transparent focus:bg-transparent"
                onClick={() => handleLocationSelect("Denmark")}
              >
                Denmark
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                className="w-full border-b pb-3 pt-1 text-left hover:bg-transparent focus:bg-transparent"
                onClick={() => handleLocationSelect("Other Country")}
              >
                Other Country
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Selected Location Display */}
        <div className="flex items-center">
          <span className="text-gray-700 font-semibold lg:ml-[-6px] lg:text-lg">
            {selectedLocation}
          </span>
        </div>
      </div>

      {/* language dropdown */}
      <div className="flex items-center space-x-1 lg:space-x-4">
        {/* Dropdown for GlobeIcon */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="border rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
              <GlobeIcon className="p-[4px] lg:p-[5px] text-gray-700" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="mt-2">
            <DropdownMenuItem asChild>
              <button
                className="w-full border-b pb-3 pt-1 text-left hover:bg-transparent focus:bg-transparent"
                onClick={() => handleLanguageSelect("English")}
              >
                English
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                className="w-full border-b pb-3 pt-1 text-left hover:bg-transparent focus:bg-transparent"
                onClick={() => handleLanguageSelect("Spanish")}
              >
                Spanish
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Selected Language Display */}
        <div className="flex">
          <span className="text-gray-700 font-semibold lg:ml-[-6px] lg:text-lg">
            {selectedLanguage}
          </span>
        </div>
      </div>
    </div>
  );
}
