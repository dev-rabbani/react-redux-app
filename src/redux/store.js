// external imports
import { createStore } from "redux";

import rootReducer from "./rootReducer";

// store
const store = createStore(rootReducer);
export default store;
