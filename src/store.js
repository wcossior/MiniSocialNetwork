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
    addingNextPosts: (posts) => addingNextPosts(set, posts),
}))

const addingNextPosts = (set, posts) => {
    set((state) => ({
        listPosts: [...state.listPostsCopy, ...posts],
        listPostsCopy: [...state.listPostsCopy, ...posts]
    }))
    // es necesario colocar 3 puntos en ambos para que se junten los elementos de ambos, ya que si coloco sin puntos posts sera algo asi [1,2,[3,4]]
}

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