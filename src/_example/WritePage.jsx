import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import Supabase from '../_lib/Supabase.tsx';

const supabase = new Supabase();

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
    );
}
