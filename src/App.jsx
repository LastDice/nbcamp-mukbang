import { useEffect, useState } from 'react';
import supabase from './_lib/Supabase.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import MainPage from './pages/MainPage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import MyPage from './pages/MyPage.jsx';
import WritePostPage from './pages/WritePostPage.jsx';
import UpdatePostPage from './pages/UpdatePostPage.jsx';

function App() {
    const [posts, setPosts] = useState([]);
    const [signIn, setSignIn] = useState(false);

    async function getPosts() {
        setPosts(await supabase.getPosts());
    }

    async function updateSignIn() {
        setSignIn(await supabase.isSignIn());
    }

    useEffect(() => {
        updateSignIn();

        const fetchPosts = async () => {
            const { data, error } = await supabase.supabase.from('posts').select('*');

            if (error) {
                console.error('Error fetching posts:', error);
            } else {
                setPosts(data);
            }
        };

        fetchPosts();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <LoginPage signIn={signIn} setSignIn={setSignIn} updateSignIn={updateSignIn} posts={posts} />
                    }
                ></Route>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/detail/:id" element={<DetailPage />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
                <Route path="/write" element={<WritePostPage />}></Route>
                <Route path="/update/:id" element={<UpdatePostPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
