import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {IUserResponseModel} from "../models/IUserResponseModel.ts";
import {UserComponent} from "./UserComponent.tsx";
import {userService} from "../services/api.servise.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUser()
            .then(({users}: IUserResponseModel) => {
            setUsers(users);
            });
    }, []);

    return (
        <div>
            {users.map((user: IUser) => (
                <UserComponent key={user.id} user={user}/>
            ))}
        </div>
    );
}