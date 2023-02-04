const loggedInUser = (state='', action) => {
    switch (action.payload) {
        case "ACTIVE_USER":
           return state = action.payload
    
        default:
            return state;
    }
}
export default loggedInUser