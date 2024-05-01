import { StateStorage, createJSONStorage } from "zustand/middleware";

const firebaseUrl =
    "https://zustand-storage-c8e21-default-rtdb.europe-west1.firebasedatabase.app/zustand";

const firebaseApi: StateStorage = {
    getItem: async function (name: string): Promise<string | null> {
        try {
            const data = await fetch(`${firebaseUrl}/${name}.json`).then(
                (res) => res.json()
            );
            console.log(data);

            return JSON.stringify(data);
        } catch (error) {
            throw error;
        }
    },
    setItem: async function (name: string, value: string): Promise<void> {
        await fetch(`${firebaseUrl}/${name}.json`, {
            method: "PUT",
            body: value,
        }).then((res) => res.json());

        console.count("setItem: ");
    },
    removeItem: function (name: string): void | Promise<void> {
        console.log("removeItem", name);
    },
};

export const firebaseStorage = createJSONStorage(() => firebaseApi);
