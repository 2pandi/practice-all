const posts = (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTS_SUCCESS':
            return action.payload.posts;
        default:
            return state;
    }
}

export default posts;