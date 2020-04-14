import { AuthStore } from "./AuthStore";
import { SpinnerStore } from "./SpinnerStore";

class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.spinnerStore = new SpinnerStore(this);
  }
}

export const rootStore = new RootStore();
