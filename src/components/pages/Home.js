import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../http";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    http.get("/products").then((res) => {
      setProducts(res.data);
    });
  };

  const deleteProduct = (id) => {
    http.delete("/products/" + id).then((res) => {
      fetchProduct();
    });
  };

  return (
    <>
      <table className="table table-dark mt-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>
                  <img
                    width="50px"
                    src={`http://127.0.0.1:8000/${product.image}`}
                  />
                </td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={{ pathname: "/edit/product/" + product.id }}
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      deleteProduct(product.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
