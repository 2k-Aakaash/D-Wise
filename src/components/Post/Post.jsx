import React from 'react';
import './Post.css';

const Post = ({ image, profilePhoto, title, userHandle, description, upvotes }) => {
    const defaultImage = '/assets/images/posts/default.png';
    const defaultProfilePhoto = '/assets/images/profile-images/default-profile.svg';
    const defaultUserHandle = '@user123';
    const defaultDescription = 'This is a default description for the post.';

    return (
        <div className="post">
            <img src={image || defaultImage} alt="Post Image" className="post-image" />
            <div className="post-content">
                <div className="post-header">
                    <div className="profile-photo-wrapper">
                        <img src={profilePhoto || defaultProfilePhoto} alt="Profile" className="profile-photo" />
                    </div>
                    <div className="post-info">
                        <h2>{title}</h2>
                        <p className="user-handle">{userHandle || defaultUserHandle}</p>
                    </div>
                </div>
                <p className="post-description">{description || defaultDescription}</p>
                <div className="post-upvotes">⬆️ {upvotes ? `${upvotes} Upvotes` : 'No Upvotes'}</div>
            </div>
        </div>
    );
};

export default Post;
