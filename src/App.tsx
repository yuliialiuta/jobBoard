import "./App.css";
import JobList from "./Components/JobList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDetails from "./Components/JobDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<JobList />}></Route>
          <Route path="jobDetails" element={<JobDetails />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
