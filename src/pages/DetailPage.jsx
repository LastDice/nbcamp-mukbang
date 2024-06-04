import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1440px;
    min-height: 2000px;
    margin: 0 auto;
`;

const DetileTitle = styled.div`
    width: 800px;
    height: 50px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    font-size: 30px;
    margin-top: 20px;
`;

const BtnBox = styled.div`
    width: 1000px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    margin-top: 20px;
`;

const ToggleBtn = styled.button`
    width: 70px;
`;

const DeleteBtn = styled.button`
    width: 70px;
    margin-left: 20px;
`;

const ContentBox = styled.div`
    width: 1000px;
    height: 950px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;
`;

const ReviwTitleBox = styled.div`
    width: 1000px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;
`;

const ReviwTitle = styled.div`
    width: 1000px;
    height: 2em;
    border-bottom: 2px solid;
    font-size: 40px;
`;

const ReviwBox = styled.div`
    width: 1000px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
`;

const ReviwProfile = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
`;

const ReviwComment = styled.div`
    width: 600px;
    height: 200px;
`;

const ReviwText = styled.p`
    width: 600px;
    height: 180px;
    resize: none;
    display: flex;
    align-items: center;
`;

export default function DetailPage() {
    const navigate = useNavigate();

    const navigateMainPage = () => {
        navigate('/');
    };

    return (
        <Container>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl" onClick={navigateMainPage}>
                        MuckBang
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    마이페이지
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>프로필 수정</a>
                            </li>
                            <li>
                                <a>로그인</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <DetileTitle>
                <p>부산여행중 서면맛집을 찾은 심돈 서면점! 고기최고예요</p>
            </DetileTitle>
            <BtnBox>
                <ToggleBtn className="btn btn-info">수정</ToggleBtn>
                <DeleteBtn className="btn btn-error">삭제</DeleteBtn>
            </BtnBox>
            <ContentBox>
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMTRfMTI5%2FMDAxNzEwMzc4MTk0NTA2.5uDX6rfW4BxdtkgFXZN3-U4p-ZGhjh4l3Y4C4Ftqrb8g.R-AtHQePcA0atBejERRiFyGbanUrKkWfi4GXmf6jsQcg.JPEG%2F%25B2%25D9%25B9%25CC%25B1%25E2IMG_6099.jpg&type=a340" />
                <p>
                    부산 여행 중에 우리가 다녀온 서면맛집인 심돈 서면점에 대해 이야기 하고자 한다. 한참을 무얼먹을까
                    고민하다가 지인추천으로 다녀오게 되었다. 가게 분위기도 괜찮았고 친구들과 도란도란 이야기 나누는데
                    진짜 시간 가는줄 몰랐던것 같다. 고기의 육질도 좋았고 맛도 좋았어서 더 감동이였던 서면맛집 심돈
                    서면점!
                </p>
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjNfMjA2%2FMDAxNzAwNzQxMjMyMzE3.tbuYmA2kuoXv7LYo91rDDo8OqfQSunfTckPtxZGmkjIg.wqYgqEELCPbmJhRVwqxz7XhkgrHjvbu1EtqqUTcUqAog.JPEG.ruddnjs1763%2FK_4134-23401-32077.jpg&type=a340" />
                <p>
                    심돈 서면점의 돼지고기는 부드러움과 고소함이 일품이 였고 상차림된 반찬들도 맛있었다. 특히 김치가
                    고소하고 시원해서 돼지고기와 찰떡궁합이니 꼭 먹어 보길 바란다. 서면맛집인 심돈 서면점은 직원이
                    알아서 고기도 구워주니 정말 편했다. 고기가 구어지는 동안 구어지는 고기 냄새는 내 침샘을 자극 했고
                    먹다 보니 진짜 게눈감추듯 다 먹어버렸다. 맛있었던 국수와 계란찜도 강력추천이니 꼭꼭 먹어보길
                    바람!부산여행중 서면맛집을 찾고 있다면 심돈 서면점으로 강력 추천
                </p>
            </ContentBox>
            <ReviwTitleBox>
                <ReviwTitle>
                    <h3 className="mt-2 ml-4">
                        댓글{' '}
                        <button
                            className="btn float-end mt-2 mr-5"
                            onClick={() => document.getElementById('my_modal_4').showModal()}
                        >
                            댓글 쓰기
                        </button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <form>
                                    <input
                                        type="text"
                                        placeholder="내용을 입력해주세요!"
                                        className="w-4/5 h-48  ml-10 mt-12 text-base"
                                    />
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn mr-4">등록</button>
                                            <button className="btn">닫기</button>
                                        </form>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    </h3>
                </ReviwTitle>
            </ReviwTitleBox>
            <ReviwBox>
                <ReviwProfile>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <span>홍길순</span>
                </ReviwProfile>
                <ReviwComment>
                    <ReviwText>
                        저는 경기도 쪽에 살아서 부산에 갈 일이 없지만 맛집이라면 얘기가 다르죠! 언젠가는 꼭 먹으러
                        가겠습니다 ㅎㅎ
                    </ReviwText>
                </ReviwComment>
            </ReviwBox>
        </Container>
    );
}
