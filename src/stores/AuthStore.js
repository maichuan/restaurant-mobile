import { observable, action } from 'mobx'
import { firebaseApp } from '../utils/firebase'

export class AuthStore {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable
    user = firebaseApp.auth().currentUser

    @action
    setUser = (user) => {
        this.user = user
    }
}