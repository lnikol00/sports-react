import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components"
import { newsData } from "./Home";

const MainContainer = styled.div`
    
`

function Articles() {

    const params = useParams();

    const [articleData, setArticleData] = useState<newsData>()

    return (
        <MainContainer>
            {articleData?.title}
        </MainContainer>
    )
}

export default Articles
