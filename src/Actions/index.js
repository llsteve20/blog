import jsonPlaceholder from "../APIs/jsonPlaceholder";

export const fetchPosts = async () => {
    const result = await jsonPlaceholder.get('/posts');
    
    return {
        type: 'FETCH_POSTS',
        payload: result
    };
};
