import styled from "styled-components"
import * as FiIcons from "react-icons/fi"
import { useRef, useState } from "react"

const MainContainer = styled.div`
    background-image: url("https://img.freepik.com/free-vector/seamless-sports-pattern-background_98292-4294.jpg?w=2000");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    height:100vh;
    position: relative;
`

const Form = styled.form`
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -65%);
    width: 550px;
    height:400px;
    padding:4em;
    /* background-color: #F8F4F5; */
    background-color: ${(props) => (props.theme.formBackground)};
    color: ${(props) => (props.theme.text)};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 2.5em;
        text-align: center;
    }
    span{
        padding: 20px 0;
        font-size: 18px;
    }

    @media screen and (max-width:600px){
        width:400px;

        h1{
            font-size: 2em;
        }

        span{
            font-size: 16px;
        }
    }

    @media screen and (max-width: 420px){
        width: 350px;
        padding:2em;

         h1{
            font-size: 2em;
        }

        span{
            font-size: 14px;
        }
    }
`

const Input = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 15px;;
    width: 450px;
    border: 1px solid #8d8c8c;
    background-color:${(props) => (props.theme.toggle)};

    svg{
        font-size: 25px;
    }

    input{
        margin-left: 15px;
        outline: none;
        border: none;
        font-size: 20px;
        background-color:${(props) => (props.theme.toggle)};
        color:${(props) => (props.theme.text)};
    }

    @media screen and (max-width:600px){
        width:300px;

        input{
            font-size:16px;
        }
    }
`
const Button = styled.button`
    background-color: ${(props) => (props.theme.hiddenBackground)};
    color:${(props) => (props.theme.text)};
    border: none;
    outline: none;
    margin-top: 3em;
    padding:10px 20px;
    width: 150px;
    font-size: 16px;
    font-weight:800;
    cursor: pointer;
`

function Newsletter() {

    const form = useRef<HTMLFormElement>(null);
    const [email, setEmail] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`${email}`)
        setEmail("");
        form.current?.reset();
    }

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit} ref={form}>
                <h1>Ready to Feed your Sports Obssesion?</h1>
                <span>Enter your email and miss nothing.</span>
                <Input>
                    <FiIcons.FiMail />
                    <input
                        placeholder="Enter your email address"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Input>
                <Button>I'M IN!</Button>
            </Form>
        </MainContainer>
    )
}

export default Newsletter
