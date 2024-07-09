import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './MainContent.css';

const MainContent = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Fetch posts from an API or use static data
        fetch('/path/to/posts/api')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(() => setError(true));
    }, []);

    const samplePosts = [
        {
            image: 'assets/images/posts/ml.png',
            // profilePhoto: '/assets/images/profiles/johndoe.png',
            title: 'Introduction to Machine Learning',
            userHandle: '@JohnDoe',
            description: 'A beginner-friendly guide to understanding the basics of machine learning and its applications.',
            upvotes: '52.2K',
        },
        {
            image: 'assets/images/posts/time.png',
            // profilePhoto: '/assets/images/profiles/janedoe.png',
            title: 'Time Management Tips',
            userHandle: '@JaneDoe',
            description: 'Learn how to manage your time effectively with these practical tips and tricks.',
            upvotes: '34.5K',
        },
        {
            image: 'assets/images/posts/gta vi.png',
            title: 'GTA VI - Trailer Out now - Coming Summer 2025!',
            profilePhoto: 'assets/images/profile-images/rockstar.svg',
            userHandle: '@Rockstar Games',
            description: 'Grand Theft Auto VI is an upcoming action-adventure game in development by Rockstar Games. It is due to be the eighth main Grand Theft Auto game, following Grand Theft Auto V (2013), and the sixteenth entry overall.',
            upvotes: '199M',
        },
        {
            image: 'assets/images/posts/2k.png',
            title: '2K Aakaash Gaming for GTA V Cinematics',
            profilePhoto: 'assets/images/profile-images/2k-logo.jpg',
            userHandle: '@2K Aakaash Gaming',
            description: '2K Aakaash Gaming is a Professional PC Gaming channel who uploads GTA V and Freefire Videos and quality content.',
            upvotes: '259.7K',
        },
        // Add more sample posts as needed
    ];

    return (
        <div className="main-content">
            <div className="events">
                <div className="event-card join">Global Event from D-Wise! <button className="event-button join">Join</button></div>
                <div className="event-card look">This week at D-Wise <button className="event-button look">Look</button></div>
            </div>
            <h2>Feed</h2>
            <div className="categories">
                <button className="category">Art</button>
                <button className="category">Music</button>
                <button className="category">Collection</button>
                <button className="category">Games</button>
                {/* Add more categories as needed */}
            </div>
            <button className="create-post">Create Post</button>
            <div className="posts">
                {(error ? samplePosts : posts).map((post, index) => (
                    <Post
                        key={index}
                        image={post.image}
                        profilePhoto={post.profilePhoto}
                        title={post.title}
                        userHandle={post.userHandle}
                        description={post.description}
                        upvotes={post.upvotes}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainContent;
