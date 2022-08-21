import React, { useState, useEffect } from "react";

function Card({ title, id, image, url }) {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
   setTimeout(() => {
    copy === true && setCopy(false)
   }, 5000)
  }, [copy])
  
  return (
    <div>
      <section className="mx-4 my-2">
        <div className="card">
          <div className="card-body d-flex flex-row justify-content-center">
            <p className="card-text fw-bolder">{title}</p>
          </div>
          <div
            className="bg-image hover-overlay ripple rounded-0"
            data-mdb-ripple-color="light"
          >
            <div className="d-flex justify-content-center">
              <img alt={id} src={image}></img>
            </div>
          </div>
          <div>
            {copy === false ? (
              <button
                className="btn w-100 h-100 text-center"
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  setCopy(true);
                }}
              >
                Copy to clipboard
              </button>
            ) : (
              <button type="text" className="w-100 h-100 text-center fw-bolder bg-success">Check your clipboard!</button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
