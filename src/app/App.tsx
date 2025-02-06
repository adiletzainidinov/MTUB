import { useEffect, useState } from 'react';
import { getVideoDuration } from '../features/video/model/getVideoDuration';
import { Button } from '../shared/ui/Button/Button';
import { VideoCard } from '../features/video/ui/VideoCard';

const App = () => {
  const [duration, setDuration] = useState<string>('');

  useEffect(() => {
    const fetchDuration = async () => {
      const videoDuration = await getVideoDuration('OPVEbGrd4ps');  // ID видео
      setDuration(videoDuration);
    };

    fetchDuration();
  }, []);

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
        id="OPVEbGrd4ps"
        title="Как изучать FSD?"
        duration={duration}
      />
    </div>
  );
};

export default App;
