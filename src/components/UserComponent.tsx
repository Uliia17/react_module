import {useNavigate} from "react-router";
import {FC} from "react";
import {IUser} from "../models/IUser.ts";

type Props = {
    user: IUser
}

export const UserComponent:FC<Props> = ({user}) => {
    const navigate = useNavigate(); // Виклик useNavigate в компоненті

    const onButtonClick = () => {
        navigate('/users/' + user.id + '/carts');
    }

    return (
        <div>
            <h3 className="font-bold">{user.username}</h3>
            <p>Email: <span>{user.email}</span></p>
            <button className="mt-2 px-4 bg-gray-300" onClick={onButtonClick}>put on</button>
        </div>
    );
}
