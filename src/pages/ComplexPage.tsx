import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {postSliceActions} from "../redux/slices/postSlice/postSlice.ts";
import {commentSliceActions} from "../redux/slices/commentSlice/commentSlice.ts";

const ComplexPage = () => {

    const dispatch = useAppDispatch();
    const {commentSlice:{comments}, userSlice:{users}, postSlice:{posts}} = useAppSelector(state => state);

    useEffect(() => {
        if (!users.length){
            dispatch(userSliceActions.loadUsers())
        }
        if (!posts.length){
            dispatch(postSliceActions.loadPosts())
        }
        if (!comments.length){
            dispatch(commentSliceActions.loadComments())
        }
    }, []);
    return (
        <div>
            <h1>Complex Page</h1>

            <section>
                <h2>Users</h2>
                     <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
            </section>

            <section>
                <h2>Posts</h2>

                        {posts.map(post => (
                            <li key={post.id}>
                                <strong>{post.title}</strong>
                                <p>{post.body}</p>
                            </li>
                        ))}
            </section>

            <section>
                <h2>Comments</h2>
                {comments.map(comment => (
                            <li key={comment.id}>
                                <strong>{comment.name}</strong>: {comment.body}
                            </li>
                        ))}
            </section>
        </div>
    );
};

export default ComplexPage;