import HomePage from "../pages/HomePage/ui/HomePage";

const App = () => {
  const videoId = 'OPVEbGrd4ps'; // ID видео

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HomePage videoId={videoId}/>
      </div>
    </>
  );
};

export default App;
