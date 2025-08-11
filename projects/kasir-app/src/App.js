import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Hasil, ListCategories, Menus, NavbarComponent } from "./components";
import { API_URL } from "./utils/constants";
import axios from "axios";

const App = () => {
    const [menus, setMenus] = useState([]);
    const [selectCategory, setSelectCategory] = useState("Cemilan");

    useEffect(() => {
        axios
            .get(`${API_URL}/products?category.nama=${selectCategory}`)
            .then((response) => {
                setMenus(response.data);
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
                                        <Menus menu={menu} key={menu.id} />
                                    ))}
                            </Row>
                        </Col>
                        <Hasil />
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
