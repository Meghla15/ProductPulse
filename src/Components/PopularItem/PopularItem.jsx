import React, { useState } from "react";
import ItemCard from "./itemCard";
import { useLoaderData } from "react-router-dom";

const PopularItem = () => {
    const allDatas = useLoaderData(); 
    const [searchResults, setSearchResults] = useState(allDatas); 
    const [searchTerm, setSearchTerm] = useState("");  

    // Function to handle the search operation
    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchTerm.trim() === "") {
            setSearchResults(allDatas);  
            return;
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/search?search=${searchTerm}`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
            } else {
                console.error("Search request failed:", response.statusText);
            }
        } catch (error) {
            console.error("An error occurred during search:", error);
        }
    };

    return (
        <div className="mt-4">
            <h1 className="font-semibold text-center lg:text-3xl text-2xl mt-4">
                Our Popular Item
            </h1>
            <h6 className="font-bold text-orange-600 text-center text-xl mt-1">
                On Sale
            </h6>

            <form className="flex item-center justify-center mt-2" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Search by Product Name" 
                    name="search" 
                    className="border p-2 rounded-xl" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <input type="submit" value='Search' className="btn bg-orange-600 text-white rounded-xl"/>
            </form>

            <div className="flex justify-evenly mt-3">
        <select className="select select-bordered w-1/3 max-w-xs">
          <option disabled selected>
            Brand Name
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select select-bordered w-1/3 max-w-xs">
          <option disabled selected>
        Category Name
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select select-bordered w-1/3 max-w-xs">
          <option disabled selected>
          Price Range
          </option>
          <option>0-50 $</option>
          <option>50-100 $</option>
          <option>100-200 $</option>
          <option>200-400 $</option>
          <option>500-800 $</option>
          <option>900-1200 $</option>
        </select>


        <div className="flex gap-2">
          <h1 className="font-semibold text-xm">Sort By :</h1>
          <div className="flex gap-1">
            <h1>Low to High</h1>
            <input type="checkbox" defaultChecked className="checkbox" />
          </div>
          <div className="flex gap-1">
            <h1>High to Low</h1>
            <input type="checkbox" defaultChecked className="checkbox" />
          </div>
          <div className="flex gap-1">
            <h1>Newest</h1>
            <input type="checkbox" defaultChecked className="checkbox" />
          </div>
        </div>

        </div>

            <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-2 gap-2 lg:mt-10 mt-6 mb-16 px-4 lg:px-0 md:px-2">
                {searchResults.map((item) => (
                    <ItemCard key={item._id} allData={item}></ItemCard>
                ))}
            </div>
        </div>
    );
};

export default PopularItem;
