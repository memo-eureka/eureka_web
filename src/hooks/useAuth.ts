import { useState } from "react";
import { signInWithGoogle } from "../auth/firebase";
import axios, { setAccessToken } from "../api/axios";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async () => {
        const idToken = await signInWithGoogle();
        const res = await axios.post("/auth/google", { idToken });
        const jwt = res.data.token;
        setAccessToken(jwt);
        setIsAuthenticated(true);
    };

    return { isAuthenticated, login };
};