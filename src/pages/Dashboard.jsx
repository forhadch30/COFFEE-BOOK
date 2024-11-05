import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllLocalStorage, removeItems } from "../Utils/Index";
import Coffee from "../components/Coffees";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        const favorites = getAllLocalStorage()
        setCoffees(favorites)
    }, [])
    const handleRemove = id => {
        removeItems(id)
        const favorites = getAllLocalStorage()
        setCoffees(favorites)
    }
    return (
        <>
            <Heading
                title={'Welcome to Dashboard'}
                subTile={'Manage Coffee that you have previously added as favorite. you can view or remove them from have'}
            ></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    coffees.map(coffee => <Coffee handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Coffee>)
                }
            </div>
        </>
    );
};

export default Dashboard;