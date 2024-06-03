import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillEdit } from 'react-icons/ai';

const Container = styled.div`
    max-width: 1440px;
    min-height: 2000px;
    margin: 0 auto;
`;

const ImgBox = styled.div`
    width: 1000px;
    height: 400px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
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
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;
    background-color: aquamarine;
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

const ReviwBtn = styled.button`
    font-size: 18px;
    float: right;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
`;

const ReviwComment = styled.div`
    background-color: aliceblue;
    width: 1000px;
    height: 650px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 50px;
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
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <DetileTitle>
                <p>서울의 맛집입니다.</p>
            </DetileTitle>
            <BtnBox>
                <ToggleBtn className="btn btn-info">수정</ToggleBtn>
                <DeleteBtn className="btn btn-error">삭제</DeleteBtn>
            </BtnBox>
            <ImgBox>이미지 박스</ImgBox>
            <ContentBox>내용이 들어갈 박스</ContentBox>
            <ReviwTitleBox>
                <ReviwTitle>
                    <h3>
                        Review{' '}
                        <ReviwBtn
                            className="text-sm "
                            onClick={() => {
                                navigate(`/write`);
                            }}
                        >
                            <AiFillEdit size={20} /> 리뷰 쓰기
                        </ReviwBtn>
                    </h3>
                </ReviwTitle>
            </ReviwTitleBox>
            <ReviwComment>리뷰 추가되는 박스</ReviwComment>
        </Container>
    );
}
