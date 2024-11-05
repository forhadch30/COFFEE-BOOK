import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutrition from '../assets/nutrition.png'
import { addFavorite, getAllLocalStorage } from "../Utils/Index";
const CoffeeDetails = () => {
    const { id } = useParams()
    const data = useLoaderData();
    const [coffee, setCoffee] = useState({});
    const [isFavorite, setIsFavorite] = useState(false)
    useEffect(() => {
        const singleData = data.find(coffee => coffee.id == id);
        setCoffee(singleData);
        const favorites = getAllLocalStorage();
        const isExists = favorites.find(item => item.id == singleData.id);
        if (isExists) {
            setIsFavorite(true);
        }
    }, [])
    const {
        popularity,
        rating,
        making_process,
        description,
        nutrition_info,
        ingredients,
        image,
        name
    } = coffee;

    const handleAddedToLocal = coffee => {
        addFavorite(coffee);
        setIsFavorite(true)
    }

    return (
        <div className="space-y-3">
            <h2 className="text-2xl font-thin">{description}</h2>
            <img className="rounded-2xl w-full h-[500px]  mx-auto" src={image} alt="" />
            <div className="flex justify-between">
                <p className="text-2xl font-thin">{name}</p>
                <button
                    disabled={isFavorite}
                    onClick={() => handleAddedToLocal(coffee)}
                    className="btn btn-warning">Add Favorite</button>
            </div>
            <h2 className="font-semibold">Popularity: {popularity}</h2>
            <h2 className="font-semibold">Rating: {rating}</h2>
            <p className="font-bold">Marking Process:</p>
            <small className="font-medium">{making_process}</small>
            <div className="flex gap-5">
                <div className="flex flex-col justify-center gap-5">
                    <h2 className="text-2xl font-thin">Ingredients:</h2>
                    <ul className="text-xl ml-12">
                        {
                            ingredients && ingredients.map((i, index) => (<li className="list-disc" key={index}>
                                {i}
                            </li>))
                        }
                    </ul>
                    <h2 className="text-2xl font-thin">Ingredients</h2>
                    <ul className="text-xl ml-12">
                        {
                            nutrition_info && Object.keys(nutrition_info).map((n, i) => (<li className="list-disc" key={i}>
                                {n}: {nutrition_info[n]}
                            </li>))
                        }
                    </ul>
                </div>
                <div className="flex-1 ">
                    <img src={nutrition} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;