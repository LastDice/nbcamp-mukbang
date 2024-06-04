import { useEffect, useState } from 'react';
import Supabase from './_lib/Supabase.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import MainPage from './pages/MainPage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import MyPage from './pages/MyPage.jsx';
import WriteReviewPage from './pages/WriteReviewPage.jsx';
import EditReviewPage from './pages/EditReviewPage.jsx';
import WritePage from "./_example/WritePage.jsx";

const supabase = new Supabase();

function App() {
    const [signIn, setSignIn] = useState(false);

    async function updateSignIn() {
        setSignIn(await supabase.isSignIn());
    }

    useEffect(() => {
        updateSignIn();
    }, []);

    return (
<<<<<<< HEAD
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <LoginPage signIn={signIn} setSignIn={setSignIn} updateSignIn={updateSignIn} posts={posts} />
                    }
                ></Route>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/detail" element={<DetailPage />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
                <Route path="/write" element={<WriteReviewPage />}></Route>
                <Route path="/edit" element={<EditReviewPage />}></Route>
            </Routes>
        </BrowserRouter>
=======
        // <BrowserRouter>
        //     <Routes>
        //         <Route
        //             path="/login"
        //             element={
        //                 <LoginPage signIn={signIn} setSignIn={setSignIn} updateSignIn={updateSignIn} posts={posts} />
        //             }
        //         ></Route>
        //         <Route path="/" element={<MainPage />} />
        //         <Route path="/detail/:id" element={<DetailPage />} />
        //         <Route path="/mypage" element={<MyPage />} />
        //         <Route path="/write/:id" element={<WriteReviewPage />} />
        //         <Route path="/edit/:id" element={<EditReviewPage />} />
        //     </Routes>
        // </BrowserRouter>
        <WritePage />
>>>>>>> eddbd90cd7b2a85e8ec7d2f374b69b02d040a95d
    );
}

export default App;
