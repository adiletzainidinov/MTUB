import CategoryFilter from '../../../features/category-filter/ui/CategoryFilter';
import ShortsList from '../../../features/shorts/components/ShortsList';
import { theme } from '../../../shared/config/theme/theme';
import SearchBarReused from '../../../shared/ui/SearchBar/SearchBarReused';
import VideoCardReused, {
  VideoId,
} from '../../../widgets/videoCard/ui/VideoCardReused';
interface ShortDataType {
  id: number;
  videoId: string;
}

const ShortsData: ShortDataType[] = [
  { id: 1, videoId: '5354YULvzAA' },
  { id: 2, videoId: 'GYxCzfJY_v8' },
  { id: 3, videoId: 'irVm2wuf8rk' },
  { id: 4, videoId: 'M3Vlv8fJagE' },
  { id: 5, videoId: 'WAwBFUInRMg' },
  { id: 6, videoId: 'oNJhlxs1hks' },
  { id: 7, videoId: 'sK8KxqjME7s' },
  { id: 8, videoId: 'oD8SFo0SDeY' },
  { id: 9, videoId: '_cQnZMI99xY' },
  { id: 10, videoId: 'Rqvn43f6EoY' },
];

const videoIdAllTop = [
  { id: 1, nameId: 'OPVEbGrd4ps' },
];

const videoIdAllBottom = [
  { id: 1, nameId: '7cBCmXyRSGs' },
  { id: 2, nameId: 'krU76ZlKbgk' },
  { id: 3, nameId: '_BppX0cD4H8' },
  { id: 4, nameId: 'HG4yCJCWzS4' },
  { id: 5, nameId: 'Bc_Bf6W8jHE' },
  { id: 6, nameId: '5Q3xc3AnaFA' },
  { id: 7, nameId: '3PN8FEY6LUs' },
  { id: 8, nameId: 'YrbJFk441m0' },
  { id: 9, nameId: 'dYmQaG1UYk4' },
  { id: 10, nameId: 'mz4PB1S_6y8' },
];

const HomePage: React.FC<VideoId> = () => {
  const videoIds = ShortsData.map((short) => short.videoId);

  return (
    <>
      <div>
        <SearchBarReused />
        <div
          style={{
            width: '100%',
            height: 1,
            backgroundColor: `${theme.palette.primary.lightGray}`,
          }}
        />
        <CategoryFilter />
        {/* Отображаем VideoCardReused для каждого videoId */}
        {videoIdAllTop.map((item) => (
          <VideoCardReused key={item.id} videoId={item.nameId} />
        ))}{' '}
        <ShortsList videoIds={videoIds} />
        {/* Отображаем VideoCardReused для каждого videoId */}
        {videoIdAllBottom.map((item) => (
          <VideoCardReused key={item.id} videoId={item.nameId} />
        ))}{' '}
      </div>
    </>
  );
};

export default HomePage;

