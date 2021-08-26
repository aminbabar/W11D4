

const myMiddleware = (store) => {
    return (next) => {
        return(action) => {
            // debugger;
            if (typeof action === "function") {
                return action(store.dispatch, store.getState);

            }

            return next(action);
        }
    }
}


export default myMiddleware;