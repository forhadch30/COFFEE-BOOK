import { Link, useLocation, } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
const Coffee = ({ coffee, handleRemove }) => {
    const { pathname } = useLocation()
    console.log(pathname)
    const { id, name, image, category, popularity, rating, origin, type } = coffee || {};
    return (
        <div className="relative">
            <Link to={`/coffee/${id}`}>
                <div className="border rounded-2xl p-4 space-y-3 my-5">
                    <figure>
                        <img
                            src={image}
                            alt={name}
                            className="rounded-xl h-[220px] w-full hover:scale-75 duration-1000" />
                    </figure>
                    <h2 className="card-title">Name: {name}</h2>
                    <div className="space-y-2 text-gray-500">
                        <p>Category: {category}</p>
                        <hr />
                        <p>Type: {type}</p>
                        <hr />
                        <p>Origin: {origin}</p>
                        <hr />
                        <p>Rating: {rating}</p>
                        <hr />
                        <p>Popularity: {popularity}</p>
                    </div>
                </div>
            </Link>
            {
                pathname === '/dashboard' && (
                    <div onClick={() => handleRemove(id)} className="absolute top-2 right-0 rounded-full cursor-pointer p-3 bg-warning">
                        <RiDeleteBin6Line size={18} ></RiDeleteBin6Line>
                    </div>
                )
            }
        </div>
    );
};
export default Coffee