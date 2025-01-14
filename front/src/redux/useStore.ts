import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootState, TypedDispatch } from "./redux"

export default function useStore () {
    const typedSelector: TypedUseSelectorHook<RootState> = useSelector
    const store = typedSelector(state => state.global_store)
    const useTypedDispatch = () => useDispatch<TypedDispatch>()
    const dispatch = useTypedDispatch()
    return {store: store, dispatch: dispatch}
}

