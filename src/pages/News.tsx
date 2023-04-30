import styled from "styled-components"
import newsData from "../data/newsData.json"
import { useParams } from "react-router-dom"

type Info = {
    id: string | number;
}

const MainContainer = styled.div`

`

function News() {

    const params = useParams() as Info;

    const newsInfo = newsData.news.filter((news) => news.id === params.id)

    return (
        <MainContainer>


            aaa
        </MainContainer>
    )
}

export default News
