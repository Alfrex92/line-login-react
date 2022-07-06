import "./App.css";
import liff from "@line/liff";
import { useQuery } from "react-query";
import { initLineLogin, logoutLineLogin } from "./liff/liff";

function App() {
  const { isLoading, error } = useQuery("initLineLogin", initLineLogin);
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>There was an error:</p>;
  }

  if (!liff.isLoggedIn()) liff.login();
  return (
    <div>
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
