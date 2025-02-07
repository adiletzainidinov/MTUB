import React, { useEffect, useState } from 'react';
import { getVideoDuration } from '../../../features/video/model/getVideoDuration';
import { Button } from '../../../shared/ui/Button/Button';
import { VideoCard } from '../../../features/video/ui/VideoCard';
import { getChannelLogo } from '../../../features/video/model/getChannelLogo';
import { getVideoDetails } from '../../../features/video/model/getVideoDetails';

export type VideoId = {
  videoId: string; // YouTube video ID
};

const HomePage: React.FC<VideoId> = ({ videoId }) => {
  const [duration, setDuration] = useState<string>('');
  const [channelLogo, setChannelLogo] = useState<string>('');
  const [videoDetails, setVideoDetails] = useState<{
    title: string;
    views: string;
    publishedAt: string;
    channelName: string;
  } | null>(null);

  useEffect(() => {
    const fetchDuration = async () => {
      const videoDuration = await getVideoDuration(videoId); // ID видео
      setDuration(videoDuration);

      const logoUrl = await getChannelLogo(videoId);
      setChannelLogo(logoUrl);

      const details = await getVideoDetails(videoId);
      setVideoDetails(details); // Теперь всё корректно
    };

    fetchDuration();
  }, [videoId]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button>Все</Button>
      <VideoCard
        id={videoId}
        title="Новый СБОРНИК | Мультфильм NUSSA 21-30 серии | 43 минуты | Нусса и Рара 43 минуты | Нусса и Рара"
        duration={duration}
        channelLogo={channelLogo}
        videoDetailsTitle={videoDetails?.title || 'Загрузка...'}
        videoDetailsChannelName={videoDetails?.channelName || 'Загрузка...'}
        videoDetailsViews={videoDetails?.views || 'Загрузка...'}
        videoDetailsPublishedAt={videoDetails?.publishedAt || 'Загрузка...'}
      />
    </div>
  );
};

export default HomePage;
