import {useContext} from "react";
import {ThemeContext} from "../context/MyContext";

const LeftBranchA = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div style={{
            background: theme === "light" ? "pink" : "gray",
            color: theme === "light" ? "black" : "white", }}>
            Left branch A
        </div>
    );
};

export default LeftBranchA;
