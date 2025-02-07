import VideoCardReused, {
  VideoId,
} from '../../../widgets/videoCard/ui/VideoCardReused';

const HomePage: React.FC<VideoId> = ({ videoId }) => {
  return (
    <>
      <div>
        <VideoCardReused videoId={videoId} />
      </div>
    </>
  );
};

export default HomePage;
