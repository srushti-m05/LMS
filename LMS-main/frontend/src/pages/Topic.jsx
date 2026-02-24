import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { subjects } from "../data/subjects";

export default function TopicList() {
  const { subject } = useParams();
  const current = subjects[subject];

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>{current.name} Topics</h2>

        {current.topics.map((t) => (
          <Link key={t} to={`/topic/${subject}/${t}`}>
            <div className="card">{t}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
