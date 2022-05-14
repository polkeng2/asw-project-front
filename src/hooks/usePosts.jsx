import axios from 'axios';

const usePosts = () => {
    const getAllPosts = async () => {
        try {
            const result = await axios.get(`https://proyecto-asw-api.herokuapp.com/api/post/all?orderby=likes`);
            return result.posts;
        } catch (error) {
            console.log(error);
        }
            
        return { getAllPosts };
    };
};

export default usePosts;