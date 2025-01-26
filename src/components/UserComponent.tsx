import {memo} from "react";

export const UserComponent = memo(() => {
    console.log('user')
    return (
        <div>
            user component
        </div>
    );
})
