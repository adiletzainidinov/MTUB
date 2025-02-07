import styled from 'styled-components';
import LogoMTUBE from '../../../assets/svgs/LogoMTUB.svg';
import More from '../../../assets/svgs/More.svg';

const SearchBarReused = () => {
  return (
    <>
      <SearchContainer>
        <SearchPapa>
          <SearchLeft>
            <img src={LogoMTUBE} alt="LogoMTUBE" />
          </SearchLeft>
          <SearchRight>
            <img src={More} alt="More" />
          </SearchRight>
        </SearchPapa>
      </SearchContainer>
    </>
  );
};

export default SearchBarReused;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 12px;
  background-color: #d8d8d8;
`;

const SearchPapa = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SearchLeft = styled.div``;

const SearchRight = styled.div``;
