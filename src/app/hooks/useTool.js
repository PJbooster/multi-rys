import {ITEMS_NAV} from "../def";

export const useTool = (option) => {
    return ITEMS_NAV.find((it) => {return it.index === option});
}