import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../../models/IPost.ts";
import {postService} from "../../../services/api.service.ts";

type postSliceType = {
    posts: IPost[]
}

const initialPostState:postSliceType = {posts:[]};

const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI) => {
            const posts = await postService.getAll();
            return thunkAPI.fulfillWithValue(posts);
    })

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialPostState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>)=> {
        state.posts = action.payload
    })
});

export const postSliceActions ={
    ...postSlice.actions, loadPosts
}