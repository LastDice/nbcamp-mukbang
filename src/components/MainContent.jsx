import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

function MainContent() {
    const navigate = useNavigate();

    const handleCreateClick = () => {
        navigate('/detail');
    };

    return (
        <ContentWrapper>
            <div className="card card-compact w-80 bg-base-100 shadow-xl" onClick={handleCreateClick}>
                <figure className="food-photo">
                    <img
                        src="https://postfiles.pstatic.net/MjAyNDA1MjJfMjc1/MDAxNzE2Mzg3NTUwOTQy.OQR2-wyd69QHPXaYOCuDwJp4JRJXhZy1jWP7sA2ZIsQg.IIhHTIMQClyH-IKBA3oLCvG6tD2jlt9mx8oUjE062-0g.JPEG/DSC03040.jpg?type=w966"
                        alt="food"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">논현역 맛집 / 손국시</h2>
                    <h2 className="card-rating">4.1</h2>
                    <p>
                        굵고 쫄깃한 면발로 휘어잡은 맛과 가성비. 논현동 먹자골목 안에 논현역 맛집으로 통하는 곳.
                        평일에는 직장인들이 줄서서 먹을만큼 이름난 곳인데, 두툼하고 쫄깃한 면발에 진한 고기국물로 근처
                        직장인들의 마음을 휘어잡은 곳이다. 게다가 직장인들 지갑을 생각하는 가성비까지 훌륭한 곳
                        되시겠다. 이 근방 칼국수의 본좌급인 손국시. 손칼국수를 내는 곳은 아니지만 이름은 손국시다.
                        논현역 3번 출구 논현동 먹자골목 인근에 위치한데다 초록의 간판이라 찾기도 매우 쉽다. 손님이 워낙
                        많았던 관계로 내부를 찍을 순 없었다. 메뉴는 칼국수, 수제비 그리고 그 둘을 섞은 칼제비와
                        계절메뉴인 콩국수뿐. 우선 젓갈취보다는 단맛이 많이 강한 겉절이가 나오는데 달치근해서 입에 착착
                        붙는다. 밥도 하나 가져다 주신다. 본 메뉴가 나오기 전 김치와 곁들여도 좋고 칼국수에 말아 먹어도
                        좋다. 게다가 리필도 자유롭다. 하얀 쌀밥에 단맛과 젓갈취가 살짝 있는 겉절이는 뭐 이 자체로
                        밥도둑이지. 고명이 많이 올려진 심플한 색의 칼국수가 나왔다. 조금 더 펴면 파파르델레가 될 것 같은
                        면, 농밀하고 묵직~해 보이는 국물 그리고 인심 좋아 보이게 올려 주신 고기 고명과 새침하게 살짝
                        올린 호박으로 구성된 한 그릇. 고기를 얼마나 물속에서 괴롭혔는지 국물 자체가 전분과 뒤섞여 굉장히
                        두툼하고 묵직~하다. 그래서 진한 육수와 넉넉한 건지 그리고 비교적 넙대대한 칼국수, 세 힘의 합은
                        강력하다. 마치 여기서 좀 더 졸이면 파스타가 되기라도 할 듯이 ㅎㅎ 젓가락으로 면을 당기면
                        월척이라도 낚은 듯 묵직~하게 딸려 온다. 그리고 그 면에는 고깃 국물과 고명이 면을 부여잡고
                        입안으로 들어온다. 호주산이지만 진하게 우려낸 고기 국물이나 넉넉한 고명으로 육향도 잘 느껴진다.
                        게다가 자칫 단조롭고 지칠 수 있는 이 한 그릇에 김치는 구세주다. 맵큰 달큰 젓갈취가 어우러진 강한
                        맛의 김치도 묵직하게 깔고 가는 칼국수와 잘 어우러지고 젓가락질을 지치지 않게 하더란. 그래서 근처
                        직장인이라면 모를 수 없는 논현역 맛집 되시겠다. ​이날 들렀던 손국시는 칼국수 전문점이다. 진한
                        고깃국물과 달치근한 겉절이가 매력적이다. 그리고 공깃밥도 제공되며 양도 넉넉해 가성비도 좋다.
                        맛있게 잘 먹고 갑니다.
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn">
                            찜
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl" onClick={handleCreateClick}>
                <figure className="food-photo">
                    <img
                        src="https://postfiles.pstatic.net/MjAyNDA2MDNfMTkw/MDAxNzE3NDE1NTQ4OTc5.QBk1i84hX6m0i-nqBRmIHxkqsLbgrnmuGPqVBgIL1uYg.aa2hUKRhno98rSV4cv8hdwAai2M3d3mMsCONi0adrWwg.JPEG/DSC03477.jpg?type=w966"
                        alt="food"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">포항 죽도시장 / 죽도숯불간</h2>
                    <h2 className="card-rating">4.7</h2>
                    <p>
                        육향이 사라진 토시는 무엇이 남을까? 맛이 남더라. ㅋㅋㅋ 사실 개인적으로 내가 생각하는 토시는
                        시간이 생명이며 부드러운 식감에 지인한 육향을 간직해서 소주 한 잔에 잘 어울리는 안주라
                        생각했는데 이날 들렀던 숯불간받이는 어느 정도 시간이 지나 육향은 빠지고 지인한 기름맛이 남아
                        새로운 토시살을 경험할 수 있었던 곳. 시장 내에 위치해 있기 때문에 주차는 당연히 불가하고 웨이팅
                        시스템이 개판이라 나도 다툴 뻔 했다. 분면 나보다 늦게 온 듯 한데 누구한테 눈도장을 찍었는지
                        개쌉소리를 하길래 순간 화날 뻔. 이미 주문은 했기 때문에 넓은 아량으로 양보했다. ㅋㅋㅋ ​이곳은
                        간받이, 제비쵸리를 판매하는 곳이다. 간받이는 돼지고기의 갈매기살을 일컫고, 제비쵸리는 주먹시, 즉
                        토시살을 일컫는 지역 방언으로 이해하면 되겠다. 여하튼 좀 이상 야리꾸리한 대기 시스템 때문에
                        다툼이 이곳저곳에서 일어나던데 ... 약 한 시간 정도 기다려서 입장할 수 있었다. 내부는 만석이라
                        찍을 수 없으니 이렇게 보시면 되고 ㅋㅋㅋ 4인석 테이블 약 10개 정도 되는 규모의 식당이다. 메뉴는
                        제비쵸리, 생삼겹, 간받이 정도이고 식사로 냉면, 김치국수 정도가 있다. 냉면은 방문 당시 주문
                        불가였고, 독특한 건 100g 단위로 판매하고 있다. 주문 후 숯불이 들어오고 반찬도 같이 셋팅된다.
                        파절이는 경상도 방언으로 재래기. 백김치 등 절인 찬이 상당히 많았고 새콤 시큼한 것이 클렌징하기
                        좋은 것들 위주로 제공 됐다. 소금은 여기저기 다 있다며 우리집 특제 소스라며 꼭 여기 찍어
                        먹으라던데 환기용으론 괜찮은데 고기맛을 살리는 역할은 못하는 듯. 역시 소금이 짱이시다.
                        평일인데도 손님이 많아 못 먹을 뻔했던 토시살. 어느 정도 시간이 흘러 재고 상황을 보고는 주문을
                        받아 그 뒤로는 손님을 받지 않았던 그 토시살 되시겠다. 말끔하게 손질된 건 아니고 터프하게 손질된
                        비주얼. 토시 특유의 격막은 다 잘라냈으며 표면에 수분기도 일정부분 날아간 것이 어떤 형태로든
                        강제로 숙성이 될 수 밖에 없었던 토시로 보여진다. 내가 생각하는 제대로 된 토시는 도축 후 3일
                        이내에 먹을 때 부드러운 식감과 진한 육향이 매력적인 원초적인 소고기란 생각인데 과연... 어떨지?!
                        먹고 말하고 마시다보면 한 점 쉬이 구워지는 게 소고기니까 인 당 한 점씩 올리는게 인지상정. 그
                        이상은 허세다. 그러다보면 요로코롬 다 구워지니 입으로 직행하면 되는 것이 소고기. 그렇게 다
                        구워진 죽도숯불간받이의 제비쵸리는 비틀리듯 씹히는 탄탄한 저작감이 아주 즐겁다. 그리고 육즙은
                        적당한 수준이었고 약간의 강제 숙성이 된 건지 육향은 수수하고 얌전한 편이라 살짝 아쉬웠으나
                        씹을때마다 나오는 고소함이 아주 좋더라. 특히 후미에 강하게 치는 단맛의 지방맛이 아주 괜찮았다.
                        ​그냥 냅따 소금만 뿌려서 먹다가 재래기나 특제 소스에 푸~욱 담궈서 먹으면 시큼 새콤해서 환기
                        시켜서 열심히 달릴 수 있다. 원초적인 토시를 기대했으나 그것과는 다른 모습을 보여줬던 ㅎㅎㅎ 이
                        느낌 그대로만 나온다면 이 자체도 매력적이긴 하겠더란. ㅎㅎㅎ 색도 진하지 않고 근막은 다 걷어낸
                        간받이, 갈매기살. 식감이 부드럽다는 장점 외엔 모두가 단점이었던 갈매기살. 시장 특성상 이가 약한
                        어른들 상대하던 곳이라 근막은 다 걷어낸 걸로 추정이 되는데 그게 SNS를 타고 오는 이 시점에선 다소
                        아쉽게 작용하는게 아닌가 싶더란. ㅎㅎㅎ 이때 냉면이 안돼 어쩔 수 없이 주문했던 냉김치국수.
                        개인적으로 젓갈맛 강한 김치 좋아하지 않는데 얜 콤콤하게 찌르는 젓갈취에 대한 거부감만 없다면
                        감칠맛 좋은 젓갈풍미에 시큼새콤 시원~하니 마무리하기도 좋겠더라. ​ 이날 들렀던 죽도시장의
                        죽도숯불간받이는 제비쵸리, 간받이 등 특수 위주 식당이다. 대기 시스템이 없어서 간혹 손님들끼리
                        시시비비를 가리더라. 신선함이 최고라고 생각했지만 다른 매력의 토시살을 경험할 수 있었다. 맛있게
                        잘 먹고 갑니다.
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn">
                            찜
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl" onClick={handleCreateClick}>
                <figure className="food-photo">
                    <img
                        src="https://postfiles.pstatic.net/MjAyNDA1MzFfMTUx/MDAxNzE3MTYwODM5MjA1.W4LsF1rE1YB51JPGw0HNYR0m23ezydLu3zzbhihNzX8g.WbwMQAdhaA3eNWCg0X0wGLdzCiYZhTeEiyJeFD1ykRgg.JPEG/DSC03499.jpg?type=w966"
                        alt="food"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">포항시 북구 / 청룡물곰아구</h2>
                    <h2 className="card-rating">4.4</h2>
                    <p>
                        내가 여태 먹은 물곰은 대체 뭐지? 싶을만큼 탕이 아닌 살 맛의 차이가 너무나도 극명했던 청룡의
                        물곰탕. 나야 강원도 가면 이걸 종종 먹지만 처음이었던 일행은 이게 진짜 동해안 물곰이라고 강조하며
                        잡솨봐를 외친 이모님 덕에 나 역시도 먹게 된 케이스인데 담백했던 그 지역의 물곰탕과 달리 살 맛
                        자체가 달랐던 포항 청룡물곰아귀. ​죽도시장삼거리 근처에 위치한 청룡물곰아구. 출장 길에 점심을
                        먹기 힘든 상태여서 아침 식사로 찾았던 곳이다. ​ 주차는 매장 옆 주차장에 하면 되고 30분에
                        1,000원이기 때문에 가격은 저렴한 편. 내부는 모두 좌식 형태. 홀은 2개 공간으로 나뉘어 있고 4인석
                        테이블 7개 정도가 있는 규모이다. ​ 매장 벽지는 흰색인데 손님들 칭찬으로 빼곡하다. ㅎㅎㅎ 메뉴는
                        아구수육, 찜, 물곰탕, 아구탕, 해신탕이 있지만 이집의 메인은 물곰탕. 가격은 무시무시한 싯가다.
                        약간의 고민을 한 일행이 주문한 건 물곰탕. 주문 후 찬이 약 10가지 정도 차려진다. ​ 시금치는
                        질깃사각 단맛 잘 나서 좋고 계란찜은 계란찜 했고, 포항식 물김치는 내 취향은 아니었지만, 이런
                        고추지는 또 아삭 알싸간간 해서 밥 반찬으로 잘 어울리는 등, 맛도 식감도 다양한데다 종류도 많아
                        젓가락이 쉴 틈이 없더란. 그러는 사이 나오는 이집의 자랑 물곰탕. 상기 사진은 2인분이며 당시 기준
                        1인분에 34,000원인지라 확실히 강원도의 물곰탕과는 가격면에서 최소 50% 이상 비싼 편이다. 한 소끔
                        끓여 나오기 때문에 바로 먹을 수 있는데 이모님께서 본인이 직접 소분해 주신다. ㅎㅎㅎ 그렇게 받은
                        그릇. 항공샷이라 접시 같지만, 사실 라멘 그릇 형태이기 때문에 담긴 양이 제법 되는 편. 고기를 많이
                        토막 내는 강원도와 다른 건 몇 토막 내지 않는 다는 것이 비주얼 상 조금 다른 편이다. 국물은 어차피
                        어떤 재료를 넣어 끓여내느냐에 따라 다른 부분이기 때문에 우선 차치하겠지만, 강원도처럼 시원한
                        느낌이라기보다 담백 칼칼하며 그에 비해서는 살~짝 두께감이 있다고 느꼈던 편. 근데 ... 살은
                        희한하게 시원한 맛이 나더란. 그게 맞나 싶어 숟가락으로 퍼서 먹었더니 뻥 좀 치면 머리가
                        시원해지는 솔의눈처럼 시원한 느낌이 스믈쩍 느껴지더라. 참, 신기한 맛의 물고기였다. 이게 진또배기
                        물곰인 것인가? 그럼 난 여태 시원하게 끓여낸 물메기만 먹었던 건가?! 싶었던 청룡물곰아구. 대체
                        어떤게 진짜야?!​ 이날 들렀던 포항의 청룡물곰아구는 진또배기 물곰을 판매하는 곳이란다. 가격은
                        시세이기 때문에 그때그때 다르다. 솔직히 어떤게 진짜 물곰인지 모르겠지만 물고기 맛이 시원해서
                        독특하더란. 주말은 웨이팅이 꽤 되더라. 정도로 요약할 수 있겠다. 맛있게 잘 먹고 갑니다.
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn">
                            찜
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl" onClick={handleCreateClick}>
                <figure className="food-photo">
                    <img
                        src="https://postfiles.pstatic.net/MjAyNDA0MjlfMTAz/MDAxNzE0Mzg2OTgzMzA4.5gBwi4Wj6x6KQuxd8iQhS84DEN3GizfB7P5eXKeJl0og.7OpeY-s04Yj2K6Y5u347SsyIoXLGOqd0F3vRa-LPk-Mg.JPEG/SE-44b718b7-33db-42a5-8b13-8444fe0bd92b.jpg?type=w966"
                        alt="food"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">대구 범어역 / 범어동섬</h2>
                    <h2 className="card-rating">4.8</h2>
                    <p>
                        깔끔하게 2차로 가기 좋은 곳. 하루카에서 1차, 영천생고기에서 2차를 마무리하고 3차로 들렀던
                        범어역의 범어동섬. 데려가고 싶은 곳이 있었다던 지인의 말을 개무시하며 그냥 가까운데 가자고 해서
                        들렀을만큼 귀찮은 상황이었는데 영천생고기 바로 옆에 있는 곳이다. ㅋㅋㅋ 하지만 그런 불만을
                        잠재울만큼 음식이 괜찮았던 곳이었다. ​범어역 2번 출구에서 동도초등학교 방향으로 조금만 걷다보면
                        나오는 범어동섬. 매장 입구에 큼지막한 가짜 돌덩어리가 입구를 가로 막고 있다. ㅋㅋㅋㅋ 완벽한
                        룸은 아니지만 룸 비스무리한 형태로 구성돼 있다. 블라인드를 내리면 서로 오붓하게 일행끼리 즐기기
                        좋고 입구 좌측엔 그나마 홀이라고 불릴만한 곳이 둘 셋 정도 있더란. 그리고 좀 독특한 점이 있다.
                        일반적으로 해산물을 판매하는 집들은 수조를 밖에 두고 손님을 낚는데, 이곳은 손님을 가로 막는
                        돌덩이를 지나야 수조를 볼 수 있다. 주방과 가까운 것이 아무래도 ㅋㅋ역시 메뉴는 기본적으로
                        해산물이 제일 기본이고 그 해산물들을 세트로 구성해 놓은 것들이나 해물탕이 있는 게 거의 전부다.
                        그리고 겁나 독특하게 지리산 벌집 한 조각도 판매하더란 ㅋㅋㅋㅋ 신사동 모 술집에서도 저렇게 팔긴
                        하더라만 ㅎㅎㅎ 우리는 모듬 해산물, 울릉도를 주문했다. 이곳은 섬의 크기에 따라 인원수가 갈리는데
                        울릉도는 2/3인이라 해산물 메뉴에서 3가지를 선택하면 된다. 고정돼 있는 게 아니라 이런 부분은
                        좋았다. 주문 후 가장 먼저 나온건지 찍힌건지 서비스로 나온 가리비 미역국. 간장과 김도 하나
                        나오고, 2차로 왔더니 찬은 크게 의미 없고 뻥튀기 같은 과자만이 술을 적적하게 하지 않더란 ㅎㅎㅎ
                        고기 넣어 끓인건지 상당히 진한 느낌이라 맛있긴한데 2차로 왔더니 조금 무거운 느낌. 해산물 3종이
                        나오는 울릉도. 별 것 아니지만 드라이아이스 퍼포먼스도 좋다. ㅎㅎㅎ 플레이팅도 좋다. 선도가
                        독보적으로 좋지 않고 원물이 압도적으로 좋은게 아니라면 소비자의 판단은 플랫폼에 글을 올리는
                        누군가의 사진이 될 터, 분명 긍정적인 작용을 하게 될 것이다. 그래서 이렇게 드라마틱하게 사진
                        찍기도 좋고. 근데 옛말에 보기 좋은 떡이 먹기도 좋다더니 맛도 좋다. ㅋㅋㅋㅋ 시원한 온도감으로
                        쌉싸래함을 상쇄하는 신선한 돌멍게도 좋았고 따땃한 온도감에 말캉몰캉 쫀닥쫄깃한 식감의 소라는
                        씹을수록 단맛이 베어져 나올만큼 괜찮았다. 귀찮아서 2차로 식사한 식당의 옆으로 이동했을 뿐인데
                        제대로 걸렸던 ㅎㅎㅎ 이날 들렀던 대구의 범어동섬은 해산물을 전문으로 하는 술집이다.홀과
                        파티션으로 구분된 형태로 비교적 프라이빗하게 즐기기 좋다. 게다가 해산물을 반접시/한접시로 주문이
                        가능해 2차로 들러 간단히 즐기기에도 좋다. 맛있게 잘먹고 갑니다.
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn">
                            찜
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
}

export default MainContent;
