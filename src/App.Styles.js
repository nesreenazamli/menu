import styled from "styled-components";

export const MainContainer = styled("main")`
  max-width: 1230px;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  flex-direction: column;
  margin: auto;
`;

export const Typography = styled("p")`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

export const FlexBox = styled("div")`
  display: flex;
  justify-content: start;
  align-items: start;
  height: auto;
  background: ${(props) => props.color};

  @media screen and (max-width: 1100px) {
    width: auto;
  }
`;

export const BackgroundedFlexBox = styled(FlexBox)`
  background: #000;
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const InnerSection = styled(FlexColumn)`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 6px solid #fcdd06;
  box-sizing: border-box;
  border-radius: 50%;
  border-top-color: #ddd;
  margin-top: 20%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const Line = styled("hr")`
  background-color: red;
  height: 60px;
`;
