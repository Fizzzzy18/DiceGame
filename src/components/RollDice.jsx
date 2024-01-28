import styled from "styled-components";

const RollDice = ({ rollDice, currentDice }) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
               <img src={`/dice/dice_${currentDice}.png`} />

      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;

  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
