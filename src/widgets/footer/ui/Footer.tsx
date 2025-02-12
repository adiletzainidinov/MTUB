import styled from 'styled-components';
import YouTubeHomeIconSvg from '../../../assets/svgs/YouTubeHomeIconSvg.svg';
import YouTubeShortsIconSvg from '../../../assets/svgs/YouTubeShortsIconSvg.svg';
import YouTubeYouIconSvg from '../../../assets/svgs/YouTubeYouIconSvg.svg';
import { theme } from '../../../shared/config/theme/theme';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterMain>
          <div className="home">
            <img src={YouTubeHomeIconSvg} alt="YouTubeHomeIconSvg" />
            <p className="homeText">Главная</p>
          </div>{' '}
        </FooterMain>
        <FooterShorts>
          <div className="shorts">
            <img src={YouTubeShortsIconSvg} alt="YouTubeShortsIconSvg" />
            <p className="shortsText">Shorts</p>
          </div>{' '}
        </FooterShorts>
        <FooterYou>
          <div className="you">
            <img src={YouTubeYouIconSvg} alt="YouTubeYouIconSvg" />
            <p className="youText">Вы</p>
          </div>{' '}
        </FooterYou>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  background-color: ${theme.palette.primary.white};
  width: 100%;
  max-width: 480px;
  z-index: 10000;

  p {
    font-size: 16px;
    font-weight: 400;
    color: ${theme.palette.primary.black};
    margin-top: 7px;
  }
`;

const FooterMain = styled.div`
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FooterShorts = styled.div`
  .shorts {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FooterYou = styled.div`
  .you {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
