import { useAppDispatch } from "../redux/hooks/useAppDispatch.tsx";
import { useAppSelector } from "../redux/hooks/useAppSelector.tsx";
import { useEffect } from "react";
import { commentSliceActions } from "../redux/slices/commentSlice/commentSlice.ts";
import { IComment } from "../models/IComment.ts";

const CommentsPage = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(state => state.commentSlice.comments);

    useEffect(() => {
        dispatch(commentSliceActions.loadComments());
    }, [dispatch]);

    return (
        <div>
            {
                comments.map((comment: IComment) => (
                    <div key={comment.id}>{comment.name}</div>
                )
            )}
        </div>
    );
};

export default CommentsPage;
