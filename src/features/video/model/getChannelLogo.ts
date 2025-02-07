const API_KEY = import.meta.env.VITE_API_KEY;
/**
 * Получает URL логотипа канала по YouTube Video ID.
 * @param videoId - ID видео YouTube
 * @returns URL логотипа канала или пустую строку в случае ошибки
 */
export const getChannelLogo = async (videoId: string): Promise<string> => {
  try {
    // 1. Получаем данные о видео (ищем channelId)
    const videoResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
    );
    const videoData = await videoResponse.json();
    const channelId = videoData?.items?.[0]?.snippet?.channelId;

    if (!channelId) {
      console.warn('Channel ID не найден');
      return '';
    }

    // 2. Получаем данные о канале (ищем логотип)
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`
    );
    const channelData = await channelResponse.json();
    const logoUrl = channelData?.items?.[0]?.snippet?.thumbnails?.default?.url;

    if (!logoUrl) {
      console.warn('Логотип канала не найден');
      return '';
    }

    return logoUrl;
  } catch (error) {
    console.error('Ошибка при получении логотипа канала:', error);
    return '';
  }
};
