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

const liffId: string = process.env.REACT_APP_MY_LIFF_ID ?? "";

export async function initLineLogin() {
  try {
    await liff.init({
      liffId,
    });
  } catch (e) {}
}
