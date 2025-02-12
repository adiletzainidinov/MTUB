import styled from 'styled-components';
import MoreWhite from '../../../assets/svgs/MoreWhite.svg';
import { theme } from '../../../shared/config/theme/theme';

interface ShortCardProps {
  thumbnail: string;
  description: string;
}

const ShortCard = ({ thumbnail, description }: ShortCardProps) => {
  return (
    <ShortListCard style={{ backgroundImage: `url(${thumbnail})` }}>
      <CardHeader>
        <img src={MoreWhite} alt="MoreWhite" />
      </CardHeader>
      <CardOverlay>
        <CardText>
          <p>{description}</p>
        </CardText>
      </CardOverlay>
    </ShortListCard>
  );
};

export default ShortCard;

const ShortListCard = styled.div`
  flex-shrink: 0;
  width: 160px;
  height: 264px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

// Блок для иконки More, размещён вверху карточки
const CardHeader = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
`;

// Полупрозрачный оверлей для нижней части карточки
const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5); /* тёмный полупрозрачный фон */
  padding: 8px;
`;

// Блок с описанием
const CardText = styled.div`
  p {
    margin: 0;
    font-weight: 400;
    line-height: 1.2;
    font-size: 14px;
    color: ${theme.palette.primary.white};
    /* Если требуется обрезать длинный текст, можно добавить: */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
