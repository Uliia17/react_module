import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type PropsType = {item:IUser}

const UserComponent:FC<PropsType> = ({item}) => {
    return (
        <div>
            <div>{item.firstName} {item.lastName}</div>
        </div>
    );
};

export default UserComponent;