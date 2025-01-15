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
            {user.username}: {user.email}
            <button className={"border-2"} onClick={onButtonClick}>put on</button>
        </div>
    );
}
