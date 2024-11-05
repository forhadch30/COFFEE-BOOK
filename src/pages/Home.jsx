import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
// import Coffees from "../components/Coffees";
import Heading from "../components/Heading";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div className="space-y-5">
            <Banner></Banner>
            <Heading title='Browes Coffees by Category' subTile='choose you desired coffee to browse through specific that fit in your tast'></Heading>
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
            {/* <Coffees></Coffees> */}
        </div>
    );
};

export default Home;