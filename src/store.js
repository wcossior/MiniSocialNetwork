import { create } from "zustand";
import { getUser } from "./api/user";

const useStore = create((set) => ({
    listPosts: [],
    listPostsCopy: [],
    searching: true,
    user: null,
    savePosts: (posts) => savePosts(set, posts),
    saveFilteredPosts: (posts) => saveFilteredPosts(set, posts),
    saveUser: () => saveUser(set),
}))

const savePosts = (set, posts) => {
    set({ listPosts: posts, listPostsCopy: posts })
}

const saveFilteredPosts = (set, posts) => {
    set({ listPosts: posts })
}

const saveUser = async (set) => {
    try {
        const user = await getUser();
        set({
            user: user,
        })
    } catch (error) {
        set({
            user: null,
        })
    }
}

export default useStore;