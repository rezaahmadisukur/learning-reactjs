import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/constants";

const TotalBayar = ({ shoppingCarts }) => {
    const submitTotalBayar = (totalBayar) => {
        const pesanan = {
            total_bayar: totalBayar,
            menus: shoppingCarts
        };
        axios
            .post(`${API_URL}/pesanans`, pesanan)
            .then((response) => {
                window.location.href = "/success";
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const totalBayar = shoppingCarts.reduce((result, item) => {
        return result + item.total_harga;
    }, 0);

    return (
        <>
            {/* Web */}
            <div className="fixed-bottom d-none d-md-block">
                <Row>
                    <Col md={{ span: 3, offset: 9 }} className="bg-white p-3">
                        <h4>
                            Total Harga:{" "}
                            <strong className="float-end me-2">
                                Rp {numberWithCommas(totalBayar)}
                            </strong>
                        </h4>
                        <Button
                            className="btn-primary w-100 mx-2 my-2 d-flex gap-2"
                            size="lg"
                            onClick={() => submitTotalBayar(totalBayar)}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <strong>BAYAR</strong>
                        </Button>
                    </Col>
                </Row>
            </div>
            {/* Mobile */}
            <div className="d-sm-block d-md-none">
                <Row>
                    <Col md={{ span: 3, offset: 9 }} className="bg-white p-3">
                        <h4>
                            Total Harga:{" "}
                            <strong className="float-end me-2">
                                Rp {numberWithCommas(totalBayar)}
                            </strong>
                        </h4>
                        <Button
                            className="btn-primary w-100 mx-2 my-2 d-flex gap-2"
                            size="lg"
                            onClick={() => submitTotalBayar(totalBayar)}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <strong>BAYAR</strong>
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default TotalBayar;
