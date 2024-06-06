import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import Supabase from '../_lib/Supabase.tsx';
import Header from '../components/Header.jsx';

const supabase = new Supabase();

const WritePostPage = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <WritePostContainer>
                <input
                    className="input input-ghost w-full text-4xl mb-10 text-center p-10"
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
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
                    style={{ padding: 10 }}
                    value={value}
                    onChange={setValue}
                    visibleDragbar={false}
                    height={500}
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
                <button
                    className="btn btn-primary w-8/12 mt-10"
                    onClick={async () => {
                        const result = await supabase.writePosts(title, value);
                        if (result.success) {
                            alert('글 작성 성공');
                            navigate('/');
                        } else return alert(`글 작성 실패: ${result.message}`);
                    }}
                >
                    글 작성 완료
                </button>

                <div className="pt-10">
                    <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
                </div>
            </WritePostContainer>
        </>
    );
};

const WritePostContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    min-width: 600px;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
`;

export default WritePostPage;
