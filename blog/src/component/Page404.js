import { Link } from "react-router-dom";

function Page404() {
  return (
    <div>
      <h1>Error!! Landed to URL from another world</h1>
      <Link to="/">Want to go to Earth back!!</Link>
    </div>
  );
}

export default Page404;
