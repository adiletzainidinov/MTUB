import styled from 'styled-components';
import { theme } from '../../../shared/config/theme/theme';
import More from '../../../assets/svgs/More.svg';

export type VideoCardProps = {
  id?: string; // YouTube video ID
  title?: string;
  thumbnail?: string;
  duration?: string;
  channelLogo?: string;
  videoDetailsTitle?: string;
  videoDetailsChannelName?: string;
  videoDetailsViews?: string;
  videoDetailsPublishedAt?: string;
};

export const VideoCard: React.FC<VideoCardProps> = ({
  id,
  videoDetailsTitle,
  thumbnail,
  duration,
  channelLogo,
  videoDetailsChannelName,
  title,
  videoDetailsViews,
  videoDetailsPublishedAt,
}) => {
  // Если thumbnail не передан, автоматически получаем превью от YouTube
  const preview =
    thumbnail || (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '');

  const maxTitleLength = 42;
  const truncatedTitle =
    videoDetailsTitle && videoDetailsTitle.length > maxTitleLength
      ? videoDetailsTitle.substring(0, maxTitleLength) + '...'
      : videoDetailsTitle;

  const maxSubTitleLength = 42;
  const truncatedSubTitle =
    videoDetailsChannelName && videoDetailsViews && videoDetailsPublishedAt
      ? `${videoDetailsChannelName} • ${videoDetailsViews} • ${videoDetailsPublishedAt}`.substring(
          0,
          maxSubTitleLength
        )
      : '';

  return (
    <VideoCardContainer>
      <VideoCardPreviev className="relative">
        <img className="previev" src={preview} alt={title} />
        {duration && <span className="duration">{duration}</span>}
      </VideoCardPreviev>
      <AboutVideoContainer>
        <ChennelLogo>
          <div className="circle">
            <img src={channelLogo} alt="" />
          </div>
        </ChennelLogo>
        <VideoDescription>
          <p className="title">{truncatedTitle} </p>
          <p className="subTitle">{truncatedSubTitle}</p>
        </VideoDescription>
        <VideoSetting>
          <img src={More} alt="More" className="more" />
        </VideoSetting>
      </AboutVideoContainer>
    </VideoCardContainer>
  );
};

const VideoCardContainer = styled.div`
  width: 100%;
  max-width: 480px; /* Ограничение максимальной ширины */
  display: flex;
  flex-direction: column;
  margin: 0 auto; /* Центрирует контейнер */
`;

const VideoCardPreviev = styled.div`
  width: 100%; /* Ширина 100% от родительского элемента */
  padding-top: 56.25%; /* 16:9 aspect ratio (9 / 16 = 0.5625) */
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* Ширина 100% от родительского контейнера */
    height: 100%; /* Высота 100% от контейнера, сохраняя пропорции */
    object-fit: cover; /* Обрезка изображения по пропорциям */
  }

  span {
    position: absolute;
    bottom: 8px;
    right: 8px;
    z-index: 2;
    color: white;
    background-color: rgba(15, 15, 15, 0.8);
    padding: 6px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
  }
`;

const AboutVideoContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70px;
  display: flex;
  padding: 10px;
`;

const ChennelLogo = styled.div`
  width: 52px; /* фиксированная ширина для логотипа */
  .circle {
    border-radius: 100%;
    margin-top: 12px;
    margin-left: 12px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }
  }
`;

const VideoDescription = styled.div`
  width: 100%;
  padding: 12px 10px 0;
  .title {
    font-size: 16px;
    color: ${theme.palette.primary.black};
    font-weight: 400;
    line-height: 112%;
    width: 100%;
    max-width: 360px;
  }
  .subTitle {
    font-size: 12px;
    color: ${theme.palette.primary.lightGray};
    line-height: 1.2;
    margin-top: 4px;
    font-weight: 400;
  }
`;

const VideoSetting = styled.div`
  width: 100%;
  max-width: 68px;
  display: flex;
  align-items: start;
  justify-content: end;
  .more {
    margin-top: 11px;
    margin-right: 5px;
  }
`;
