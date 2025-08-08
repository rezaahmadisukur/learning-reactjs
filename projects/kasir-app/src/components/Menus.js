import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils.js";

const Menus = ({ menu }) => {
    return (
        <Col md={4} xs={6} className="mb-4">
            <Card className="shadow" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={
                        "assets/images/" +
                        menu.category.nama.toLowerCase() +
                        "/" +
                        menu.gambar
                    }
                />
                <Card.Body>
                    <Card.Title>
                        {menu.nama} <strong>({menu.kode})</strong>
                    </Card.Title>
                    <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Menus;
