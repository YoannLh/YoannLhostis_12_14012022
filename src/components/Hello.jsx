import { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../context/Context'
import styled from "styled-components"

const StyledHello = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const StyledHelloFirstName = styled.p`
    font-size: 3em;
`

const StyledFirstName = styled.span`
    color: red;
`

const StyledCongrats = styled.p`
    margin-top: 2%;
`

function Board() {
    const { value } = useContext(ThemeContext)
    const [firstname, setFirstname] = useState() 

    useEffect(() => {
        if(!value.userInfos) return
        const getFirstName = async () => {
            setFirstname(await value.userInfos.firstName)
        }
        getFirstName();
    }, [value]);
    
    return(
        <StyledHello>
            <StyledHelloFirstName>Hello <StyledFirstName>{firstname}</StyledFirstName></StyledHelloFirstName>
            <StyledCongrats>Félicitations ! Vous avez explosé vos objectifs hier 👏 </StyledCongrats>
        </StyledHello>
    )
}

export default Board