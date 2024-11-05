import { useLoaderData } from "react-router-dom";
import Coffee from "../components/Coffees";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);
    const handleSortBy = (sortBy) => {
        if (sortBy === 'popularity') {
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
            setCoffees(sorted)
        }
        else if (sortBy === 'rating') {
            const sorted = [...data].sort((a, b) => b.rating - a.rating);
            setCoffees(sorted)
        }
    }
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="text-2xl font-thin">
                    <h2>Sort Coffee &apos;s by Popularity & Rating-&gt;</h2>
                </div>
                <div className="flex items-center gap-3">
                    <div onClick={() => handleSortBy('popularity')} className="btn btn-warning">Sort By Popularity</div>
                    <div onClick={() => handleSortBy('rating')} className="btn btn-warning">Sort By Rating</div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    coffees.map(coffee => <Coffee key={coffee.id} coffee={coffee}></Coffee>)
                }
            </div>
        </>
    );
};

export default Coffees;