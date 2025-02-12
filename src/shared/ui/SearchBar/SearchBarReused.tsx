import styled from 'styled-components';
import LogoMTUBE from '../../../assets/svgs/LogoMTUB.svg';
import Search from '../../../assets/svgs/Search.svg';
import Notification from '../../../assets/svgs/Notification.svg';
import Settings from '../../../assets/svgs/Settings.svg';
import backArrow from '../../../assets/svgs/backArrow.svg';
import Morebold from '../../../assets/svgs/Morebold.svg';
import { theme } from '../../config/theme/theme';

export type SearchBarReused = {
  customVariant?: 'primary' | 'secondary' | 'Octonary' | 'Undenary' | 'Nonary';
  text?: string
};
theme
const SearchBarReused: React.FC<SearchBarReused> = ({ customVariant, text }) => {
  return (
    <>
      <SearchContainer>
        <SearchPapa>
          <SearchLeft>
            {customVariant === 'primary' ? (
              ''
            ) : customVariant === 'secondary' ? (
              <>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <img src={backArrow} alt="backArrow" />
                  <p style={{fontSize: 20, fontWeight: '400px', color: '#000000'}}>{text}</p>
                </div>
              </>
            ) : (
              <img src={LogoMTUBE} alt="LogoMTUBE" />
            )}
          </SearchLeft>
          <SearchRight>
            {customVariant === 'primary' ? (
              <>
                <div style={{ display: 'flex', gap: 16 }}>
                  <img src={Notification} alt="Notification" />
                  <img src={Search} alt="Search" />
                  <img src={Settings} alt="Settings" />
                </div>
              </>
            ) : customVariant === 'secondary' ? (
              <>
                <div style={{ display: 'flex', gap: 18 }}>
                  <img src={Search} alt="Search" />
                  <img src={Morebold} alt="Morebold" />
                </div>
              </>
            ) : (
              <img src={Search} alt="Search" />
            )}
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
  background-color: ${theme.palette.primary.white};
`;

const SearchPapa = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SearchLeft = styled.div``;

const SearchRight = styled.div``;
