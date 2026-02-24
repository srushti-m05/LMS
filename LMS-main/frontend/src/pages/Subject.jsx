import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { subjects } from "../data/subjects";

export default function SubjectList() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Subjects</h2>

        {Object.keys(subjects).map((key) => (
          <Link key={key} to={`/topics/${key}`}>
            <div className="card">{subjects[key].name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
