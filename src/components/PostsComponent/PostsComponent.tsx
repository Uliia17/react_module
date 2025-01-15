import { useEffect, useState } from "react";
import { getAll } from "../../services/api.service.ts";
import {IPost} from "../../models/IPost.ts";
import PostComponent from "../PostComponent/PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAll<{ posts: IPost[] }>('/posts')
            .then((value) => {
                setPosts(value.posts);
            })
    }, []);

    return (
        <div>
            {posts.map((post) => (<PostComponent key={post.id} item={post}/>))}
        </div>
    );
};

export default PostsComponent;