import React from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"about"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"projects"}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"agent"}
            >
              Agent
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"services"}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"listings"}
            >
              Listings
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"testimonials"}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
     
     
    </div>
  );
}
