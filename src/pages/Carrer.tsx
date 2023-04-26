import { useState } from "react"
import styled from "styled-components"
import * as HiIcons from "react-icons/hi"

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
    transform:translate(-50%, -50%);
    width: 80%;
    height: 550px;
    border: 1px solid black;
    border-radius: 40px;
    padding: 5em 7em;
    background-color:rgba(254, 189, 48, 0.89); 

    h1{
        font-size: 3em;
    }
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 2em 0;

    input{
        width: 700px;
        height:40px;
        outline: none;
        border: none;
        padding-left: 20px;
        background-color:inherit;  
        border-bottom: 1px solid black;
        font-size: 18px;

         &::placeholder{
            color: black;
        }    
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
        height:40px;
        outline: none;
        border: none;
        padding-left: 20px;
        background-color:inherit;  
        border-bottom: 1px solid black;
        font-size: 18px;
        overflow: hidden;

        &::placeholder{
            color: black;
        }    
    }

    select{
        width: 100%;
        height:40px;
        outline: none;
        border: none;
        padding-left: 20px;
        background-color:inherit;  
        border-bottom: 1px solid black;
        font-size: 18px;
        cursor: pointer;
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


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }


    return (
        <MainContainer>
            <Form>
                <h1>Apply For Job</h1>
                <Top>
                    <input
                        type="text"
                        placeholder="Name"
                        pattern="^[A-Za-z]{3,16}?$"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                    />
                </Top>
                <Center>
                    <button>Upload CV/Resume</button>
                    <span>Minimum file size 5MB</span>
                </Center>
                <Bottom>
                    <textarea
                        placeholder="Tell us something about yourself"
                    />
                    <select>
                        <option>Facebook</option>
                        <option>Instagram</option>
                        <option>LinkedIn</option>
                        <option>Word of mouth</option>
                        <option>Other</option>
                    </select>
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
