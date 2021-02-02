import React from "react";

export default function Login() {
  return (
    <div className="login-wrapper">
      <form>
        <label>
          User: <input type="text" />
        </label>
        <br></br>
        <label>
          Pin: <input type="password" />
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
