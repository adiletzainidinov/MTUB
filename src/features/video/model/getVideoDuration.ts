export const getVideoDuration = async (videoId: string) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=contentDetails`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const duration = data.items[0].contentDetails.duration;

      const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
      if (match) {
        const hours = match[1] ? parseInt(match[1]) : 0;
        const minutes = match[2] ? parseInt(match[2]) : 0;
        const seconds = match[3] ? parseInt(match[3]) : 0;

        // Форматирование значений
        const formattedHours = hours > 0 ? `${hours}:` : '';
        const formattedMinutes =
          hours > 0 ? String(minutes).padStart(2, '0') : String(minutes);
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
      }
    }

    return '00:00';
  } catch (error) {
    console.error('Error fetching video duration:', error);
    return '00:00';
  }
};
