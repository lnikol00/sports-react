import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import styled from "styled-components"
import { newsData } from "./Home";

const MainContainer = styled.div`
    background-color: ${(props) => (props.theme.body)};
    color: ${(props) => (props.theme.text)};
`

const Wrapper = styled.div`
    padding: 2rem 5rem;
    h3{
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        font-size: 4em;
        padding-bottom: 20px;

        &::after{
            content: "";
            height: 0.3rem;
            background-color: ${(props) => (props.theme.background)};
            width: 100%;
            margin-left: 15px;
            margin-bottom: 15px;
        }
    }
`

const NewsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
`

const Article = styled.div`
    width: 300px;
    padding-bottom: 10px;
    box-shadow: 1px 3px 5px ${(props) => (props.theme.article)};
    transition:all 0.5s ease;

    &:hover{
        transform: scale(0.97);
    }
    
    a{
        text-decoration: none;
        color: ${(props) => (props.theme.text)};
    }

    img{
        width:100%;
    }

    h5{
        font-size: 20px;
        padding: 10px;
    }

    span{
        padding: 10px;
    }
`

function Articles() {

    const params = useParams();

    const [singleData, setSingleData] = useState<newsData>()

    useEffect(() => {
        fetch(`http://localhost:3500/news/${params.id}?_embed=info`)
            .then((res) => res.json())
            .then((json) => setSingleData(json))
    })

    return (
        <MainContainer>
            {singleData?.info.map((sport) => {
                return (
                    <Wrapper>
                        <h3>{sport.title}</h3>
                        <NewsContainer>
                            {sport.news.map((news) => {
                                return (
                                    <Article>
                                        <Link to="">
                                            <img src={news.image} />
                                            <h5>{news.title}</h5>
                                            <span>{news.date}</span>
                                        </Link>
                                    </Article>
                                )
                            })}
                        </NewsContainer>
                    </Wrapper>
                )
            })}
        </MainContainer>
    )
}

export default Articles
