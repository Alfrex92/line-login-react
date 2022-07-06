import liff from "@line/liff";
import { useContext, createContext } from "react";

export const LineLoginContext = createContext<any>(null);

function useLineLogin() {
  return useContext(LineLoginContext);
}

export default useLineLogin;

export const logoutLineLogin = () => {
  liff.logout();
  window.location.reload();
};

export async function initLineLogin(runApp: any) {
  liff.init(
    { liffId: "1657275559-28GdPGJ9" },
    () => {
      if (liff.isLoggedIn()) {
        runApp();
      } else {
        liff.login();
      }
    },
    (err) => console.error(err)
  );
}
