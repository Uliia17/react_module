import {FC, memo} from "react";

export const UserComponent: FC<{foo: () => void, arr: number[]}> =
    memo(({arr}) => {//визначає компонент, який отримує пропси: ф-цію та масив; використання memo для запобігання повторним рендерам
    console.log('user');//виводить "user"
    console.log(arr);//виводить масив чисел
    return (
        <div>
            user component
        </div>
    );
})
//повторно використовує компонент, якщо пропси такі самі