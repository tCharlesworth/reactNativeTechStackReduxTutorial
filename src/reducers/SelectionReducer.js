export default (state = null, action) => {
    console.log('reducing: ', action.payload);
    switch(action.type) {
        case 'SELECT_LIBRARY':
            return action.payload;
        default:
            return state;
    }
}