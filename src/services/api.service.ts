import { IUser } from "../models/IUser.ts";
import { IPost } from "../models/IPost.ts";
import { urls } from "../constants/urls.ts";
import {IComment} from "../models/IComment.ts";

const createService = <T>(url: { all: string; byId: (id: number) => string }) => ({
    getAll: async (): Promise<T[]> => {
        return await fetch(url.all).then(value => value.json());
    },
    getById: async (id: number): Promise<T> => {
        return await fetch(url.byId(id)).then(value => value.json());
    }
});

export const userService = createService<IUser>(urls.users);
export const postService = createService<IPost>(urls.posts);
export const commentService = createService<IComment>(urls.comments);
