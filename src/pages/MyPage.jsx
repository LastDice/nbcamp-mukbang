import React from 'react';
import MyPageModal from '../components/MyPageModal';

export default function MyPage() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <div>헤더</div>

            {/* 프로필 사진 */}
            <div className="container mx-auto py-40 flex gap-20">
                <div className="relative">
                    <div className="rounded-full overflow-hidden object-contain h-48 w-48">
                        <img
                            src="https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo"
                            alt=""
                        />
                    </div>
                </div>

                {/* 프로필 내용 */}
                <div className="my-auto flex flex-col gap-3">
                    <h1 className="text-3xl font-medium">홍길동</h1>
                    <p className="text-gray-400">즐거운 날입니다.</p>
                    <div className="flex item-stretch gap-4 ">
                        <button
                            data-modal-target="default-modal"
                            data-modal-toggle="default-modal"
                            className="p-2 ring-1 ring-gray-400 rounded-full"
                            onClick={() => setShowModal(true)}
                        >
                            프로필 수정
                        </button>
                        <button className="p-2 ring-1 ring-gray-400 rounded-full">비밀번호 변경</button>
                    </div>
                    <MyPageModal isVisible={showModal} onClose={() => setShowModal(false)} />
                </div>
            </div>

            {/* 내가 쓴 리뷰 */}
            <div>
                <div className="container mx-auto">
                    <h1 className="text-3xl font-medium">내가 작성한 리뷰</h1>
                </div>
            </div>
            <div className="p-5 flex flex-wrap">
                <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 className="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p className="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a className="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
                <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 className="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p className="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a className="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
                <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 className="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p className="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a className="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
                <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 className="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p className="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a className="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
                <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 className="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p className="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a className="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
                <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                    <img
                        src="https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium"
                        alt=""
                    />
                    <h1 className="font-medium text-lg">정말 맛있었던 비빔밥</h1>
                    <p className="text-gray-400">
                        왼손으로 비비고 오른손으로 비비고 양손으로 비비고 왼손으로 비비고 오른손으로 비비고 양손으로
                        비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고
                        양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고왼손으로 비비고 오른손으로
                        비비고 양손으로 비비고왼손으로 비비고 오른손으로 비비고 양손으로 비비고
                    </p>
                    <a className="text-indigo-600 font-semibold text-sm" href="">
                        더보기
                    </a>
                </div>
            </div>

            <div>푸더</div>
        </>
    );
}
