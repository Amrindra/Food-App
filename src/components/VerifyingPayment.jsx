import React from "react";
import { GridLoader, PulseLoader } from "react-spinners";
import styled from "styled-components";

const VerifyingPayment = () => {
  return (
    <PaymentStyled>
      <Wrapper>
        <Top>
          <h6>Verifying payment</h6>
          <PulseLoader color="#313131" size={3} />
        </Top>

        <div>
          <GridLoader color="#36d7b7" margin={5} />
        </div>
      </Wrapper>
    </PaymentStyled>
  );
};

const PaymentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 300px;
  height: 300px;
  margin-top: 100px;
  text-align: center;
  border-radius: 5px;

  div {
    margin-top: 2rem;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  h6 {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export default VerifyingPayment;
