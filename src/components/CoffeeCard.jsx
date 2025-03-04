import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Coffees from "./Coffees";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const navigate = useNavigate()
    const data = useLoaderData();
    const { category } = useParams();
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(coffee => coffee.category === category)
            setCoffees(filteredByCategory)
        }
        else {
            setCoffees(data.slice(0, 6))
        }
    }, [category, data])
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    coffees.map(coffee => <Coffees key={coffee.id} coffee={coffee}></Coffees>)
                }
            </div>
            <button className="btn btn-outline" onClick={() => navigate('/coffees')}>View All</button>
        </>
    );
};

export default CoffeeCard;