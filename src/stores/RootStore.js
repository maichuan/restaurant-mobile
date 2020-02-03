import { AuthStore } from './AuthStore'

class RootStore {
    constructor() {
        this.authStore = new AuthStore(this)
    }
}

export const rootStore = new RootStore()