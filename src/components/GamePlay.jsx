import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import Rules from "./Rules";

import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";

import { useState } from "react";
import styled from "styled-components";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
const [error,setError]= useState("");

const [showRules,setshowRules] = useState(false);



  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if(!selectedNumber){
           setError("Select a number to continue")

      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);




    if(selectedNumber===randomNumber){
      setScore((prev) => prev + randomNumber);
    }
   else{
    setScore((prev) => prev - 2);
   }


setSelectedNumber(undefined);



  };

const resetScore = () => {
  setScore(0);
};





  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
         <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
         <Button onClick={() => setshowRules(prev => !prev)}>
            {showRules ? "Hide" : "Show"}Rules


         </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;OutlineButton

const MainContainer = styled.main`
  padding-top: 70px;
  
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`;
