export const getVideoDuration = async (videoId: string) => {
    const apiKey = 'AIzaSyANMoke-_oKSQmCRCPl3ZONb9k8QYUWS7c';  // Ваш API ключ
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=contentDetails`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.items && data.items.length > 0) {
        const duration = data.items[0].contentDetails.duration;
  
        const match = duration.match(/PT(\d+)M(\d+)S/);
        if (match) {
          const minutes = match[1];
          let seconds = match[2];
          
          // Добавляем ведущий ноль, если секунд меньше 10
          if (parseInt(seconds) < 10) {
            seconds = `0${seconds}`;
          }
  
          return `${minutes}:${seconds}`;
        }
      }
  
      return '00:00';
    } catch (error) {
      console.error('Error fetching video duration:', error);
      return '00:00';
    }
  };
  