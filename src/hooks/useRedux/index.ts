

import { useDispatch, useSelector, type TypedUseSelectorHook,} from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store"; 

export const useReduxDispatch = () => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
