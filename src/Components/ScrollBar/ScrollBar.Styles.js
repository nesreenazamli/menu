import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledLink = styled(Link)`

  ${({ active }) =>
    active &&
    `
background: red;
`}
`;
