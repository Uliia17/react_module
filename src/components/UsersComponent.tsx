import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

const UsersComponent = () => {
    
    const [users, setUsers] = useState([]);//створює стан users, функція setUsers дозволяє змінювати його

    const arr:number[] = useMemo(() => {//використовується для мемоізації, щоб не повторювати обчислення при кожному виведенні
        return [11,22,33];
    },[])//означає, що значення буде обчислене один раз і не змінюватиметься
//не дає створювати масив при кожному рендері компонента
    console.log('users');// виводить "users" в консоль
    
    const foo = useCallback(() => {//мемоізує функцію, щоб вона не створювалася заново при кожному рендері
        console.log('test');//виводить "test" в консоль.
    }, []);
//передає функцію дочірнім компонентам і запобігає їх повторному рендеру
    useEffect(() => {//використовується для отримання даних
        fetch('https://jsonplaceholder.typicode.com/users')//виконує запит до API
                    .then(value => value.json())// перетворює відповідь на JSON-об'єкт
                    .then(value => {//оновлює стан списку користувачів
                        setUsers(value);
                    });
        return () => {//при виході зі сторінки зупиняється запит, очищаються дані
            console.log('unsubscribe');//показує, що компонент видалено
        }
    }, []);

    return (// передає функцію foo та масив arr в дочірній компонент
        <div>
users component
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;