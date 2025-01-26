import {useContext} from "react";
import {ThemeContext} from "../context/MyContext";

const RightBranchA = () => {
    const {theme, changeTheme} = useContext(ThemeContext);

    return (
        <div style={{
            background: theme === "light" ? "pink" : "gray",
            color: theme === "light" ? "black" : "white", }}>
            Right branch A
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    );
};

export default RightBranchA;
