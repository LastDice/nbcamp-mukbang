import styled from 'styled-components';

const MainHeader = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

function MainPage() {
    return <MainHeader></MainHeader>;
}

export default MainPage;
