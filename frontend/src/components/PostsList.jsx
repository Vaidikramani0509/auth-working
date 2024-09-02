// src/components/PostsList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/products/productsSlice';

const PostsList = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(null);

    const posts = useSelector((state) => state.posts.posts);
    const postStatus = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    const showListHandler = (id) => {
        setShow((prev) => (prev === id ? null : id))
    }
    return (
        <section>
            <h2 className='p-6'>Posts</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                {posts.map((post) => (
                    <div key={post.id} className='bg-white shadow-lg rounded-lg p-6'>
                        <ul className="space-y-2">
                            <li className="text-gray-500 font-medium">ID: {post.id}</li>
                            <li className="text-xl font-bold">{post.title}</li>
                            <button onClick={() => showListHandler(post.id)}>{show === post.id ? "Hide" : "Show"}</button>
                            {show === post.id &&
                                < li className="text-gray-700">{post.body}</li>
                            }

                        </ul>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default PostsList;
