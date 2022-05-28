import React, { useEffect, useState } from "react";
import { Login } from "./features/login/Login";
import "./App.css";
import loading from "./img/load.gif";
import { useSelector } from "react-redux";

function App() {
  const [loader, setLoader] = useState(true);
  const loginRes = useSelector((state: any) => state.counter.loginResponse);

  setTimeout(() => {
    setLoader(false);
  }, 7000);
  useEffect(() => {
    console.log({ loginRes });
  }, [loginRes]);

  if (loginRes) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-screen">
        <h1
          style={{
            fontSize: 30,
            color: "green",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          {loginRes.id}
        </h1>
      </div>
    );
  }
  if (!loader) {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }

  return (
    <div className="wave-bg flex flex-col items-center justify-center min-h-screen w-screen">
      <div
        id="test"
        className="animate-pulse flex flex-col items-center h-full m-5"
        style={{ paddingTop: 70 }}
      >
        <h1
          style={{
            fontSize: 50,
            color: "#143273",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          Welcome to my Login Demo
        </h1>
      </div>
      <div className="flex flex-col items-center h-full">
        <p style={{ fontSize: 14, fontWeight: "bold", paddingBottom: 1 }}>
          Presented By :
        </p>
        <a href="https://github.com/br0sive">
          <p
            style={{
              fontSize: 17,
              fontStyle: "bolder",
              fontFamily: "cursive",
              paddingBottom: 20,
            }}
            color={"purple"}
          >
            Sahan Amarasekara
          </p>
        </a>
        <div>
          <img
            style={{ height: 50, paddingTop: 20 }}
            src={loading}
            alt="BigCo Inc. logo"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
