import { useEffect, useState } from "react"
import styled from "styled-components"

type CommentType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

type CommentTypes = Array<CommentType>

const MainContainer = styled.div`
    /* padding: 2% 10%; */
    background-color: ${(props) => (props.theme.body)};
    color: ${(props) => (props.theme.text)};
`

const Container = styled.div`
    width: 70%;
    margin: 0px auto;
    padding: 20px 0;

    h1{
        text-align: center;
        font-size: 4em;
        padding-bottom: 0.8em;

        &::after{
            content: "";
            border: 4px solid ${(props) => (props.theme.text)};
            display: block;
            margin: 0px auto;
            width: 5em;
        }
    }
`

const Loading = styled.div`
    padding-bottom: 300px;
`
const ErrorMessage = styled.div`
    padding-bottom: 300px;
`
const CommentContainer = styled.div`
    border: 1px solid ${(props) => (props.theme.text)};
    border-radius: 5px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 20px 0;
    background-color: ${(props) => (props.theme.background)};
    font-size: 18px;
`

const CommentPersonal = styled.div`
    width: 30%;
    color: ${(props) => (props.theme.text)};
`
const CommentTopic = styled.div`
    margin-bottom: 10px;
`

const CommentEmail = styled.div`
    margin-bottom: 20px;
`
const Image = styled.img`
    width: 100%;
`

const CommentBody = styled.div`
    width: 60%;
    margin: 0px auto;
`

function Forum() {

    const [error, setError] = useState<null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [comments, setComments] = useState<CommentTypes>([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error("Something went wrong...");
                }
            })
            .then((json) => {
                setComments(json);
                setError(null)
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setIsLoading(false)
            })
    }, [])

    return (
        <MainContainer>
            <Container>
                <h1>Forum</h1>
                {isLoading && <Loading>Comments are loading...</Loading>}
                {comments &&
                    comments.slice(0, 20).map((comment) => {
                        return (
                            <CommentContainer key={comment.id}>
                                <CommentPersonal>
                                    <CommentTopic>
                                        <strong>Topic:</strong>
                                        <span>{comment.name}</span>
                                    </CommentTopic>
                                    <CommentEmail>
                                        <strong>Email:</strong>
                                        <span>{comment.email}</span>
                                    </CommentEmail>
                                    <Image />
                                </CommentPersonal>
                                <CommentBody>{comment.body}</CommentBody>
                            </CommentContainer>
                        )
                    })}
                {error && <ErrorMessage>Soomething went wrong...</ErrorMessage>}
            </Container>
        </MainContainer>
    )
}

export default Forum
