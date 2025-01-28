import {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {urls} from "../../../constants/urls.ts";

type userSliceType = {
    users: IUser[]
    user: IUser|null
    loadState: boolean
    }

const initialState: userSliceType = {users:[], user:null, loadState:false};

const loadUsers = createAsyncThunk('userSlice/loadUsers',
    async (_, thunkAPI) => {

    try {
        const users = await fetch(urls.users.allUsers)
            .then(value => value.json());
        // thunkAPI.dispatch(userSliceActions.changeLoadState(true));

        return thunkAPI.fulfillWithValue(users);
        // throw new Error();
    }catch (e) {
        return thunkAPI.rejectWithValue('error');
    }
            })

const loadUser = createAsyncThunk('userSlice/loadUser',
    async (id:string, thunkAPI) => {

        try {
            const user = await fetch(`${urls.users.allUsers}/${id}`)
                .then(value => value.json());
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true));

            return thunkAPI.fulfillWithValue(user);
            // throw new Error();
        }catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    })

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action:PayloadAction<boolean>) => {
state.loadState = action.payload;
        }
    },
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=> {
         state.users = action.payload
        })
        .addCase(loadUsers.rejected, (state, action)=> {
            console.log(state);
            console.log(action);
    }).addCase(loadUser.fulfilled, (state, action:PayloadAction<IUser>) => {
         state.user = action.payload;
        })
            .addMatcher(isFulfilled(loadUser, loadUsers), (state) => {
          state.loadState = true;
            })
            .addMatcher(isRejected(loadUsers, loadUser), (state) => {
                console.log(state);
            })
});

export const userSliceActions ={
    ...userSlice.actions, loadUsers, loadUser
}
