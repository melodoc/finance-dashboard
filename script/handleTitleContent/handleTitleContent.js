const localStorageValueType = {
    IS_VISITED: 'isVisited'
};

function hasLocalStorageKey(key) {
    return localStorage.getItem(key);
}

window.onload = function () {
    const localStorageKey = localStorageValueType.IS_VISITED;
    localStorage.setItem(localStorageKey, true);
};

export function handleTitleContent(element) {
    const localStorageKey = localStorageValueType.IS_VISITED;
    if (hasLocalStorageKey(localStorageKey)) {
        element.textContent = 'Welcome back to the Finance Dashboard!';
    }
}
