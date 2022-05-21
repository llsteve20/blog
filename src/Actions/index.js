import _ from "lodash";
import jsonPlaceholder from "../APIs/jsonPlaceholder";

const fecthPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

       _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(e => dispatch(fetchUser(e)))
        .value();
};

const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
    
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
};

const fetchUser = id => async dispatch =>  {
        const response = await jsonPlaceholder.get(`/users/${id}`);
    
        dispatch({type:'FETCH_USER', payload: response.data})
};


// const fetchUser = id => dispatch =>  _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type:'FETCH_USER', payload: response.data})
// });

export {fetchPosts, fetchUser, fecthPostsAndUsers};