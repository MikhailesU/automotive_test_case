import { setWindowSize } from "./redux/Slice";
import useStore from "./redux/useStore";

export default function useScreenSize(sizes: number[]) {
    const store = useStore()
    const size = store.store.windowSize;
    window.onresize = () =>
        store.dispatch(setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        }))

    document.documentElement.style.setProperty("--screen-factor", (() => {
        let factor;
        for (let s of sizes){
            if (size.width <= s) {
                factor=((size.width / s).toFixed(4));
                break
            }
            else continue;
        }
        if (factor) return factor;
        else return (size.width / sizes[sizes.length-1]).toFixed(4);
    })().toString());
    return null
}
