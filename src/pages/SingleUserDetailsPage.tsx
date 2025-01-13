import { useLocation } from "react-router-dom";
import { IUser } from "../models/IUser.ts";

const SingleUserDetailsPage = () => {
    const { state } = useLocation();
    console.log(state); // Додаємо для перевірки
    const user = state.item as IUser;
    return (
        <div>
            {user ? user.email : "Email не знайдено"}
        </div>
    );
};

export default SingleUserDetailsPage;
