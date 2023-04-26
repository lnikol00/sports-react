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
    news?: News[],
}

type News = {

}

const MainContainer = styled.div`

`
const Article = styled.article`
    display:flex;
    justify-content:space-between;
    align-items: center;
    flex-direction:row;
    padding: 5rem 8rem;
    /* margin-bottom: 50px; */

    div{
        width:65%;
        font-size:20px;
        h2{
            padding-bottom: 20px;
            font-size: 4rem;
        }
        p{
            padding-top: 20px;
            line-height: 2em;
        }
    }

    &:nth-child(odd){
        background-color: rgb(255, 200, 78);
    }
`
const Image = styled.img`
    width: 30%; 
`

function Home() {
    return (
        <MainContainer>
            {newsData.news.map((info) => {

                const image = (
                    <Image src={info.image}></Image>
                );

                return (
                    <Article key={info.id}>
                        {info.id % 2 === 1 ? image : ""}
                        <div>
                            <h2>{info.title}</h2>
                            <span><b>Cathegory: </b> {info.cathegories}</span>
                            <p><b>Description: </b>{info.desc}</p>
                        </div>
                        {info.id % 2 === 0 ? image : ""}
                    </Article>
                )
            })}
        </MainContainer>
    )
}

export default Home
