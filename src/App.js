import React, { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        {people.length > 0 && (
          <button onClick={() => setPeople([])}>Clear all</button>
        )}
        {people.length === 0 && (
          <button onClick={() => setPeople(data)}>Get all</button>
        )}
      </section>
    </main>
  );
}

export default App;
