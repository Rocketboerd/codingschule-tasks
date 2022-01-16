import React, {useState} from 'react'
import styled from 'styled-components'

function Login({setUser}) {
    const [username, setUsername] = useState("")

    function handleLogin(e) {
        console.log(username)
        setUser(username)
    }

    return (
        <LoginContainer>
            <Input placeholder='Benutzername' value={username} onChange={(e) => setUsername(e.target.value)}></Input>
            <Button onClick={handleLogin}>Rein da!</Button>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
grid-area: Main;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
`

const Button = styled.div`
    background-color: #FF5C5C;
    padding: 5px 15px;
    border-radius: 5px;
    color: white;
    font-size: 0.8em;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #113044;
    }
`

const Input = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 15px;
    border-radius: 5px;
    width: 70%;    
`