import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/authSlice";
import { logout } from "../app/authSlice";
import service from "../appwrite/cofig";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    service.account
      .get()
      .then((userData) => {
        dispatch(login(userData)); // ✅ redux me login
      })
      .catch(() => {
        dispatch(logout()); // ❌ agar session expire ya invalid
      });
  }, [dispatch]);

  return <>{children}</>;
}
