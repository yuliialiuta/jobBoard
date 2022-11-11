import "./JobList.css";
import Img from "../pictures/hospital-image.png";

export default function JobList() {
  return (
    <div className="JobList pt-5 px-20">
      <div className="job-box bg-white rounded-lg mt-5 mb-2 mx-auto flex w-4.5/5">
        <img
          className="job-img rounded-full flex-none p-5"
          src={Img}
          alt="job"
        />
        <div className="job-left flex-initial py-5 w-3/5">
          <h3 className="job-title">
            Arbeitsmediziner-in / Betriebsmediziner/-in (m/w/d) oder einen
            Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
            Fachärztin für Arbeitsmedizin (m/w/d)
          </h3>
          <p className="job-address">
            Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
          </p>
          <p className="job-location">Viena, Austria</p>
        </div>
        <div className="job-right py-5 pl-5 flex">
          <a href="/" className="job-rate place-self-center">
            Stars
          </a>
          <div className="self-end">
            <a className="job-save" href="/">
              Save
            </a>
            <p className="job-date">Posted 2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
