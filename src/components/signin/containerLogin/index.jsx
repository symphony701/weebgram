import "./style.css";
import { FormLogin } from "../form";
import { Button } from "../button";
import { Link } from "react-router-dom";
export function Container() {
  return (
    <div className="container">
      <h1>Weebgram</h1>
      <h3>Sign In </h3>
      <FormLogin />
      <Button />
      <div className="option-register">
        <p>Don't have an account?</p>
        <Link to="/signup">
          <p className="signup">Sign Up</p>
        </Link>
      </div>
    </div>
  );
}
