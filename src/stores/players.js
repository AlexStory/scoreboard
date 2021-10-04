import { writable } from "svelte/store"

function createPlayers() {
    const { subscribe, set, update } = writable([])

    const addPlayer = player => update(players => [...players, player])

    return {
        subscribe,
        set,
        update,
        reset: () => set([]),
        addPlayer,
    }
}

export const players = createPlayers()

