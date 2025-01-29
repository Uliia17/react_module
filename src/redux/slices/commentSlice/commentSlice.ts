import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../../../models/IComment.ts";
import { commentService } from "../../../services/api.service.ts";

type commentSliceType = {
    comments: IComment[];
};

const initialCommentState: commentSliceType = { comments: [] };

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) => {
    const comments = await commentService.getAll();
    console.log(comments);
    return thunkAPI.fulfillWithValue(comments);
});

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initialCommentState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.comments = action.payload;
    })
});

export const commentSliceActions = {
    ...commentSlice.actions, loadComments
};

