import axios from "axios";

export const getProducts = (data) => {
    axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
            data(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
