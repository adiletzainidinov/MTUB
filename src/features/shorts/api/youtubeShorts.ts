const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchShortById = async (videoId: string) => {
  const endpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Ошибка при выполнении запроса');
    }
    const data = await response.json();

    if (data.items.length === 0) {
      throw new Error('Видео не найдено');
    }

    const item = data.items[0];
    console.log(item);

    return {
      id: item.id,
      thumbnail: item.snippet.thumbnails.high.url,
      description:item.snippet.localized?.description || item.snippet.localized?.title || item.snippet.description || ''
    };
  } catch (error) {
    console.error('Ошибка получения видео:', error);
    return null;
  }
};
