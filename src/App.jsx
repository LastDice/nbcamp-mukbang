import { useEffect, useState } from 'react';
import Supabase, { SupabaseProviders } from './_lib/Supabase.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import MainPage from './pages/MainPage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import MyPage from './pages/MyPage.jsx';
import WriteReviewPage from './pages/WriteReviewPage.jsx';
import EditReviewPage from './pages/EditReviewPage.jsx';

const supabase = new Supabase();

function App() {
    const [posts, setPosts] = useState([]);
    const [signIn, setSignIn] = useState(false);

    async function getPosts() {
        setPosts(await supabase.getMainPosts());
    }

    async function updateSignIn() {
        setSignIn(await supabase.isSignIn());
    }

    useEffect(() => {
        updateSignIn();
        getPosts();
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
                <Route path="/write" element={<WriteReviewPage />}></Route>
                <Route path="/edit/:id" element={<EditReviewPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
