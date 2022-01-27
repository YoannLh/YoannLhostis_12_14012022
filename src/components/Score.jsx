import styled from "styled-components"
import calorie from '../assets/images/calories-icon.svg'
import protein from '../assets/images/protein-icon.svg'
import carbohydrate from '../assets/images/carbs-icon.svg'
import lipid from '../assets/images/fat-icon.svg'
import PropTypes from "prop-types"

const StyledScore = styled.div`
    display: flex;
    width: 100%;
    background: #FBFBFB;
    border-radius: 5px;
    padding: 27px 0;
`

const StyledImg = styled.img`
    margin: auto 0 auto 10%;
`

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    height: 60px;
    justify-content: space-around;
    margin-left: 10%;
`

const StyledNumber = styled.p`
    font-size: 1.2em;
    font-weight: bold;
`

function Score({ type, value, unity, unit }) {
    return(
        <StyledScore>
            <StyledImg 
                src={
                    type === "calorie" ? calorie : null ||
                    type === "carbohydrate" ? carbohydrate : null ||
                    type === "proteine" ? protein : null ||
                    type === "lipide" ? lipid : null
                } 
            />
            <StyledDetails>
                <StyledNumber>{value}{unit}</StyledNumber>
                <p>{unity}</p>
            </StyledDetails>
        </StyledScore>
    )
}

Score.propTypes = {
    type: PropTypes.string,
    value: PropTypes.number,
    unity: PropTypes.string,
    unit: PropTypes.string
}

Score.defaultProps = {
    type: "unknow",
    value: 0,
    unity: "unités",
    unit: "unités" 
}

export default Score