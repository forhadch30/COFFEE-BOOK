import toast from "react-hot-toast";

const getAllLocalStorage = () => {
    const all = localStorage.getItem('favorites');
    if (all) {
        const favorites = JSON.parse(all);
        return favorites;
    }
    else {
        console.log([])
        return []
    }
}

const addFavorite = coffee => {
    const favorites = getAllLocalStorage();
    const isExists = favorites.find(item => item.id == coffee.id)
    if (isExists) {
        return toast.error('Coffee Already Exists!');
    }
    favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Successfully added!')
}

const removeItems = id => {
    console.log(id)
    const favorites = getAllLocalStorage();
    const remaining = favorites.filter(items => items.id !== id);
    localStorage.setItem('favorites', JSON.stringify(remaining));
    toast.success('Successfully Removed!')
}

export { addFavorite, getAllLocalStorage, removeItems }