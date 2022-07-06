import "./App.css";
import liff from "@line/liff";
import { useEffect, useState } from "react";
import { initLineLogin, logoutLineLogin } from "./liff/liff";

function App() {
  const [idToken, setIdToken] = useState<any>("");
  const [displayName, setDisplayName] = useState("");
  const [statusMessage, setStatusMessage] = useState<any>("");
  const [userId, setUserId] = useState("");

  const runApp = () => {
    const idToken = liff.getIDToken();
    setIdToken(idToken);
    liff
      .getProfile()
      .then((profile) => {
        console.log(profile);
        setDisplayName(profile.displayName);
        setStatusMessage(profile.statusMessage);
        setUserId(profile.userId);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    initLineLogin(runApp);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ textAlign: "center" }}>
          <h1>React with LINE Login test bot1</h1>
          <hr />
          <p
            style={{
              textAlign: "left",
              marginLeft: "20%",
              marginRight: "20%",
              wordBreak: "break-all",
            }}
          >
            <b>id token: </b> {idToken}
          </p>
          <p
            style={{
              textAlign: "left",
              marginLeft: "20%",
              marginRight: "20%",
              wordBreak: "break-all",
            }}
          >
            <b>display name: </b> {displayName}
          </p>
          <p
            style={{
              textAlign: "left",
              marginLeft: "20%",
              marginRight: "20%",
              wordBreak: "break-all",
            }}
          >
            <b>status message: </b> {statusMessage}
          </p>
          <p
            style={{
              textAlign: "left",
              marginLeft: "20%",
              marginRight: "20%",
              wordBreak: "break-all",
            }}
          >
            <b>user id: </b> {userId}
          </p>

          <button
            onClick={() => logoutLineLogin()}
            style={{ width: "100%", height: 30 }}
          >
            Logout
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
