import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import picture from "./download.jpg";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404,
  Service,
  CompanyHistory,
  Location,
} from "./pages";

//https://api.github.com/users/SharkyND

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then((jsondata) => {
        console.log(jsondata);
        setData(jsondata);
      })
      .then(() => setLoading(false))
      .catch(() => setError);
  }, [login]);

  if (loading) return <h1>Loading.....</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  if (data) {
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>{data.name}</h1>
                <p>{data.repos_url}</p>
                <img alt={data.login} src={data.avatar_url} />
              </>
            }
          />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about" element={<About />}>
            <Route path="/services" element={<Service />} />
            <Route path="/history" element={<CompanyHistory />} />
            <Route path="/location" element={<Location />} />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="*">
            <Whoops404 />
          </Route>
        </Routes>
      </>
    );
  } else {
    return (
      <div>
        <p>No User Avalible</p>
      </div>
    );
  }
}

export default App;
