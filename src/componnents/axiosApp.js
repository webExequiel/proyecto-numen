import axios from "axios";

export const getData = async () => {
    const ENDPOINT = "http://localhost:3001/viandas",
        res = await axios.get(ENDPOINT);

    console.log(res);
    return res.data;
}

export const getCart = async () => {
    const ENDPOINT = "http://localhost:3001/cart",
        res = await axios.get(ENDPOINT);

    console.log(res);
    return res.data;
}

export const addItemToCart = async (data, isAlreadyInCart) => {
    const ENDPOINT = `http://localhost:3001/cart/${isAlreadyInCart ? data.id : ''}`
    const OPTIONS = {
        method: isAlreadyInCart ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        data: data
    }

    return (await axios(ENDPOINT, OPTIONS)).data;
}

export const updateCartData = async (data) => {
    const ENDPOINT = `http://localhost:3001/cart/${data.id}`
    const OPTIONS = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        data: JSON.stringify(data)
    }

    return (await axios(ENDPOINT, OPTIONS)).data
}

export const deleteCartData = async (data) => {
    const { name, id } = data;
    let isDeleteData = window.confirm(`Estas seguro que queres eliminar la vianda ${name}`);

    if (isDeleteData) {
        const ENDPOINT = `http://localhost:3001/cart${id}`
        const OPTIONS = {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        }

        return (await axios(ENDPOINT, OPTIONS)).data;
    }
}


/* correr: run npm apifake */