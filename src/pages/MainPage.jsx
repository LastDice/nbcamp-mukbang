import React, { useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
import styled from 'styled-components';

const Main = styled.div`
    /* width: 1500px; */
`;

function MainPage() {
    const [searchWord, setSearchWord] = useState('');
    const onSearchChange = (search) => {
        setSearchWord(search);
    };

    return (
        <>
            <Main>
                <Header searchWord={searchWord} onSearchChange={onSearchChange} />
                <NavBar />
                <MainContent searchWord={searchWord} />
            </Main>
        </>
    );
}

export default MainPage;
