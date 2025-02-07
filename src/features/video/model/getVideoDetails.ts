import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * Форматирует количество просмотров в сокращенном виде (например, 39 тыс.)
 * @param views - Количество просмотров
 * @returns Сформатированное количество просмотров
 */
const formatViews = (views: number): string => {
  if (views >= 1_000_000) {
    return (views / 1_000_000).toFixed(1) + ' млн';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + ' тыс.';
  }
  return views.toString();
};

/**
 * Получает информацию о видео: заголовок, название канала, просмотры и дату публикации.
 * @param videoId - ID видео YouTube
 * @returns Объект с title, channelName, views и publishedAt или null в случае ошибки
 */
export const getVideoDetails = async (videoId: string): Promise<{ title: string; channelName: string; views: string; publishedAt: string } | null> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
    );
    const data = await response.json();

    const video = data?.items?.[0];
    if (!video) {
      console.warn('Видео не найдено');
      return null;
    }

    const title = video.snippet.title;
    const channelName = video.snippet.channelTitle; // Название канала
    const views = formatViews(Number(video.statistics.viewCount)); // Форматируем количество просмотров
    const publishedAt = formatDistanceToNow(new Date(video.snippet.publishedAt), { addSuffix: true, locale: ru });

    return {
      title,
      channelName,
      views,
      publishedAt,
    };
  } catch (error) {
    console.error('Ошибка при получении данных о видео:', error);
    return null;
  }
};
