import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/events">Event</Link>
        <Link to="/contacts">contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Event]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Event]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();

  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}

export function CompanyHistory() {
  return (
    <div>
      <h2>Our Company History</h2>
    </div>
  );
}

export function Location() {
  return (
    <div>
      <h2>Our Location</h2>
    </div>
  );
}

export function Service() {
  return (
    <div>
      <h2>Our Service</h2>
    </div>
  );
}
