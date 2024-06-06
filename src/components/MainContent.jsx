import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../_lib/Supabase';

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

    const filteredCards = cards.filter(
        (card) =>
            card.title.toLowerCase().includes(searchWord.toLowerCase()) ||
            card.content.toLowerCase().includes(searchWord.toLowerCase())
    );

    return (
        <ContentWrapper>
            {filteredCards.map((card) => (
                <div
                    key={card.id}
                    className="card card-compact w-80 bg-base-100 shadow-xl"
                    onClick={() => handleCreateClick(card.post_id)}
                >
                    <figure className="food-photo">
                        <img src={card.image_url} alt="food" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{card.title}</h2>
                        <h2 className="card-rating">{card.rating}</h2>
                        <p>{card.content}</p>
                        {/* ... */}
                    </div>
                </div>
            ))}
        </ContentWrapper>
    );
}

export default MainContent;
