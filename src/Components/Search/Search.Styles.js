import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { FlexBox } from "../../App.Styles";

export const SearchBox = styled(FlexBox)`
background: #fafafa;
border-radius: 20px;
overflow: hidden;
width: 70%;
margin:30px 0 20px 60px;
opacity: .5;
border:1px solid #fafafa;
box-shadow: 0 0 3px 3px #ddd;
border-radius: 25px;
`

export const SearchInput = styled("input")`
height: 40px;
width: 100%;
/* background: #ffffff 0% 0% no-repeat padding-box; */
background: #fafafa;
border-radius: 6px;
opacity: 1;
border: none;
padding: 12px 26px;

&:focus {
  outline: none;
  /* border: none; */
}
::placeholder {
  font-size: 13px;
  color: #000;

}
`;

export const StyledSearchIcon = styled(SearchIcon)`
  font-size: 18;
  margin-top: 8px;
  margin-right: 20px;
`;
