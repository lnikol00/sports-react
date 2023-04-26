import { useState } from "react"
import styled from "styled-components"
import * as HiIcons from "react-icons/hi"

const MainContainer = styled.div`
    margin-bottom: 2000px;
`

const Form = styled.form`
    position: absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%, -50%);
    width: 80%;
    height: 500px;
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
    
`
const Bottom = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 2em 0;

    input{
        width: 100%;
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

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 60px;
    padding: 12px 20px;
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
                    Ostavi posli za CV
                </Center>
                <Bottom>
                    <input
                        type="text"
                        placeholder="Tell us something about yourself"
                    />
                    Dodaj bolji select
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
