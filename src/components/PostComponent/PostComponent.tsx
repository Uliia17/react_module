import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type PostTypeProps = {
    item:IPost
}

const PostComponent:FC<PostTypeProps> = ({item}) => {
    return (
        <div>
            {item.title}
        </div>
    );
};

export default PostComponent;