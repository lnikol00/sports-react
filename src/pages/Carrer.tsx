import { useRef, useState } from "react"
import styled from "styled-components"
import * as HiIcons from "react-icons/hi"

type Props = {
    focused?: boolean;
}

const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    background-color: ${(props) => (props.theme.body)};
`

const Form = styled.form`
    display:flex;
    justify-content:center;
    flex-direction: column;
    width: 80%;
    height: 600px;
    border: 1px solid black;
    border-radius: 40px;
    padding: 5em 7em;
    margin: 40px 0;
    background-color: ${(props) => (props.theme.hiddenBackground)};

    h1{
        font-size: 3em;
        color:${(props) => (props.theme.text)};

        @media screen and (max-width: 550px){
            font-size: 2.5em;
        }
        @media screen and (max-width: 460px){
            font-size: 2em;
        }
    }
    @media screen and (max-width:900px){
        height:650px;
    }

    @media screen and (max-width: 850px){
        width: 90%;     
    }
    @media screen and (max-width: 700px){
        padding: 5em 3em;
        border-radius: 0;
        width: 100%;
        border: none;
    }
`

const Top = styled.div<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 2em 0;

    div{
        width: 100%;
        height: 50px;
        margin-bottom:15px;
    }

    input{
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        padding-left: 20px;
        margin-bottom: 10px;
        background-color:inherit;  
        border-bottom: 1px solid ${(props) => (props.theme.text)};
        font-size: 18px;

         &::placeholder{
            color: ${(props) => (props.theme.text)};
        }
        
        &:invalid {
            border-bottom: 1px solid red;
        }

        &:invalid~span{
            display: block;
        }

        @media screen and (max-width: 550px){
            font-size: 16px;
            padding: 0;
        }
    }

    span{
        padding: 0px 15px;
        color: red;
        display: none;

        @media screen and (max-width: 550px){
            padding: 0;
            font-size: 16px;
        }
    }

    @media screen and (max-width: 900px){
        flex-direction: column;
        gap: 30px;
        justify-content: center;
    }
`

const Center = styled.div`
    display:flex;
    flex-direction: column;

    button{
        width: 250px;
        height:50px;
        outline: none;
        background-color: inherit;
        color: ${(props) => (props.theme.text)};
        border: 1px solid ${(props) => (props.theme.text)};
        border-radius: 16px;
        cursor: pointer;

        &:hover{
            background-color: rgba(255,255,255,0.2);
        }

        @media screen and (max-width: 450px){
            width: 100%;
        }
    }

    span{
        padding-top: 10px;
        font-size: 14px;
        color:${(props) => (props.theme.text)};
    }
`
const Bottom = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 2em 0;

    textarea{
        width: 100%;
        height: 40px;
        outline: none;
        border: none;
        padding-left: 20px;
        background-color:inherit;  
        border-bottom: 1px solid ${(props) => (props.theme.text)};
        font-size: 18px;
        resize: none;
        overflow: hidden;

        &::placeholder{
            color:${(props) => (props.theme.text)};
        }    

        @media screen and (max-width: 550px){
            font-size: 16px;
            padding: 0;
        }
    }

    div{
        width: 100%;
        height: 50px;
        margin-bottom: 15px;
    }

    select{
        width: 100%;
        height:100%;
        outline: none;
        border: none;
        padding-left: 20px;
        margin-bottom: 10px;
        background-color:inherit;  
        border-bottom: 1px solid ${(props) => (props.theme.text)};
        color: ${(props) => (props.theme.text)};
        font-size: 18px;
        cursor: pointer;

        &:invalid{
            border-bottom: 1px solid red;
        }

        &:invalid~span{
            display: block;
        }

        @media screen and (max-width: 550px){
            font-size: 16px;
            padding: 0;
        }
    }
    
    span{
        padding: 0 15px;
        color: red;
        display: none;

        @media screen and (max-width: 550px){
            font-size: 16px;
            padding: 0;
        }
    }
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 60px;
    width:125px;
    padding: 16px 20px;
    border-radius: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size:18px;
    background-color: #444444;
    color: white;
`

function Carrer() {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [info, setInfo] = useState<string>("")
    const [select, setSelect] = useState<string>("")

    const [focused, setFocused] = useState<boolean>(true)

    const form = useRef<HTMLFormElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Name: ${name},Mail: ${email}, Info: ${info}, Select: ${select} `)
        form.current?.reset();
        setName("");
        setEmail("");
        setInfo("");
        setSelect("");
    }


    return (
        <MainContainer>
            <Form onSubmit={handleSubmit} ref={form}>
                <h1>Apply For Job</h1>
                <Top>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <span>Required</span>
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span>Required</span>
                    </div>
                </Top>
                <Center>
                    <button>Upload CV/Resume</button>
                    <span>Minimum file size 5MB</span>
                </Center>
                <Bottom>
                    <textarea
                        placeholder="Tell us something about yourself"
                        onChange={(e) => setInfo(e.target.value)}
                    />
                    <div>
                        <select
                            onChange={(e) => setSelect(e.target.value)}
                            required
                        >
                            <option value="" disabled selected hidden>How did you hear about the position?</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="LinmkedIn">LinkedIn</option>
                            <option value="Word of mouth">Word of mouth</option>
                            <option value="Other">Other</option>
                        </select>
                        <span>Required</span>
                    </div>
                </Bottom>
                <Button>
                    <HiIcons.HiOutlineChevronRight />
                    Apply
                </Button>
            </Form>
        </MainContainer>
    )
}

export default Carrer
