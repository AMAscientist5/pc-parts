import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "./features/builder/builderSlice";

export default configureStore({
  reducer: {
    pc: builderReducer
  },
});


