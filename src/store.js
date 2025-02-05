import { create } from "zustand";

const useStore = create((set) => ({
    listPosts: [],
    user: null,
    savePosts: (posts) => savePosts(set, posts),
    saveUser: (user) => saveUser(set, user),
}))

const savePosts = (set, posts) => { // se puede omitir el SET pues ya lo maneja internamente zustand, pero en usetore es necesario enviarlo
    set({ listPosts: posts })
}
const saveUser = (set, user) => {
    set({ user: user })
}

export default useStore;