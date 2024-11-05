const Heading = ({ title, subTile }) => {
    return (
        <div className="text-center my-4">
            <h2 className="text-3xl font-thin">{title}</h2>
            <p className="text-xl font-thin text-gray-400">{subTile}</p>
        </div>
    );
};

export default Heading;