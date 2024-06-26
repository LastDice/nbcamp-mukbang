import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-between;
    max-width: 1440px;

    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        cursor: pointer;
    }

    .card {
        margin-top: 30px;
    }

    .card-body {
        width: 300px;
        height: 300px;
    }

    .card-rating {
        color: orange;
    }

    p {
        width: 290px;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const supabase = createClient(
    'https://okzounnvdejvweamyzsd.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rem91bm52ZGVqdndlYW15enNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMzU2MDYsImV4cCI6MjAzMjcxMTYwNn0.0gOgO3J5ybGbHANtLp9xe-QpmS-CL1EVxG1mcyBqHzw'
);

function MainContent({ searchWord }) {
    const [cards, setCards] = useState([]);

    const navigate = useNavigate();

    const handleCreateClick = (id) => {
        navigate(`/detail/${id}`);
    };

    useEffect(() => {
        // Supabase에서 데이터 가져오기
        const fetchData = async () => {
            const { data, error } = await supabase.from('posts').select('post_id, title, content');

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setCards(data);
            }
        };

        fetchData();
    }, []);

    const extractImageUrl = (content) => {
        const imageUrlMatch = content.match(/!\[.*?]\((.*?)\)/);
        return imageUrlMatch ? imageUrlMatch[1] : '/img/mukbang.png';
    };

    const filteredCards = cards.filter(
        (card) =>
            card.title.toLowerCase().includes(searchWord.toLowerCase()) ||
            card.content.toLowerCase().includes(searchWord.toLowerCase())
    );

    return (
        <ContentWrapper>
            {filteredCards.map((card) => {
                const imageUrl = extractImageUrl(card.content);
                return (
                    <div
                        key={card.post_id}
                        className="card card-compact w-80 bg-base-100 shadow-xl"
                        onClick={() => handleCreateClick(card.post_id)}
                    >
                        <figure className="food-photo">
                            {imageUrl ? <img src={imageUrl} alt="food" /> : <div>No Image Available</div>}
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{card.title}</h2>
                            <p>{card.content}</p>
                        </div>
                    </div>
                );
            })}
        </ContentWrapper>
    );
}

export default MainContent;
