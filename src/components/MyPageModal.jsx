import React, { useState } from 'react';
import MyPageModal from '../components/MyPageModal';

export default function MyPage() {
    const [showModal, setShowModal] = useState(false);
    const [profileImage, setProfileImage] = useState(
        'https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo'
    );
    const [nickname, setNickname] = useState('홍길동');
    const [description, setDescription] = useState('즐거운 날입니다.');

    const handleSaveChanges = (image, nick, desc) => {
        setProfileImage(image);
        setNickname(nick);
        setDescription(desc);
    };

    return (
        <>
            <div>헤더</div>

            <div className="container mx-auto py-40 flex gap-20">
                <div className="relative">
                    <div className="h-full rounded-full overflow-hidden object-contain h-48 w-48">
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
                        <button className="p-2 ring-1 ring-gray-400 rounded-full">비밀번호 변경</button>
                    </div>
                </div>
            </div>

            {/* 내가 쓴 리뷰 */}
            <div>
                <div class="container mx-auto">
                    <h1 class="text-3xl font-medium">내가 작성한 리뷰</h1>
                </div>
            </div>
            <div class="p-5 flex flex-wrap">
                <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 class="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p class="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a class="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
                <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 class="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p class="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a class="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
                <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 class="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p class="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a class="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
                <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 class="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p class="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a class="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
                <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 class="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p class="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a class="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
                <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 class="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p class="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a class="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
            </div>

            <div>푸더</div>

            <MyPageModal
                isVisible={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSaveChanges}
                currentImage={profileImage}
                currentNickname={nickname}
                currentDescription={description}
            />
        </>
    );
}
