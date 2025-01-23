import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginPage = () => {

    useEffect(() => {// хук виконує дію логінації
        login({// передає дані, які взяли з https://dummyjson.com/
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    }, []);

    return (
        <>
            Login page
        </>
    );
};