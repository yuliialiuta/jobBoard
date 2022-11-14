import "./JobList.css";
import Img from "../pictures/hospital-image.png";
import { Link } from "react-router-dom";
import Rating from "./ELements/Rating";

export default function JobList() {
  return (
    <div className="JobList pt-5 px-16">
      <div className="job-box bg-white rounded-lg mt-5 mb-2 flex w-4.5/5">
        <img className="job-img rounded-full mx-5 my-10" src={Img} alt="job" />
        <div className="job-left flex-initial py-5 w-3/5">
          <Link to="/jobDetails" className="job-title font-bold text-xl ">
            Arbeitsmediziner-in / Betriebsmediziner/-in (m/w/d) oder einen
            Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
            Fachärztin für Arbeitsmedizin (m/w/d)
          </Link>
          <p className="job-address text-base">
            Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
          </p>
          <p className="job-location text-base">Viena, Austria</p>
        </div>
        <div className="job-right py-5 pl-5 flex">
          <Rating />
          {/* <div className="self-end px-3"> */}
          <a className="job-save fixed top-12.5 right-24" href="/">
            Save
          </a>
          <p className="job-date fixed top-32 right-24">Posted 2 days ago</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
