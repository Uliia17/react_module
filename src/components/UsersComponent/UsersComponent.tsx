import { useEffect, useState } from "react";
import UserComponent from "../UserComponent/UserComponent.tsx";
import { IUser } from "../../models/IUser.ts";
import { getAll } from "../../services/api.service.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getAll<{ users: IUser[] }>('/users')
            .then((value) => {
                setUsers(value.users);
            })
    }, []);

    return (
        <div>
            {users.map((user) => (<UserComponent key={user.id} item={user} />))}
        </div>
    );
};

export default UsersComponent;

