import AppRouter from './providers/routes/AppRouter';

const App = () => {
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
        <AppRouter />
      </div>
    </>
  );
};

export default App;
