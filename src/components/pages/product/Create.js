import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Create() {
  const [inputs, setInputs] = useState({});
  const [validationError, setValidationError] = useState({});
  const nnavigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value ? value : event.target.files[0],
    }));
  };

  // const submitForm = () => {
  //   console.log(inputs);
  //   http.post("/products", inputs).then((res) => {
  //     nnavigate("/");
  //   });
  // };

  const submitForm = async (e) => {
    console.log(inputs);

    await axios
      .post(`http://127.0.0.1:8000/api/products`, inputs)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        nnavigate("/");
      })
      .catch(({ response }) => {
        console.log(response);
        // if (response.status === 422) {
        //   setValidationError(response.data.errors);
        // } else {
        //   Swal.fire({
        //     text: response.data.message,
        //     icon: "error",
        //   });
        // }
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Create Product</h4>
              <hr />
              <div className="form-wrapper">
                {Object.keys(validationError).length > 0 && (
                  <div className="row">
                    <div className="col-12">
                      <div className="alert alert-danger">
                        <ul className="mb-0">
                          {Object.entries(validationError).map(
                            ([key, value]) => (
                              <li key={key}>{value}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <div className="row">
                  <div className="">
                    <div className="card p-2">
                      <label>Title</label>
                      <input
                        type="text"
                        className="form-control mb-2"
                        name="title"
                        value={inputs.title || ""}
                        onChange={handleChange}
                      />
                      <label>Description</label>
                      <input
                        type="text"
                        className="form-control mb-2"
                        name="description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                      />

                      <label>Image</label>
                      <input
                        type="file"
                        className="form-control mb-2"
                        name="image"
                        onChange={handleChange}
                      />

                      <button
                        type="button"
                        onClick={submitForm}
                        className="btn-info mt-2"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
