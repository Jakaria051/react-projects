import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Create from "./components/pages/product/Create";
import Edit from "./components/pages/product/Edit";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="navbar-brand" href="#">
              Basic Crud App
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/create/product"} className="nav-link">
              Create
            </Link>
          </li>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create/product" element={<Create />} />
          <Route path="/edit/product/:id" element={<Edit />} />
        </Routes>
      </div>

      {/* <Navbar bg="primary">
        <Container>
          <Link to={"/"} classNameName="navbar-brand text-white">
            Basic Crud App
          </Link>
        </Container>
      </Navbar>

      <Container classNameName="mt-5">
        <Row>
          <Col md={12}>
            <Routes>
              <Route path="/product/create" element={<CreateProduct />} />
              <Route path="/product/edit/:id" element={<EditProduct />} />
              <Route exact path="/" element={<ProductList />} />
            </Routes>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default App;
