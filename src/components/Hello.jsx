import { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../context/Context'
import styled from "styled-components"
import { PropTypes } from 'prop-types'
import { string } from 'prop-types'

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

/**
 * Component
 * Render StyledHello containing "Hello" + firstname and StyledCongrats (some text)
 */
function Hello() {
    const { value } = useContext(ThemeContext)
    const [firstname, setFirstname] = useState() 

    useEffect(() => {
        if(!value.userInfos) return
        const getFirstName = async () => {
            setFirstname(await value.userInfos.firstName)
        }
        getFirstName();
    }, [value])
    
    return(
        <StyledHello>
            <StyledHelloFirstName>Hello <StyledFirstName>{firstname}</StyledFirstName></StyledHelloFirstName>
            <StyledCongrats>Félicitations ! Vous avez explosé vos objectifs hier 👏 </StyledCongrats>
        </StyledHello>
    )
}

export default Hello