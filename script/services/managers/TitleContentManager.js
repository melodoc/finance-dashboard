import { IS_VISITED_STORAGE_KEY } from "../../constants/localStorageKeys.js";

export class TitleContentManager {
    static updateContent(element) {
        const isVisited = localStorage.getItem(IS_VISITED_STORAGE_KEY);
  
        if (isVisited) {
            element.textContent = "Welcome back to the Finance Dashboard!";
        }
  
        localStorage.setItem(IS_VISITED_STORAGE_KEY, true);
    }
}
