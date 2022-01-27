import styled from "styled-components"

const StyledContainerError = styled.div`
    display: flex;
    width: 100%:
    height: 100%;
    margin-top: 300px;
`

const StyledErrorMessage = styled.p`
    margin: auto;
`

/**
 * Component
 * Render StyledContainerError containing StyledErrorMessage containing a error message
 */
function Error() {
    return(
        <StyledContainerError>
            <StyledErrorMessage>Erreur 404, cette ressource est introuvable :/</StyledErrorMessage>
        </StyledContainerError>
    )
}

export default Error