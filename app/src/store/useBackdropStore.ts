import {create} from "zustand";

interface BackdropType {
    backdrop: boolean,
    showBackdrop : ()=> void
    hideBackdrop : ()=> void
}

const useBackdropStore = create<BackdropType>((set)=>({
    backdrop: false,
    showBackdrop: ()=> set(()=> ({backdrop: true})),
    hideBackdrop: ()=> set(()=> ({backdrop: false}))
}))


export default {useBackdropStore}

