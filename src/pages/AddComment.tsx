import { useRef, useState } from "react"
import styled from "styled-components"

const MainContainer = styled.div`
    background-color: ${(props) => (props.theme.body)};
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    gap: 20px;
    color: ${(props) => (props.theme.text)};

    div{
        display: flex;
        flex-direction: column;
        gap: 5px;

        label{
            font-size: 18px;
        }
    }

    h1{
        text-align: center;
        font-size: 4em;
        padding-bottom: 0.5em;

        &::after{
            content: "";
            border: 4px solid ${(props) => (props.theme.text)};
            display: block;
            margin: 0px auto;
            width: 5em;
        }

        @media screen and (max-width:500px) {
            font-size: 3em;
        }
    }
`
const Input = styled.input`
    width: 500px;
    height: 40px;
    padding-left: 10px;
    border: 1px solid ${(props) => (props.theme.text)};
    background-color: ${(props) => (props.theme.headerBackground)};
    color: ${(props) => (props.theme.text)};
    font-size: 18px;
    border-radius: 4px;

    @media screen and (max-width: 550px){
        width: 350px;
    }
`
const TextArea = styled.textarea`
    width: 500px;
    height: 100px;
    padding: 10px;
    border: 1px solid ${(props) => (props.theme.text)};
    background-color: ${(props) => (props.theme.headerBackground)};
    color: ${(props) => (props.theme.text)};
    font-size: 18px;
    border-radius: 4px;
    resize: none;

    @media screen and (max-width: 550px){
        width: 350px;
    }
`

const Button = styled.button`
    width: 150px;
    height: 45px;
    border: none;
    outline: none;
    background-color: ${(props) => (props.theme.background)};
    color: ${(props) => (props.theme.text)};
    font-size: 12px;
    text-transform:uppercase;
    font-weight:700;
    letter-spacing: 5px;
    cursor:pointer;
`

function AddComment() {

    const [topic, setTopic] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [body, setBody] = useState<string>("")

    const form = useRef<HTMLFormElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Title: ${topic}, Email: ${email}, Body: ${body}`)

        const comment = { topic, email, body };

        fetch(" https://jsonplaceholder.typicode.com/comments", {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(comment)
        }).then(() => {
            console.log("new comment added");
        })

        setBody("");
        setEmail("");
        setTopic("");
        form.current?.reset();
    }

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit} ref={form}>
                <h1>Add your comment</h1>
                <div>
                    <label>Topic:</label>
                    <Input
                        type="text"
                        onChange={(e) => setTopic(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <Input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Body:</label>
                    <TextArea
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>
                <Button>Send comment</Button>
            </Form>
        </MainContainer>
    )
}

export default AddComment