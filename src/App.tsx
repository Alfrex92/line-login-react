import "./App.css";
import liff from "@line/liff";
import { useEffect, useState } from "react";
import { initLineLogin, logoutLineLogin } from "./liff/liff";

function App() {
  const [liffInitialized, setLiffInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorInit, setErrorInit] = useState<any>(undefined);
  console.log("loading", loading);

  useEffect(() => {
    async function initializer() {
      setLoading(true);
      try {
        await initLineLogin();
        setLiffInitialized(true);
      } catch (e) {
        setErrorInit(e);
        console.error("There was an error when trying to init Liff", e);
      } finally {
        setLoading(false);
      }
    }

    initializer();
  }, []);

  console.log("liffInitialized", liffInitialized);

  if (errorInit) {
    return <p>There was an error: {errorInit?.message}</p>;
  }
  if (loading) {
    return <p>Loading</p>;
  }
  if (!liff.isLoggedIn()) liff.login();
  return (
    <div>
      {" "}
      <p>app bitch</p>
      <button
        onClick={() => logoutLineLogin()}
        style={{ width: "100%", height: 30 }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
