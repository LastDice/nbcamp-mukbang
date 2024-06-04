import styled from 'styled-components';

const WriteReviewPage = () => {
    return (
        <>
            {' '}
            <div>헤더</div>
            <WriteReviewContainer>
                <form className="flex flex-col">
                    <input type="text" placeholder="제목" className="input input-ghost w-full text-5xl" />
                    <br />
                    <input
                        type="text"
                        placeholder="맛집 이름"
                        className="input input-bordered border-none w-full max-w-xs"
                    />
                    <br />
                    <div>
                        <div className="badge badge-info gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-4 h-4 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                            #홍대맛집
                        </div>
                        <span> </span>
                        <div className="badge badge-success gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-4 h-4 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                            한식
                        </div>
                    </div>
                    <br />
                    <div className="rating rating-lg">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <br />
                    <textarea
                        className="textarea textarea-bordered w-full h-96 min-w-96 resize-none"
                        placeholder="주문하신 메뉴 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
                    ></textarea>
                    <button className="btn btn-primary w-8/12">저장</button>
                </form>
            </WriteReviewContainer>
        </>
    );
};

const WriteReviewContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    max-width: 1000px;
    min-width: 400px;
    padding: 10px;
    border-radius: 10px;
`;

export default WriteReviewPage;
