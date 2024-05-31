import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    "https://okzounnvdejvweamyzsd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rem91bm52ZGVqdndlYW15enNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMzU2MDYsImV4cCI6MjAzMjcxMTYwNn0.0gOgO3J5ybGbHANtLp9xe-QpmS-CL1EVxG1mcyBqHzw"
);

const Providers = Object.freeze({
    Discord: 'discord',
    Github: 'github',
    Google: 'google',
    Kakao: 'kakao',
    Notion: 'notion',
    Twitch: 'twitch',
    Zoom: 'zoom',
});

function App() {
    const [posts, setPosts] = useState([]);
    const [signIn, setSignIn] = useState(false);

    async function getPosts() {
        const { data } = await supabase.from('posts').select();
        setPosts(data);
    }

    async function checkSignIn() {
        const session = await supabase.auth.getSession();
        const isSignIn = !!session.data.session;

        setSignIn(isSignIn);
    }

    useEffect(() => {
        checkSignIn();
        getPosts();
    }, []);

    return (
        <div className="flex flex-col space-y-5 p-14">
            {signIn ? (
                <button type="button" onClick={async () => {
                    await supabase.auth.signOut();
                    await checkSignIn();
                }} className="btn btn-primary">로그아웃</button>
            ) : (
                <div className="flex space-x-4 w-full">
                    {
                        Object.keys(Providers).map((provider, index) => (
                            <button type="button" onClick={async () => {
                                await supabase.auth.signInWithOAuth({
                                    provider: provider
                                });
                                await checkSignIn();
                            }} className="btn btn-info" key={index}>{provider}로 로그인</button>
                        ))
                    }
                </div>
            )}
            <div className="grid grid-cols-4 gap-4 bg-white shadow-2xl p-5 rounded-2xl">
                {posts.map((post) => (
                    <div className="card bg-base-100 shadow-xl" key={post.id}>
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;