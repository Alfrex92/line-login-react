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

export async function initLineLogin() {
  let accessToken;
  try {
    accessToken = liff.getAccessToken();
  } catch (e) {}

  if (accessToken === "") {
    try {
      await liff.init({
        liffId: "1657275559-28GdPGJ9",
      });
    } catch (e) {}
  }
}
