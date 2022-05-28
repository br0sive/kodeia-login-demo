import background from "./../../img/bg-01.jpg";
import "./../../App.css";
import { useDispatch } from "react-redux";
import { setLoginResponse } from "./counterSlice";
import { useState } from "react";

export function Login() {
  const dispatch = useDispatch();
  const [uName, setUName] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div className="Login">
      <div
        className="App-login"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="Wrap p-t-30 p-b-50">
          <span className="Form-title p-b-41">Account Login</span>
          <form className="Form p-b-33 p-t-5">
            <div className="Wrap-input">
              <input
                className="Input"
                type="text"
                name="username"
                placeholder="User name"
                value={uName}
                onChange={(val) => {
                  setUName(val.target.value);
                }}
              ></input>
              <span className="Focus-input"></span>
            </div>
            <div className="Wrap-input">
              <input
                className="Input"
                type="password"
                name="pass"
                placeholder="Password"
                value={pw}
                onChange={(val) => {
                  setPw(val.target.value);
                }}
              ></input>
              <span className="Focus-input"></span>
            </div>
            <div className="App-login-form-btn">
              <button
                className="Form-btn"
                onClick={async (e) => {
                  e.preventDefault();
                  const res = await fetch("https://fetest.kodeia.com/api", {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      username: `${uName}`,
                      password: `${pw}`,
                    }),
                  });

                  const content = await res.json();
                  console.log(content);
                  if (content.success === "true") {
                    console.log("true");
                    dispatch(setLoginResponse({ id: content.data.id }));
                  } else {
                    // login failed
                  }
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
