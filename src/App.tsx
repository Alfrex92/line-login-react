import "./App.css";
import liff from "@line/liff";
import { useEffect, useState } from "react";
import { initLineLogin, LineLoginContext, logoutLineLogin } from "./liff/liff";

function App() {
  const [liffInitialized, setLiffInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorInit, setErrorInit] = useState<any>(undefined);

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

  if (errorInit) {
    return <p>There was an error: {errorInit?.message}</p>;
  }
  const liffData = liffInitialized ? liff : undefined;

  if (liffData === undefined || loading) {
    return null;
  }

  if (liffData.isInClient?.()) {
    return (
      <LineLoginContext.Provider value={liffData}>
        <p>APPPP</p>
      </LineLoginContext.Provider>
    );
  }

  return <p>QR CODE PAGE</p>;
}
export default App;
