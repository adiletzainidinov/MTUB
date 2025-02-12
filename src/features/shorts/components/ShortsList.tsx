import styled from 'styled-components';
import ShortFill from './../../../assets/svgs/Short_Fill.svg';
import More from './../../../assets/svgs/More.svg';
import { theme } from '../../../shared/config/theme/theme';
import ShortCard from './ShortCard';
import { useEffect, useState } from 'react';
import { fetchShortById } from '../api/youtubeShorts';

interface Short {
    id: string;
    thumbnail: string;
    description: string;
  }
  
  const ShortsList = ({ videoIds }: { videoIds: string[] }) => {
    const [shorts, setShorts] = useState<Short[] | null>(null);
  
    useEffect(() => {
      const loadShorts = async () => {
        const shortData = await Promise.all(
          videoIds.map((videoId) => fetchShortById(videoId))
        );
        
        const filteredShortData = shortData.filter((short) => short !== null) as Short[];
        setShorts(filteredShortData);
      };
      loadShorts();
    }, [videoIds]);
  
    return (
      <ShortListContainer>
        <ShortListTop>
          <div className="shortsLogoContainer">
            <img src={ShortFill} alt="ShortFill" />
            <p className="shortsText">Shorts</p>
          </div>
          <div>
            <img src={More} alt="More" />
          </div>
        </ShortListTop>
  
        <ShortListBottom>
          {shorts ? (
            shorts.map((short) => (
              <div key={short.id}>
                <ShortCard thumbnail={short.thumbnail} description={short.description} />
              </div>
            ))
          ) : (
            <p>Загрузка...</p>
          )}
        </ShortListBottom>
      </ShortListContainer>
    );
  };
  
  export default ShortsList;
  

const ShortListContainer = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: ${theme.palette.primary.white};
  margin-bottom: 20px;
`;

const ShortListTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  align-items: center;

  .shortsLogoContainer {
    display: flex;
    align-items: center;
  }

  .shortsText {
    font-weight: 500;
    font-size: 16px;
    margin-left: 8px;
  }
`;

const ShortListBottom = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto; /* Добавляем горизонтальный скролл */
  white-space: nowrap; /* Запрещаем перенос элементов */
  scrollbar-width: none; /* Убираем стандартный скролл (Firefox) */
  -ms-overflow-style: none; /* Убираем стандартный скролл (IE/Edge) */

  &::-webkit-scrollbar {
    display: none; /* Убираем стандартный скролл (Chrome/Safari) */
  }
`;
