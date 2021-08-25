import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 400px;
  border: 2px solid rgba(240, 240, 240, 1);
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 16px 16px 8px 0px;
  border-radius: 12px;
`;

export const DailyIncome = (props: any) => {
  return (
    <>
      <Container>
        <div style={{ float: "left", padding: "16px", border: 0, margin: 0 }}>
          <h2>Daily Income</h2>
        </div>
      </Container>
    </>
  );
};
