import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () => {

    useEffect(() => {// хук, який отримує дані із сервера (отримуємо список продуктів)
        loadAuthProducts().then(products => {// функція, яка виконує запит на отримання продуктів для авторизованих користувачей
            console.log(products)
        }).catch(reason => {// необхідно, якщо виникає помилка
            console.log(reason);
            refresh()// функція, яка оновлює токен
                .then(() => loadAuthProducts())// повертає проміс, якщо запит успішний, то отримаємо продукти
                .then(value => console.log(value))
        });
    }, []);

    return (
        <>
            AuthResources page
        </>
    );
};
