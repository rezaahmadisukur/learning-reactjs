import React from "react";
import { Home, Success } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { NavbarComponent } from "./components";

const App = () => {
    return (
        <Router>
            <NavbarComponent />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </main>
        </Router>
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
