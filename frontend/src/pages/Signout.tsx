import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Signout = () => {
    const navigate = useNavigate();
    const [done, setDone] = useState(false);

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            setDone(true);
            localStorage.removeItem("token");
        }
    }, [token]);

    useEffect(() => {
        if (done) {
            // Navigate to the /signin page
            navigate("/signin");
        }
    }, [done, navigate]);

    return <div></div>;
};
