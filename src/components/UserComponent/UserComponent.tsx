import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserTypeProps = {
    item:IUser
}
const UserComponent:FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            {item.firstName} {item.lastName}
        </div>
    );
};

export default UserComponent;