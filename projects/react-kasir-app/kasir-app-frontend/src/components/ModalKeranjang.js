import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFloppyDisk,
    faMinus,
    faPlus,
    faTrash
} from "@fortawesome/free-solid-svg-icons";

const ModalKeranjang = ({
    showModal,
    handleClose,
    detailCart,
    keterangan,
    jumlah,
    tambah,
    kurang,
    changeHandler,
    handleSubmit,
    totalHarga,
    hapusPesanan
}) => {
    if (detailCart) {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>{detailCart.product.nama}</h4>
                        <b>( {numberWithCommas(detailCart.product.harga)} )</b>
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Total Harga</Form.Label>
                            <Form.Control
                                type="number"
                                readOnly
                                placeholder={
                                    "Rp " + numberWithCommas(totalHarga)
                                }
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    backgroundColor: "#f2f2f2   ",
                                    color: "#000"
                                }}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Jumlah : </Form.Label>
                            <div className="d-flex gap-3 align-items-center">
                                <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() => kurang()}
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </Button>
                                <span>
                                    <b>{jumlah}</b>
                                </span>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() => tambah()}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                            </div>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Keterangan</Form.Label>
                            <Form.Control
                                as={"textarea"}
                                rows={3}
                                name="keterangan"
                                placeholder="Contoh: Pedas, Nasi Setengah"
                                value={keterangan}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px"
                            }}
                            onClick={() => hapusPesanan(detailCart.id)}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                            Hapus pesanan
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px"
                            }}
                        >
                            <FontAwesomeIcon icon={faFloppyDisk} />
                            Simpan pesanan
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    } else {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Kosong</Modal.Title>
                </Modal.Header>
                <Modal.Body>Kosong</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default ModalKeranjang;
