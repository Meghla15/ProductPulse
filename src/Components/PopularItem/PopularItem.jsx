import React, { useState, useEffect } from "react";
import ItemCard from "./itemCard";
import { useLoaderData } from "react-router-dom";

const PopularItem = () => {
    const initialData = useLoaderData();
    const [searchResults, setSearchResults] = useState(initialData.items); // Initialize with items
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    // Function to handle the search operation
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/search?search=${searchTerm}&page=${page}&limit=10`);
        if (response.ok) {
            const data = await response.json();
            setSearchResults(data.items);
            setTotalPages(data.totalPages);
            setLoading(false);
        } else {
            console.error("Search request failed:", response.statusText);
            setLoading(false);
        }
    };

    // Function to handle page change
    const handlePageChange = async (newPage) => {
        setLoading(true);
        setPage(newPage);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/allData?page=${newPage}&limit=10`);
        if (response.ok) {
            const data = await response.json();
            setSearchResults(data.items);
            setTotalPages(data.totalPages);
            setLoading(false);
        } else {
            console.error("Failed to fetch data:", response.statusText);
            setLoading(false);
        }
    };

    useEffect(() => {
        handlePageChange(page);
    }, [page]);

    return (
        <div className="mt-4">
            <h1 className="font-semibold text-center lg:text-3xl text-2xl mt-4">
                Our Popular Items
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

            {loading && <p className="text-center">Loading...</p>}

            <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-2 gap-2 lg:mt-10 mt-6 mb-16 px-4 lg:px-0 md:px-2">
                {searchResults.map((item) => (
                    <ItemCard key={item._id} allData={item}></ItemCard>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-2 mt-4">
                <button 
                    className="btn bg-orange-600 text-white rounded-xl" 
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span className="text-xl">{page} / {totalPages}</span>
                <button 
                    className="btn bg-orange-600 text-white rounded-xl" 
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PopularItem;
