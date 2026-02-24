import Navbar from "../components/Navbar";

export default function Home() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const name = userData?.name || "";

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Welcome, {name}!</h2>
        <p>Select a subject and start learning.</p>
      </div>
    </>
  );
}
