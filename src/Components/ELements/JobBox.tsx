import React from "react";
import Img from "../../pictures/hospital-image.png";
import Rating from "../ELements/Rating";
import { Link } from "react-router-dom";

export default function JobBox() {
  return (
    <div className="job-box bg-white rounded-lg mt-5 mb-2 flex w-4.5/5">
      <img className="job-img rounded-full mx-5 my-10" src={Img} alt="job" />
      <div className="job-left flex-initial py-5 w-3/5">
        <Link
          to="/jobDetails"
          className="job-title text-title font-bold text-xl "
        >
          Arbeitsmediziner-in / Betriebsmediziner/-in (m/w/d) oder einen
          Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
          Fachärztin für Arbeitsmedizin (m/w/d)
        </Link>
        <p className="job-address text-base text-details">
          Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
        </p>
        <p className="job-location text-base text-details">Viena, Austria</p>
      </div>
      <div className="job-right py-5 pl-5 flex">
        <Rating />
        <a className="job-save fixed top-12.5 right-24 " href="/">
          Save
        </a>
        <p className="job-date text-base fixed top-40 right-24 text-details">
          Posted 2 days ago
        </p>
      </div>
    </div>
  );
}
