import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// [1] Typed dispatch hook that knows about thunks
export const useAppDispatch: () => AppDispatch = useDispatch;

// [2] Typed selector hook that knows your RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
