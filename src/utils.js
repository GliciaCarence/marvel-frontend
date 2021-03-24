import imageNotAvailable from "./assets/not-available.jpg";
import imageNotAvailableLarge from "./assets/not-available-large.jpg";

// strip htlm tags in strings
export const htmlTagRemove = (str) => {
    if (str) {
        return str.replace(/(<([^>]+)>)/gi, "");
    }
    return "";
};

// handle the cases when images are not available
export const handleImage = (image, largeImage) => {
    if (image) {
        if (
            image.indexOf("image_not_available") !== -1 ||
            image.indexOf(
                "i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"
            ) !== -1
        ) {
            return largeImage ? imageNotAvailableLarge : imageNotAvailable;
        }
        return image;
    }
    return largeImage ? imageNotAvailableLarge : imageNotAvailable;
};

// verify if an item is favorite or not
export const isFavorite = (itemId) => {
    // get a list of favorite items in local storage
    let favorites = localStorage.getItem("favorites");

    favorites = JSON.parse(favorites);

    let itemIsFav = false;

    if (favorites && favorites.length) {
        for (let i = 0; i < favorites.length; i++) {
            if (itemId === favorites[i].itemId) {
                itemIsFav = true;
                break;
            }
        }
    }

    return itemIsFav;
};

// this function is invoked when favorite icon is clicked
export const addOrRemoveFromFavorites = ({
    title,
    image,
    description,
    itemId,
    itemType,
}) => {
    let favorites = localStorage.getItem("favorites");

    favorites = JSON.parse(favorites);

    if (favorites && favorites.length) {
        let alreadyInFavoritesIndex = null;

        for (let i = 0; i < favorites.length; i++) {
            if (itemId === favorites[i].itemId) {
                alreadyInFavoritesIndex = i;
                break;
            }
        }

        if (alreadyInFavoritesIndex !== null) {
            favorites.splice(alreadyInFavoritesIndex, 1);
        } else {
            // add a new item
            favorites.push({
                title,
                image,
                description,
                itemId,
                itemType,
            });
        }
    } else {
        favorites = [
            {
                title,
                image,
                description,
                itemId,
                itemType,
            },
        ];
    }

    console.log(favorites);

    // to store an item in local storage we need to convert it into a string
    localStorage.setItem("favorites", JSON.stringify(favorites));
};
