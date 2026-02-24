import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { topics } from "../data/topics";

export default function TopicPage() {
  const { subject, topic } = useParams();
  const data = topics[subject][topic];

  return (
  <>
  <Navbar />
  <div className="topic-container">
    <h2>{data.title}</h2>

    <p className="topic-notes">{data.notes}</p>

    <h3>Video</h3>
    <iframe
      width="100%"
      height="420"
      src={data.video}
      title="Video"
      allowFullScreen
    />
  </div>
</>

);
}