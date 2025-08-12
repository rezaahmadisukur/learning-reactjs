import axios from "axios";
import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";

const Success = () => {
    useEffect(() => {
        axios
            .get(`${API_URL}/keranjangs`)
            .then((response) => {
                response.data.map((item) => {
                    return axios
                        .delete(`${API_URL}/keranjangs/${item.id}`)
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="text-center mt-5">
            <Image src="assets/images/success.svg" width={500} />
            <h2>Sukses Pesan</h2>
            <p>Terimakasih Sudah Memesan</p>
            <Button className="btn-primary" as={Link} to="/">
                &laquo; Kembali
            </Button>
        </div>
    );
};

export default Success;
