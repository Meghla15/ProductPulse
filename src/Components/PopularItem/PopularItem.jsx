import { useState, useEffect } from "react";
import ItemCard from "./itemCard";
import { useLoaderData } from "react-router-dom";
import 'animate.css';
import Aos from "aos";
import 'aos/dist/aos.css'

const PopularItem = () => {
    const initialData = useLoaderData();
    const [searchResults, setSearchResults] = useState(initialData?.items || []);
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
     

    
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/search?search=${searchTerm}&page=${page}&limit=10`);
            if (response.ok) {
                const data = await response.json();
                console.log('Search Data:', data); 
                setSearchResults(data.items || []);
                setTotalPages(data.totalPages || 1);
            } else {
                console.error("Search request failed:", response.statusText);
            }
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = async (newPage) => {
        if (newPage < 1 || newPage > totalPages) return; 
        setLoading(true);
        setPage(newPage);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/allData?page=${newPage}&limit=10`);
            if (response.ok) {
                const data = await response.json();
                // console.log( data); 
                setSearchResults(data.items || []);
                setTotalPages(data.totalPages || 1);
            } else {
                console.error( response.statusText);
            }
        }  finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        Aos.init();
        handlePageChange(page);
        
    }, [page]);

    return (
        <div className="mt-4">
            <h1 className="font-semibold text-center lg:text-3xl text-2xl mt-4 animate__animated animate__backInLeft">Our Popular Items</h1>
            <h6 className="font-bold text-orange-600 text-center text-xl mt-1 animate__animated animate__backInLeft">On Sale</h6>

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

            <div className="grid lg:grid-cols-1 gap-4 p-4">
                <div className="flex flex-col lg:flex-row lg:justify-evenly lg:mt-3 gap-4">
                    <select 
                        className="select select-bordered w-full lg:w-1/3 lg:max-w-xs" 
                        defaultValue=""
                    >
                        <option value="" disabled>Brand Name</option>
                        <option value="Brand1">SoundPlus</option>
                        <option value="Brand2">VisionMax</option>
                        <option value="Brand2">TecTime</option>
                        <option value="Brand2">PowerCore</option>
                        <option value="Brand2">NextGen</option>
                        <option value="Brand2">FitPro</option>
                        <option value="Brand2">RideOn</option>
                        <option value="Brand2">ChargeMate</option>
                        <option value="Brand2">AudioZen</option>
                        <option value="Brand2">SecureNest</option>
                        <option value="Brand2">BrightSmile</option>
                        <option value="Brand2">ChargeUp</option>
                        <option value="Brand2">CrispMaster</option>
                        <option value="Brand2">GameStation</option>
                        <option value="Brand2">EcoTemp</option>
                        <option value="Brand2">BrewMaster</option>
                        <option value="Brand2">SecureHome</option>
                    </select>
                    <select 
                        className="select select-bordered w-full lg:w-1/3 lg:max-w-xs" 
                        defaultValue=""
                    >
                        <option value="" disabled>Category Name</option>
                        <option value="Category1">Electronics</option>
                        <option value="Category2">Wearable</option>
                        <option value="Category2">Computers</option>
                        <option value="Category2">Accessories</option>
                        <option value="Category2">Mobile Phones</option>
                        <option value="Category2">Wearable</option>
                        <option value="Category2">Transportation</option>
                        <option value="Category2">Audio</option>
                        <option value="Category2">Home Security</option>
                        <option value="Category2">Personal Care</option>
                        <option value="Category2">Kitchen Appliances</option>
                    </select>
                    <select 
                        className="select select-bordered w-full lg:w-1/3 lg:max-w-xs" 
                        defaultValue=""
                    >
                        <option value="" disabled>Price Range</option>
                        <option value="0-50">0-50 $</option>
                        <option value="50-100">50-100 $</option>
                        <option value="100-200">100-200 $</option>
                        <option value="200-400">200-400 $</option>
                        <option value="500-800">500-800 $</option>
                        <option value="900-1200">900-1200 $</option>
                    </select>

                    <div className="flex flex-col lg:flex-row lg:gap-2 lg:items-center">
                        <h1 className="font-semibold text-xs lg:text-sm mb-2 lg:mb-0">Sort By:</h1>
                        <div className="flex flex-wrap gap-2">
                            <div className="flex items-center gap-1">
                                <h1 className="text-xs lg:text-sm">Low to High</h1>
                                <input type="checkbox" defaultChecked className="checkbox" />
                            </div>
                            <div className="flex items-center gap-1">
                                <h1 className="text-xs lg:text-sm">High to Low</h1>
                                <input type="checkbox" defaultChecked className="checkbox" />
                            </div>
                            <div className="flex items-center gap-1">
                                <h1 className="text-xs lg:text-sm">Newest</h1>
                                <input type="checkbox" defaultChecked className="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {loading && <p className="text-center">Loading...</p>}

            <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-2 gap-2 lg:mt-10 mt-6 mb-16 px-4 lg:px-0 md:px-2"  data-aos="fade-up"
     data-aos-duration="3000">
            {searchResults.length > 0 ? (
    searchResults.map((item) => (
        <ItemCard key={item._id} allData={item} />
    ))
) : (
    <p>No items found</p>
)}

            </div>

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
