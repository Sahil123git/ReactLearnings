import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link to="/">Go to Home page again</Link>
      <br />
      <a href="/">GO to Home page again but with loading headache</a>
    </>
  );
}

export default About;
