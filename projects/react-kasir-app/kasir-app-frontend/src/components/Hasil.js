import React, { useState } from "react";
import { Badge, Card, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalBayar from "./TotalBayar";
import { ModalKeranjang } from "../components";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../utils/constants";

const Hasil = ({ shoppingCarts }) => {
    const [detailCart, setDetailCart] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [jumlah, setJumlah] = useState(0);
    const [keterangan, setKeterangan] = useState("");
    const [totalHarga, setTotalHarga] = useState(0);

    const handleShow = (cart) => {
        setShowModal(true);
        setDetailCart(cart);
        setJumlah(cart.jumlah);
        setKeterangan(cart.keterangan);
        setTotalHarga(cart.total_harga);
    };
    const handleClose = () => setShowModal(false);

    const tambah = () => {
        setJumlah(jumlah + 1);
        setTotalHarga(detailCart.product.harga * (jumlah + 1));
    };

    const kurang = () => {
        if (jumlah !== 1) {
            setJumlah(jumlah - 1);
            setTotalHarga(detailCart.product.harga * (jumlah - 1));
        }
    };

    const changeHandler = (event) => {
        setKeterangan(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        handleClose();

        const data = {
            jumlah: jumlah,
            total_harga: totalHarga,
            product: detailCart.product,
            keterangan: keterangan
        };
        axios
            .put(`${API_URL}/keranjangs/${detailCart.id}`, data)
            .then((response) => {
                Swal.fire({
                    title: "Success Updated",
                    text: `success update to cart ${data.product.nama}`,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const hapusPesanan = (id) => {
        handleClose();
        axios
            .delete(`${API_URL}/keranjangs/${id}`)
            .then((response) => {
                Swal.fire({
                    title: "Success Deleted",
                    text: `success delete from cart ${detailCart.product.nama}`,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Col md={3} mt="2">
            <h4>
                <strong>Daftar Kategori</strong>
            </h4>
            <hr />
            {shoppingCarts.length !== 0 && (
                <Card className="overflow-auto hasil">
                    <ListGroup variant="flush">
                        {shoppingCarts &&
                            shoppingCarts.map((cart) => (
                                <ListGroup.Item
                                    key={cart.id}
                                    onClick={() => handleShow(cart)}
                                >
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
                                                {numberWithCommas(
                                                    cart.total_harga
                                                )}
                                            </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        <ModalKeranjang
                            showModal={showModal}
                            handleClose={handleClose}
                            detailCart={detailCart}
                            keterangan={keterangan}
                            totalHarga={totalHarga}
                            jumlah={jumlah}
                            tambah={tambah}
                            kurang={kurang}
                            changeHandler={changeHandler}
                            handleSubmit={handleSubmit}
                            hapusPesanan={hapusPesanan}
                        />
                    </ListGroup>
                </Card>
            )}
            <TotalBayar shoppingCarts={shoppingCarts} />
        </Col>
    );
};

export default Hasil;
