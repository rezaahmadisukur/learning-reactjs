import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Hasil, ListCategories, Menus, NavbarComponent } from "./components";
import { API_URL } from "./utils/constants";
import axios from "axios";
import Swal from "sweetalert2";

const App = () => {
    const [menus, setMenus] = useState([]);
    const [selectCategory, setSelectCategory] = useState("Makanan");
    const [shoppingCarts, setShoppingCarts] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/products?category.nama=${selectCategory}`)
            .then((response) => {
                setMenus(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get(`${API_URL}/keranjangs`)
            .then((response) => {
                setShoppingCarts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    const changeCategory = (value) => {
        setSelectCategory(value);
        setMenus([]);
        axios
            .get(`${API_URL}/products?category.nama=${value}`)
            .then((response) => {
                setMenus(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const enterShoppingCart = (value) => {
        axios
            .get(`${API_URL}/keranjangs?product.id=${value.id}`)
            .then((response) => {
                if (response.data.length === 0) {
                    const cart = {
                        jumlah: 1,
                        total_harga: value.harga,
                        product: value
                    };

                    axios
                        .post(`${API_URL}/keranjangs`, cart)
                        .then((response) => {
                            Swal.fire({
                                title: "Success !",
                                text: `success add to cart ${cart.product.nama}`,
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false
                            });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    const cart = {
                        jumlah: response.data[0].jumlah + 1,
                        total_harga: response.data[0].total_harga + value.harga,
                        product: value
                    };
                    axios
                        .put(
                            `${API_URL}/keranjangs/${response.data[0].id}`,
                            cart
                        )
                        .then((response) => {
                            Swal.fire({
                                title: "Success !",
                                text: `success add to cart ${cart.product.nama}`,
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="App">
            <NavbarComponent />
            <div className="mt-3">
                <Container fluid>
                    <Row>
                        <ListCategories
                            changeCategory={changeCategory}
                            selectCategory={selectCategory}
                        />
                        <Col>
                            <h4>
                                <strong>Daftar Produk</strong>
                            </h4>
                            <hr />
                            <Row>
                                {menus &&
                                    menus.map((menu) => (
                                        <Menus
                                            menu={menu}
                                            key={menu.id}
                                            enterShoppingCart={
                                                enterShoppingCart
                                            }
                                        />
                                    ))}
                            </Row>
                        </Col>
                        <Hasil shoppingCarts={shoppingCarts} />
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default App;

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             menus: []
//         };
//     }
//     componentDidMount() {
//         axios
//             // const API_URL = "http://localhost:4000/";
//             .get(`${API_URL}products`)
//             .then((res) => {
//                 const menus = res.data;
//                 this.setState({ menus });
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }
//     render() {
//         const { menus } = this.state;
//         return (
//             <div className="App">
//                 <NavbarComponent />
//                 <div className="mt-3">
//                     <Container fluid>
//                         <Row>
//                             <ListCategories />
//                             <Col>
//                                 <h4>
//                                     <strong>Daftar Produk</strong>
//                                 </h4>
//                                 <hr />
//                                 <Row>
//                                     {menus &&
//                                         menus.map((menu) => (
//                                             <Menus menu={menu} key={menu.id} />
//                                         ))}
//                                 </Row>
//                             </Col>
//                             <Hasil />
//                         </Row>
//                     </Container>
//                 </div>
//             </div>
//         );
//     }
// }
