import React, { useState, useEffect } from 'react';
import supabase from '../_lib/Supabase.js';

function MyPageModal({ isVisible, onClose, onSave, currentImage, currentNickname, currentDescription, updateProfile }) {
    const defaultImageUrl =
        'https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo';
    const [imageUrl, setImageUrl] = useState(currentImage);
    const [nickname, setNickname] = useState(currentNickname);
    const [description, setDescription] = useState(currentDescription);
    const [file, setFile] = useState(null);

    useEffect(() => {
        // 프로필 이미지 가져오기
        async function fetchProfileImage() {
            try {
                const imgPath = await supabase.getProfileImg();
                setImageUrl(imgPath);
            } catch (error) {
                console.error('Error fetching profile image:', error);
            }
        }
        fetchProfileImage();
    }, []);

    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        const localUrl = URL.createObjectURL(file);
        setImageUrl(localUrl);
    };

    const handleImageReset = () => {
        setImageUrl(defaultImageUrl);
        setFile(null);
    };

    const handleSave = async () => {
        let finalImageUrl = imageUrl;

        try {
            // storage저장하는 로직
            if (file) {
                console.log(file);
                const { success, message, data } = await supabase.setProfileImg(file);
                if (success) {
                    finalImageUrl = data;
                } else {
                    throw new Error(message);
                }
                console.log('MyPageModal =>', data);
            }

            // 사용자 정보 업데이트 => user 테이블 필요.

            // 회원가입할 때 auth session에 있는 id를 user테이블의 프라이머리키 id로  자동으로 생성되도록.

            // id로 접근해서 데이터를 update가능.
            const { success: updateSuccess, message: updateMessage } = await updateProfile(
                nickname,
                description,
                finalImageUrl
            );
            if (updateSuccess) {
                onSave(finalImageUrl, nickname, description);
                onClose();
            } else {
                throw new Error(updateMessage);
            }
        } catch (error) {
            console.error('Error saving profile:', error);
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
            id="wrapper"
            onClick={handleClose}
        >
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={onClose}>
                    X
                </button>
                <div className="bg-white p-2 rounded">
                    <div className="grid place-items-center px-10">
                        <h1 className="text-xl font-semibold m-2">프로필 수정</h1>
                        <p className="text-gray-400">프로필과 닉네임을 수정할 수 있습니다</p>
                        <div className="rounded-full overflow-hidden object-contain h-48 w-48 ring-1 ring-gray-400 m-5">
                            <img src={imageUrl} alt="Profile" />
                        </div>

                        <div className="flex item-stretch gap-4">
                            <label className="p-2 font-semibold ring-1 ring-gray-400 rounded-full cursor-pointer">
                                사진변경
                                <input type="file" className="hidden" onChange={handleImageChange} />
                            </label>
                            <button
                                className="p-2 font-semibold ring-1 ring-gray-400 rounded-full"
                                onClick={handleImageReset}
                            >
                                사진삭제
                            </button>
                        </div>
                    </div>

                    <div>닉네임</div>
                    <div className="my-2 p-2 ring-1 ring-gray-400 rounded-sm">
                        <input
                            type="text"
                            placeholder="닉네임을 입력하세요."
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                        />
                    </div>
                    <div>소개</div>
                    <div className="my-2 p-2 ring-1 ring-gray-400 rounded-sm">
                        <input
                            type="text"
                            placeholder="소개글을 입력해보세요."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full p-2 ring-1 ring-gray-400 rounded-full bg-black text-white"
                        onClick={handleSave}
                    >
                        수정
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyPageModal;
