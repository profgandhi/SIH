import React,{ useState, useLayoutEffect } from 'react';

const Diagnosis = () =>  {
    const CNN = async () => {
        const fileInput = document.querySelector("#Disease").files[0];
        if(fileInput){
          const formData = new FormData();
          formData.append("image", fileInput);
          const options = {
            method: "POST",
            body: formData,
          };
          var res = await fetch("http://127.0.0.1:5000/check_disease", options);
          console.log(res);
          var result = await res.json();
        }
        console.log(result);
    }
    return (
        <div
            className="card d-flex flex-column justify-content-evenly p-5"
            style={{ width: 500, minHeight: 600 }}
        >
            <h1>Upload image of affected area and describe your symptoms</h1>
            <div className="">
                <label className="form-label">Upload Image</label>
                <input
                    type="file"
                    className="form-control"
                    placeholder=""
                    id = "Disease"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                style={{ width: 100 }}
                onClick={CNN}
            >
                Submit
            </button>
        </div>
    )
}
export default Diagnosis;