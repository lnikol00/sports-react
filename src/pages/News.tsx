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
            {newsData.news.map((info) => {
                return (
                    <div>
                        {info.info.map((something) => {
                            return (
                                <div>
                                    <h2>{something.title}</h2>
                                    <p>{something.news.map((random) => {
                                        return (
                                            <div>
                                                {random.desc}
                                            </div>
                                        )
                                    })}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </MainContainer>
    )
}

export default News
