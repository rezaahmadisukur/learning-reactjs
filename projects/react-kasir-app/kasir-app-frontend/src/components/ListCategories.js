import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, ListGroup } from "react-bootstrap";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUtensils,
    faCoffee,
    faCheese
} from "@fortawesome/free-solid-svg-icons";

const icon = ({ nama }) => {
    if (nama === "Makanan") {
        return <FontAwesomeIcon icon={faUtensils} className="me-2" />;
    } else if (nama === "Minuman") {
        return <FontAwesomeIcon icon={faCoffee} className="me-2" />;
    } else {
        return <FontAwesomeIcon icon={faCheese} className="me-2" />;
    }
};

const ListCategories = ({ changeCategory, selectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/categories`)
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Col md={2} mt="2">
            <h4>
                <strong>Daftar Kategori</strong>
            </h4>
            <hr />
            <ListGroup>
                {categories &&
                    categories.map((category) => (
                        <ListGroup.Item
                            key={category.id}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                changeCategory(category.nama);
                            }}
                            className={
                                selectCategory === category.nama &&
                                "category-active"
                            }
                        >
                            <h5 className="d-flex align-items-center gap-2">
                                <span>{icon(category)}</span>
                                {category.nama}
                            </h5>
                        </ListGroup.Item>
                    ))}
            </ListGroup>
        </Col>
    );
};

export default ListCategories;
