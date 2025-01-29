import { useAppDispatch } from "../redux/hooks/useAppDispatch.tsx";
import { useAppSelector } from "../redux/hooks/useAppSelector.tsx";
import { postSliceActions } from "../redux/slices/postSlice/postSlice.ts";
import { useEffect } from "react";

const PostsPage = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postSlice.posts);

    useEffect(() => {
        dispatch(postSliceActions.loadPosts()); // Вызов асинхронного thunk
    }, [dispatch]);

    return (
        <div>
            {
                posts.map((post) => (
                    <div key={post.id}>{post.title}</div>
                )
            )
            }
        </div>
    );
};

export default PostsPage;
