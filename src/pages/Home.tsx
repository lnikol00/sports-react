import styled from "styled-components"
import newsData from "../data/newsData.json"

type newsData = {
    id: number,
    title: string,
    cathegories: string,
    desc: string,
    info: infoData[],
}

type infoData = {
    id: number,
    title: string,
    news: News[],
}

type News = {

}

const MainContainer = styled.div`
    background-color: ${(props) => (props.theme.body)};
    color: ${(props) => (props.theme.text)};
`
const Article = styled.article`
    display:flex;
    flex-direction:column;
    padding: 5rem 8rem;

    h2{
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        padding-bottom: 20px;
        font-size: 4rem;

        &::after{
            content: "";
            height: 0.3rem;
            background-color: ${(props) => (props.theme.background)};
            width: 100%;
            margin-left: 15px;
            margin-bottom: 15px;
        }

        @media screen and (max-width: 900px){
            font-size: 3em;
            &::after{
                margin-bottom: 10px;
            }
        }
        @media screen and (max-width: 800px){
            font-size: 2.5em;
        }
        @media screen and (max-width: 600px){
            font-size: 2em;
            &::after{
                margin-bottom: 8px;
            }
        }
    }

    div{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        font-size:20px;

        p{
            padding-top: 20px;
            line-height: 2em;
        
            @media screen and (max-width: 500px){
                font-size: 18px;
            }
        }
    }

    &:nth-child(odd){
        /* background-color: rgb(255, 200, 78); */
        background-color: ${(props) => (props.theme.background)};
    }

    @media screen and (max-width:900px){
        padding: 30px;
    }

    @media screen and (max-width: 500px){
        span{
            font-size: 18px;
        }
    }
`

function Home() {
    return (
        <MainContainer>
            {newsData.news.map((info, index) => {
                return (
                    <Article key={index}>
                        <h2>
                            {info.title}
                        </h2>
                        <div>
                            <span><b>Cathegory: </b> {info.cathegories}</span>
                            <p><b>Description: </b>{info.desc}</p>
                        </div>
                    </Article>
                )
            })}
        </MainContainer>
    )
}

export default Home
