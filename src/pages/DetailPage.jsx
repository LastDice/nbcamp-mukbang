import { createClient } from '@supabase/supabase-js';
import MDEditor from '@uiw/react-md-editor';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1440px;
    min-height: 2500px;
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

const MainImgBox = styled.div`
    width: 1000px;
    height: 400px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 50px;
    background-color: aqua;
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

const supabase = createClient(
    'https://okzounnvdejvweamyzsd.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rem91bm52ZGVqdndlYW15enNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMzU2MDYsImV4cCI6MjAzMjcxMTYwNn0.0gOgO3J5ybGbHANtLp9xe-QpmS-CL1EVxG1mcyBqHzw'
);

export default function DetailPage() {
    const navigate = useNavigate();

    const navigateMainPage = () => {
        navigate('/');
    };

    const { id } = useParams();
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('posts').select('title, content').eq('post_id', id);

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setDatas(data[0]);
            }
        };

        fetchData();
    }, []);
    if (!datas) {
        return '';
    }

    // const deleteDatas = async () => {
    //     const { data, error } = await supabase.from('posts').delete().eq('post_id', id);
    //     if (error) {
    //         console.error('Error fetching data:', error);
    //     } else {
    //         setDatas(data[0]);
    //     }
    // };

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

            <div>
                <MainImgBox />
                <DetileTitle>
                    <p>{datas.title}</p>
                </DetileTitle>
                <BtnBox>
                    <ToggleBtn className="btn btn-info">수정</ToggleBtn>
                    <DeleteBtn className="btn btn-error">삭제</DeleteBtn>
                </BtnBox>
                <ContentBox>
                    <MDEditor.Markdown source={datas.content} className="w-[900px] h-[950px]" />
                </ContentBox>
            </div>

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
