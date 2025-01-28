import React from "react";
import { IUser } from "../../models/IUser.ts";

type UserComponentProps = {
    item: IUser;
};

const UserComponent: React.FC<UserComponentProps> = ({ item }) => {
    return (
        <div>
            <h2>{item.name}</h2>
        </div>
    );
};

export default UserComponent;
