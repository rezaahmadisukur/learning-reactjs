import React from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalBayar from "./TotalBayar";

const Hasil = ({ shoppingCarts }) => {
    return (
        <Col md={3} mt="2">
            <h4>
                <strong>Daftar Kategori</strong>
            </h4>
            <hr />
            {shoppingCarts.length !== 0 && (
                <ListGroup variant="flush">
                    {shoppingCarts &&
                        shoppingCarts.map((cart) => (
                            <ListGroup.Item key={cart.id}>
                                <Row>
                                    <Col>
                                        <h4>
                                            <Badge pill bg="success">
                                                {cart.jumlah}
                                            </Badge>
                                        </h4>
                                    </Col>
                                    <Col>
                                        <h5>{cart.product.nama}</h5>
                                        <p>
                                            Rp.{" "}
                                            {numberWithCommas(
                                                cart.product.harga
                                            )}
                                        </p>
                                    </Col>
                                    <Col>
                                        <strong className="float-right">
                                            Rp.{" "}
                                            {numberWithCommas(cart.total_harga)}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
            )}
            <TotalBayar shoppingCarts={shoppingCarts} />
        </Col>
    );
};

export default Hasil;
