import axios from 'axios'

const fetchPostsSuccess = posts => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: { posts }
});

export const fetchPosts = () => {
    return async dispatch => {
        try {
            let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch(fetchPostsSuccess(posts.data.splice(0, 5)))
        }
        catch(e){
            console.log(e)
        }
    }
}