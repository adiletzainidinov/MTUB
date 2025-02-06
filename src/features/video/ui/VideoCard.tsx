import styled from 'styled-components';

export type VideoCardProps = {
  id?: string; // YouTube video ID
  title?: string;
  thumbnail?: string;
  duration?: string;
};

export const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  thumbnail,
  duration,
}) => {
  // Если thumbnail не передан, автоматически получаем превью от YouTube
  const preview =
    thumbnail || (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '');

  return (
    <VideoCardContainer>
      <VideoCardPreviev className="relative">
        <img className="previev" src={preview} alt={title} />
        {duration && <span className="duration">{duration}</span>}
      </VideoCardPreviev>
      <div className="p-2">
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
    </VideoCardContainer>
  );
};

const VideoCardContainer = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
`;

const VideoCardPreviev = styled.div`
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
