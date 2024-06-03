import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-between;
    max-width: 1440px;

    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
    }

    .card-rating {
        color: orange;
    }

    p {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

function MainContent() {
    return (
        <ContentWrapper>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure className="food-photo">
                    <img src="https://img.siksinhot.com/place/1457946348861393.PNG?w=540&h=436&c=Y" alt="food" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">정식당</h2>
                    <h2 className="card-rating">4.1</h2>
                    <p>
                        매달 바뀌는 코스요리만 제공되는 퓨전 한식당으로 서울과 뉴욕에서 운영되고 있습니다. 뉴 코리안
                        요리를 보여주려는 임정식 오너셰프의 창작요리를 만날 수 있습니다.
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
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure className="food-photo">
                    <img src="https://img.siksinhot.com/place/1612332545435027.jpg?w=307&h=300&c=Y" alt="food" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">에비던스</h2>
                    <h2 className="card-rating">3.7</h2>
                    <p>
                        ‘에비던스’는 직접 제면 한 생면 파스타로 오마카세를 선보입니다. 대표 메뉴는 두 가지 맛의 쿠스쿠스
                        파스타 타르트가 나온 뒤 3가지 종류의 파스타와 디저트의 순서로 진행되는 ‘Lunch Pasta Tasting
                        Course’입니다. 파스타 구성은 그때그때 조금씩 달라지지만 요즘 시즌에는 ‘펜넬 크림과 구운 감자를
                        곁들인 대구살 라비올리’, ‘뽀모도로 소스와 부라타 치즈를 곁들인 타야린’, ‘닭가슴살과 블랙
                        트러블을 곁들인 세이지 트로텔로니’를 맛볼 수 있습니다. 그 중 ‘펜넬 크림과 구운 감자를 곁들인
                        대구살 라비올리’는 대구살을 넣은 쫄깃한 라비올리에 부드러운 펜넬 크림이 어우러져 깊은 감칠맛을
                        선사합니다.
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
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure className="food-photo">
                    <img src="https://img.siksinhot.com/place/1582875186782460.jpg?w=560&h=448&c=Y" alt="food" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">스시스미레</h2>
                    <h2 className="card-rating">4.4</h2>
                    <p>
                        요이치, 스시타쿠, 스시기요세 등 여러 매장에서 경력을 쌓은 이성준 셰프가 새롭게 문을 연
                        ‘스시스미레’. 물결이 흐르는 모양처럼 휘어져 있는 바 좌석이 시선을 사로잡습니다. 메뉴는 단품 없이
                        사시미 코스와 오마카세 두 가지로 이루어져 있습니다. 대표 메뉴 ‘디너 오마카세’는 생선회, 아귀 간
                        등 5~7개의 츠마미로 입맛을 돋워준 후, 12~15개의 초밥, 카이센동, 소바, 후식이 차례대로 나옵니다.
                        특히 아카미, 주도로 등 참치를 주재료로 한 초밥과 캐비어, 우니를 아낌없이 넣은 카이센동이 많은
                        인기를 끌고 있습니다. ‘런치 오마카세’의 경우 생선의 구성이 다소 변경되며, 츠마미는 1~2개가
                        제공됩니다.
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
