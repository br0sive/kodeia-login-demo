import React, { useState } from "react";
import { Login } from "./features/login/Login";
import "./App.css";
import "antd/dist/antd.min.css";
import { Spin, Tag } from "antd";

function App() {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 7000);
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
        style={{ paddingTop: 80 }}
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
      <div className="animate-pulse flex flex-col items-center h-full">
        <p style={{ fontSize: 14, fontWeight: "bold", paddingBottom: 10 }}>
          Presented By :
        </p>
        <a href="https://github.com/br0sive">
          <Tag
            style={{
              fontSize: 17,
              fontStyle: "bolder",
              fontFamily: "cursive",
              padding: 7,
            }}
            color={"purple"}
          >
            Sahan Amarasekara
          </Tag>
        </a>
        <Spin
          size="large"
          className="animate-bounce"
          style={{ paddingTop: "5rem" }}
        />
      </div>
    </div>
  );
}

export default App;
