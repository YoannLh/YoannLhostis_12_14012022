import { useState } from "react"
import { useContext, useEffect } from "react/cjs/react.development"
import styled from "styled-components"
import { ThemeContext } from '../context/Context'
import Score from './Score'

const StyledScores = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    width: 23.5%;
`

function Scores() {
    const { data } = useContext(ThemeContext)
    const [calorie, setCalorie] = useState()
    const [carbohydrate, setCarbohydrate] = useState()
    const [lipid, setLipid] = useState()
    const [protein, setProtein] = useState()

    useEffect(() => {
        const getData = async () => {
            setCalorie(await data.keyData.calorieCount)
            setCarbohydrate(await data.keyData.carbohydrateCount)
            setLipid(await data.keyData.lipidCount)
            setProtein(await data.keyData.proteinCount)
        }
        getData();
    }, [data])
    
    return(
        <StyledScores>
            <Score type={"calorie"} value={calorie} unity={"Calories"} />
            <Score type={"proteine"} value={protein} unity={"Proteines"} />
            <Score type={"carbohydrate"} value={carbohydrate} unity={"Glucides"} />
            <Score type={"lipide"} value={lipid} unity={"Lipides"} />
        </StyledScores>
    )
}

export default Scores