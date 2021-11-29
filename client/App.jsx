import React, { useEffect } from 'react';

function App() {

  const testFetch = async () => {
    const res = await fetch("/api/v0/test");
    console.log(await res.json());
  };

  useEffect(() => {
    document.title = "React App";
    testFetch();
  }, []);

  return (
    <div className="App">
      App Component
    </div>
  );
}

export default App;
