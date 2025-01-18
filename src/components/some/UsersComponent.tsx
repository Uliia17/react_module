import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getAllUsers} from "../../services/api.service.ts";
import UserComponent from "../user/UserComponent.tsx";
import {IUser} from "../../models/IUser.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    
    const [query] = useSearchParams();
    useEffect(() => {
    getAllUsers(query.get('pg') || '')
        .then(value => setUsers(value.users));
    }, [query]);

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }
        </div>
    );
};
