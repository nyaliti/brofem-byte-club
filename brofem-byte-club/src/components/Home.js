import React from "react";


const Home = () => {
    //Sample data for blog posts
    const posts = [
        { id: 1, title: 'First Post', content: 'This is the first blog post.'},
        { id: 2, title: 'Second Post', content: 'This is the second blog post.'},
        //Add more sample posts
    ];


    return (
        <div>
            <h2>Recentt Blog Posts</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    </div>
            ))}
        </div>
    );
};


export default Home;