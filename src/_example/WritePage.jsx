import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import supabase from '../_lib/Supabase.tsx';



export default function WritePage() {
    const [value, setValue] = React.useState('** 여기에 글을 작성해주세요 :> **');

    return (
        <div>
            <input
                id="image-input"
                type="file"
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
                onChange={(file) => {
                    supabase
                        .uploadImage(file.target.files[0])
                        .then((url) => setValue(value + `\n![image](${url.data})`));
                }}
            />

            <MDEditor
                value={value}
                onChange={setValue}
                visibleDragbar={false}
                height={1000}
                components={{
                    toolbar: (command) => {
                        if (command.keyCommand === 'image') {
                            return (
                                <button
                                    type="button"
                                    data-name="image"
                                    aria-label="Add image (ctrl + k)"
                                    title="Add image (ctrl + k)"
                                    onClick={() => {
                                        document.getElementById('image-input').click();
                                    }}
                                >
                                    <svg width="13" height="13" viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
                                        ></path>
                                    </svg>
                                </button>
                            );
                        }
                    }
                }}
            />

            <div className="pt-10">
                {/* 이 부분을 설정해서 보이게 해주시면 됩니다 :> */}
                <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
            </div>
        </div>
        // <>
        //     {' '}
        //     <div>헤더</div>
        //     <WriteReviewContainer>
        //         <form className="flex flex-col">
        //             <input type="text" placeholder="제목" className="input input-ghost w-full text-5xl" />
        //             <br />
        //             <input
        //                 type="text"
        //                 placeholder="맛집 이름"
        //                 className="input input-bordered border-none w-full max-w-xs"
        //             />
        //             <br />
        //             <div>
        //                 <div className="badge badge-info gap-2">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         className="inline-block w-4 h-4 stroke-current"
        //                     >
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             strokeWidth="2"
        //                             d="M6 18L18 6M6 6l12 12"
        //                         ></path>
        //                     </svg>
        //                     #홍대맛집
        //                 </div>
        //                 <span> </span>
        //                 <div className="badge badge-success gap-2">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         className="inline-block w-4 h-4 stroke-current"
        //                     >
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             strokeWidth="2"
        //                             d="M6 18L18 6M6 6l12 12"
        //                         ></path>
        //                     </svg>
        //                     한식
        //                 </div>
        //             </div>
        //             <br />
        //             <div className="rating rating-lg">
        //                 <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
        //                 <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
        //                 <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
        //                 <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
        //                 <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
        //             </div>
        //             <br />
        //             <textarea
        //                 className="textarea textarea-bordered w-full h-96 min-w-96 resize-none"
        //                 placeholder="주문하신 메뉴 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
        //             ></textarea>
        //             <button className="btn btn-primary w-8/12">저장</button>
        //         </form>
        //     </WriteReviewContainer>
        // </>
    );
}
