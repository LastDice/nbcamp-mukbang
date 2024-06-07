import React, { useState, useEffect } from 'react';
import MyPageModal from '../components/MyPageModal';
import Header from '../components/Header';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
    'https://okzounnvdejvweamyzsd.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rem91bm52ZGVqdndlYW15enNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMzU2MDYsImV4cCI6MjAzMjcxMTYwNn0.0gOgO3J5ybGbHANtLp9xe-QpmS-CL1EVxG1mcyBqHzw'
);

const extractImageUrl = (content) => {
    const imageUrlMatch = content.match(/!\[.*?]\((.*?)\)/);
    return imageUrlMatch[1] ? imageUrlMatch[1] : '/img/mukbang.png';
};

export default function MyPage() {
    const [showModal, setShowModal] = useState(false);
    const [profileImage, setProfileImage] = useState(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    );
    const [nickname, setNickname] = useState('');
    const [description, setDescription] = useState('');
    const [cards, setCards] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    const navigate = useNavigate();

    const handleCreateClick = (id) => {
        navigate(`/detail/${id}`);
    };

    const handleSaveChanges = (image, nick, desc) => {
        setProfileImage(image);
        setNickname(nick);
        setDescription(desc);
    };

    const updateProfile = async (nickname, description, avatarurl) => {
        try {
            if (!supabase) {
                console.error('Supabase is not initialized');
                return { success: false, message: 'Supabase is not initialized' };
            }

            const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
            if (sessionError) {
                console.error('User is not authenticated');
                return { success: false, message: 'User is not authenticated' };
            }
            console.log(sessionData);
            const userId = sessionData.session.user.id;

            const { error } = await supabase
                .from('profiles')
                .update({ nickname: nickname, description: description, avatarurl: avatarurl })
                .eq('id', userId);

            if (error) {
                console.error('Error updating profile:', error);
                return { success: false, message: error.message };
            } else {
                return { success: true, message: 'Profile updated successfully' };
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            return { success: false, message: error.message };
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 게시물 데이터 가져오기
                const { data: postData, error: postError } = await supabase
                    .from('posts')
                    .select('post_id, title, content, author_uuid');

                if (postError) {
                    console.error('Error fetching data:', postError);
                } else {
                    // 현재 사용자 정보 가져오기
                    const { data: userData, error: userError } = await supabase.from('profiles').select().single();
                    console.log(userData);

                    if (userError) {
                        console.error('Error fetching user data:', userError);
                    } else {
                        // 현재 사용자의 프로필 ID 가져오기
                        const userProfileId = userData.id;

                        // 사용자의 프로필 ID를 사용하여 게시물 필터링
                        const userPosts = postData.filter((post) => post.author_uuid === userProfileId);

                        // 필터링된 게시물을 상태로 설정
                        setCards(userPosts);
                        handleSaveChanges(userData.avatarurl, userData.nickname, userData.description);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const onSearchChange = (e) => {
        setSearchWord(e.target.value);
        // 추가적인 로직을 여기서 구현할 수 있습니다
    };

    const filteredCards = cards.filter(
        (card) =>
            card.title.toLowerCase().includes(searchWord.toLowerCase()) ||
            card.content.toLowerCase().includes(searchWord.toLowerCase())
    );

    return (
        <>
            <Header searchWord={searchWord} onSearchChange={onSearchChange} />

            <div className="container mx-auto py-20 px-30 flex gap-20 justify-center">
                <div className="relative">
                    <div className="rounded-full overflow-hidden object-contain h-48 w-48">
                        <img src={profileImage} alt="Profile" />
                    </div>
                </div>
                <div className="my-auto flex flex-col gap-3">
                    <h1 className="text-3xl font-medium">{nickname}</h1>
                    <p className="text-gray-400">{description}</p>
                    <div className="flex item-stretch gap-4">
                        <button className="p-2 ring-1 ring-gray-400 rounded-full" onClick={() => setShowModal(true)}>
                            프로필 수정
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <h1 className="text-3xl font-medium ms-20">내 리뷰</h1>
            </div>
            <div className="px-20 py-5 flex flex-col gap-5">
                {filteredCards.map((card) => {
                    const imageUrl = extractImageUrl(card.content);
                    // content가 100단어를 넘어가면 ...으로 줄여서 표시
                    const truncatedContent = card.content.split(' ').slice(0, 100).join(' ');
                    const displayContent =
                        card.content.split(' ').length > 100 ? truncatedContent + ' ...' : card.content;
                    return (
                        <div
                            key={card.post_id}
                            className="card card-compact border-t border-b border-bg-base-700 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] py-5 flex flex-col md:flex-row gap-3"
                            onClick={() => handleCreateClick(card.post_id)}
                        >
                            <figure className="food-photo object-cover h-48 w-96">
                                {imageUrl ? (
                                    <img src={imageUrl} alt="food" className="object-cover h-48 w-96" />
                                ) : (
                                    <div>No Image Available</div>
                                )}
                            </figure>
                            <div className="card-body h-48 w-96">
                                <h2 className="card-title">{card.title}</h2>
                                <p className="resize-x rounded-md">{displayContent}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <MyPageModal
                isVisible={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSaveChanges}
                currentImage={profileImage}
                currentNickname={nickname}
                currentDescription={description}
                updateProfile={updateProfile}
            />
        </>
    );
}
