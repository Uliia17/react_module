import {useFetch} from "../hooks/useFetch";

type User = {
    id: number;
    name: string;
    email: string;
};

const UsersComponent = () => {
    const { data: users, loading, error } = useFetch<User[]>(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) return 'loading';
    if (error) return 'error';

    return (
        <div>
            {(
                users.map((user) => (
                    <div key={user.id}>{user.name}</div>
                ))
            )}
        </div>
    );
};

export default UsersComponent;

