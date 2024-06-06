import React, { useState, useEffect } from 'react';
import MyPageModal from '../components/MyPageModal';
import supabase from '../_lib/Supabase';
import Header from '../components/Header';

export default function MyPage() {
    const [showModal, setShowModal] = useState(false);
    const [profileImage, setProfileImage] = useState(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    );
    const [nickname, setNickname] = useState('');
    const [description, setDescription] = useState('');
    const [cards, setCards] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    // Supabase 객체 초기화

    const handleSaveChanges = (image, nick, desc) => {
        setProfileImage(image);
        setNickname(nick);
        setDescription(desc);
    };

    // updateProfile 함수 정의
    const updateProfile = async (nickname, description, imageUrl) => {
        console.log(nickname, description, imageUrl);
        try {
            // Supabase 객체 초기화 확인
            if (!supabase) {
                console.error('Supabase is not initialized');
                return { success: false, message: 'Supabase is not initialized' };
            }

            // 사용자 인증 확인
            const { data: sessionData, error: sessionError } = await supabase.getSession();
            if (sessionError) {
                console.error('User is not authenticated');
                return { success: false, message: 'User is not authenticated' };
            }
            console.log(sessionData);
            // 여기에 프로필 업데이트 로직 추가
            const user = await supabase.getSession();
            console.log('getSession user data ==> ', user);
            const { error } = await supabase.updateUser(nickname, description, imageUrl, user.session.user);
            // .from('profiles')
            // .update({
            //     global_name: nickname,
            //     bio: description,
            //     avatarurl: imageUrl
            // })
            // .eq('id', user.id);

            if (error) {
                console.error('Error updating profile:', error);
                return { success: false, message: error };
            } else {
                return { success: true, message: 'Profile updated successfully' };
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            return { success: false, message: error };
        }
    };

    useEffect(() => {
        // Supabase에서 데이터 가져오기
        const fetchData = async () => {
            // 현재 로그인한 사용자의 정보 가져오기
            const sessionData = await supabase.getSession();

            const userName = sessionData.session.user.user_metadata.full_name;
            console.log('userName ==>', userName);

            setNickname(userName);

            if (sessionData.session) {
                // 현재 사용자의 ID로 작성한 리뷰 가져오기
                const { data, error } = await supabase.getPostsByUserId(sessionData.session.user.id);

                if (error) {
                    console.error('Error fetching data:', error);
                } else {
                    setCards(data);
                }
            } else {
                console.error('User is not authenticated');
            }
        };

        fetchData();
    }, []);

    const onSearchChange = (e) => {
        setSearchWord(e.target.value);
        // You can add additional logic here if needed
    };

    return (
        <>
            <Header searchWord={searchWord} onSearchChange={onSearchChange} />

            <div className="container mx-auto py-40 px-30 flex gap-20 justify-center">
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

            {/* 내가 쓴 리뷰 */}
            <div>
                <div className="container mx-auto">
                    <h1 className="text-3xl font-medium">내가 작성한 리뷰</h1>
                </div>
            </div>
            <div className="px-20 py-5 flex flex-col gap-5">
                {cards.map((posts) => (
                    <div
                        key={posts.id}
                        className="w-full border-t border-b border-gray-300 py-5 flex flex-col md:flex-row gap-3"
                    >
                        <div className="md:w-1/3">
                            <img
                                src={posts.image_url}
                                alt={posts.title}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        <div className="md:w-2/3 flex flex-col justify-center">
                            <h1 className="font-medium text-lg">{posts.title}</h1>
                            <p className="text-gray-400">{posts.content}</p>
                            <a className="text-indigo-600 font-semibold text-sm" href="">
                                더보기
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <MyPageModal
                isVisible={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSaveChanges}
                currentImage={profileImage}
                currentNickname={nickname}
                currentDescription={description}
                updateProfile={updateProfile} // updateProfile 함수 전달
            />
        </>
    );
}
