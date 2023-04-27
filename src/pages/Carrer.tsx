import { useRef, useState } from "react"
import styled from "styled-components"
import * as HiIcons from "react-icons/hi"

type Props = {
    focused?: boolean;
}

const MainContainer = styled.div`
    margin-bottom: 700px;
`

const Form = styled.form`
    display:flex;
    justify-content:center;
    flex-direction: column;
    position: absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%, -45%);
    width: 80%;
    height: 600px;
    border: 1px solid black;
    border-radius: 40px;
    padding: 5em 7em;
    background-color:rgba(254, 189, 48, 0.89); 

    h1{
        font-size: 3em;
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
        border-bottom: 1px solid black;
        font-size: 18px;

         &::placeholder{
            color: black;
        }
        
        &:invalid {
            border-bottom: 1px solid red;
        }

        &:invalid~span{
            display: block;
        }
    }

    span{
        padding: 0px 15px;
        color: red;
        display: none
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
        border: 1px solid black;
        border-radius: 16px;
        cursor: pointer;

        &:hover{
            background-color: rgba(255,255,255,0.2);
        }
    }

    span{
        padding-top: 10px;
        font-size: 14px;
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
        border-bottom: 1px solid black;
        font-size: 18px;
        resize: none;
        overflow: hidden;

        &::placeholder{
            color: black;
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
        border-bottom: 1px solid black;
        font-size: 18px;
        cursor: pointer;

        &:invalid{
            border-bottom: 1px solid red;
        }

        &:invalid~span{
            display: block;
        }
    }
    
    span{
        padding: 0 15px;
        color: red;
        display: none;
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

    const [focused, setFocused] = useState<boolean>(false)

    const form = useRef<HTMLFormElement>(null)

    const handleFocus = () => {
        setFocused(true)
    }

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
                            onBlur={handleFocus}
                            required
                        />
                        <span>Required</span>
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={handleFocus}
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
                            onBlur={handleFocus}
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
