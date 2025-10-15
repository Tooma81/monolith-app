import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentCreate from './CommentCreate';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/posts');
                const posts = res.data;
                setPosts(posts);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPosts();
    }, []);

    console.log(posts);

    const postsForRender = posts.map(post => (
        <div className="card" style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentList postid={post.id} />
                <CommentCreate postid={post.id} />
            </div>
        </div>
    ));

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {postsForRender}
        </div>
    );
};

export default PostList;
