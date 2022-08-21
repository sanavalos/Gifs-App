import React, { useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const gif = e.target.gif.value;
    if (gif.length > 1) {
      setSearch(gif);
      e.target.reset();
      setError("");
    } else {
      setError("Search was too short!");
      setSearch("");
    }
  };

  return (
    <div>
      <section className="navbar-brand">
        <h1>
          <button className="home" onClick={(e) => handleReset(e)}>
            GIFS <small className="text-muted">App</small>
          </button>
        </h1>
        <nav className="d-flex justify-content-center flex-column">
          <form
            className="d-flex justify-content-center"
            onSubmit={(e) => handleSearch(e)}
          >
            <div className="btn-width d-flex justify-content-center">
              <input
                className="form-control form-control-lg"
                type="text"
                id="gif"
                placeholder="The longer the search the more accurate..."
              />
              <button type="submit" className="input-group-text btn-success">
                Search
              </button>
            </div>
          </form>
          <h2 className="d-flex justify-content-center mt-5">
            {error === "" ? search : error}
          </h2>
          {search !== "" ? (
            <ul className="pagination d-flex justify-content-center ">
              {page === 0 ? null : (
                <li className="page-item">
                  <button
                    className="page-link"
                    key="prev"
                    onClick={() => setPage(page - 1)}
                  >
                    Prev
                  </button>
                </li>
              )}
              {Array.from(Array(5), (e, i) => {
                return (
                  <li key={i + 1} className="page-item">
                    <button className="page-link" onClick={() => setPage(i)}>
                      {i + 1}
                    </button>
                  </li>
                );
              })}
              {page === 4 ? null : (
                <li className="page-item">
                  <button
                    className="page-link"
                    key="next"
                    onClick={() => setPage(page + 1)}
                  >
                    Next
                  </button>
                </li>
              )}
            </ul>
          ) : null}
        </nav>
        <Cards gifName={search} page={page} />
      </section>
    </div>
  );
}

export default App;
