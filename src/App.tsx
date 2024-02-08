function App() {
  const env = import.meta.env;
  return (
    <>
      <pre>{JSON.stringify(env, null, 2)}</pre>
    </>
  );
}

export default App;
