import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/sesion.storage";
import { firebaseStorage } from "../storages/firebase.storage";
// import { logger } from "../middlewares/logger.middleware";

interface PersonState {
    firstName: string;
    lastName: string;
}

interface Actions {
    setFirstName: (value: string) => void;
    setlastName: (value: string) => void;
}

type State = PersonState & Actions;

const storeAPI: StateCreator<State, [["zustand/devtools", never]]> = (set) => ({
    firstName: "",
    lastName: "",

    setFirstName: (value: string) =>
        set(() => ({ firstName: value }), false, "setFirstName"),
    setlastName: (value: string) =>
        set(() => ({ lastName: value }), false, "setlastName"),
});

export const usePersonStore = create<PersonState & Actions>()(
    // logger(
    devtools(
        persist(storeAPI, {
            name: "person-storage",
            storage: customSessionStorage,
            // storage: firebaseStorage,
        })
    )
    // )
);
