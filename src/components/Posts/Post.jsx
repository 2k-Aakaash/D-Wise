// src/components/Post/Post.jsx
import React from 'react';
import './Post.css';

const Post = ({ image, title, userHandle, description, upvotes }) => {
    const defaultImage = '/path/to/default/image.png';
    const defaultUserHandle = '@user123';
    const defaultDescription = 'This is a default description for the post.';

    return (
        <div className="post">
            <img src={image || defaultImage} alt="Post Image" className="post-image" />
            <div className="post-content">
                <h2>{title}</h2>
                <p className="user-handle">{userHandle || defaultUserHandle}</p>
                <p className="post-description">{description || defaultDescription}</p>
                <div className="post-upvotes">⬆️ {upvotes ? `${upvotes} Upvotes` : 'No Upvotes'}</div>
            </div>
        </div>
    );
};

export default Post;
