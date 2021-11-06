import { FlexBox, InnerSection } from '../../App.Styles'

import { SearchBox, SearchInput, StyledSearchIcon } from './Search.Styles'

export default function Search() {
    return (
        <InnerSection>
            <SearchBox>
            <SearchInput
              type="text"
              placeholder="Search What You Want... "
            />
             
            <StyledSearchIcon/>  
            </SearchBox>
             
        </InnerSection>
    )
}
