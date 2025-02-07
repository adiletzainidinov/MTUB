import HomePage from '../pages/HomePage/ui/HomePage';
import SearchBarReused from '../shared/ui/SearchBar/SearchBarReused';

const App = () => {
  const videoId = 'OPVEbGrd4ps'; // ID видео

  return (
    <>
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
      >
        <SearchBarReused />
        <HomePage videoId={videoId} />
      </div>
    </>
  );
};

export default App;
