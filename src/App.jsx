import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    "https://okzounnvdejvweamyzsd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rem91bm52ZGVqdndlYW15enNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMzU2MDYsImV4cCI6MjAzMjcxMTYwNn0.0gOgO3J5ybGbHANtLp9xe-QpmS-CL1EVxG1mcyBqHzw"
);

function App() {
    const [posts, setPosts] = useState([]);
    const [signIn, setSignIn] = useState(false);

    async function getPosts() {
        const { data } = await supabase.from('posts').select();
        setPosts(data);
    }

    async function signInWithGithub() {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
        });
    }

    async function checkSignIn() {
        const session = await supabase.auth.getSession();
        const isSignIn = !!session.data.session;

        setSignIn(isSignIn);
    }

    async function signOut() {
        await supabase.auth.signOut();
        checkSignIn();
    }

    useEffect(() => {
        getPosts();
        checkSignIn();
    }, []);

    return (
        <div className="flex flex-col space-y-5 p-14">
            {signIn ? (
                <button type="button" onClick={signOut}>로그아웃</button>
            ) : (
                <button type='button' onClick={signInWithGithub}>로그인</button>
            )}
            <ul>
                {posts.map((post) => (
                    <div key={post.id} className="flex flex-col p-4 bg-blue-300 rounded-2xl text-black space-y-2">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default App;