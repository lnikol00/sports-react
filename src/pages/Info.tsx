import styled from "styled-components"
import staffData from "../data/staffData.json"

type staffData = {
    id: number,
    name: string,
    desc: string,
}

const MainContainer = styled.div`
    background-color:${(props) => (props.theme.body)};
    color: ${(props) => (props.theme.text)};
    padding: 3% 10%;

    h1{
        font-size: 5em;
    }
    
    p{
        font-size: 1.5em;
        font-weight: 100;
        padding: 10px 0;
    }

    span{
        padding-left: 15px;
        font-size: 14px;
        font-weight: 800;
    }

    @media screen and (max-width: 450px){
        h1{
        font-size: 3em;
        }
        p{
            font-size: 1em;
        }
        span{
            font-size:12px;
        }
    }
`

const Container = styled.div`
    width: 75%;

    @media screen and (max-width: 1500px){
        width: 100%
    }
`
const Article = styled.div`
    display:flex;
    gap: 30px;
    padding: 20px 0;

    img{
        width: 500px;
        height:100%;
    }

    h2{
        font-size:30px;
    }

    p{
        font-size:18px;
        line-height: 40px;
    }

    @media screen and (max-width: 1500px){
        flex-direction: column;
        img{
            width: 100%;
        }
    }

    @media screen and (max-width: 500px){
        h2{
        font-size:28px;
        }

        p{
        font-size:16px;
        line-height: 40px;
        }
    }


`

function Info() {
    return (
        <MainContainer>
            <h1>About Us</h1>
            <p>Meet the SportsWeek staff.</p>
            <span>Published Nov 14, 2001</span>

            <Container>
                {staffData.staff.map((worker) => {
                    return (
                        <Article key={worker.id}>
                            <img src={worker.image} />
                            <div>
                                <h2>{worker.name}</h2>
                                <p>{worker.desc}</p>
                            </div>
                        </Article>
                    )
                })}
            </Container>
        </MainContainer>
    )
}

export default Info
