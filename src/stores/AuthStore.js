import { observable, action } from "mobx";

export class AuthStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable
  auth = {};

  @observable
  restaurant = {};

  @observable
  user = { username: "guest" };

  @action
  setAuth = (auth) => {
    this.auth = auth;
  };

  @action
  setRestaurant = (restuarant) => {
    this.restaurant = restuarant || {};
  };

  @action
  setUser = (user) => {
    this.user = user;
  };

  @action
  removeAuth = () => {
    this.auth = {};
    this.user = { username: "guest" };
  };
}
