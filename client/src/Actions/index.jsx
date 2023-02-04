export const loggedInUser = (action) => {
    return{
        type: "ACTIVE_USER",
        payload: action
    }
}