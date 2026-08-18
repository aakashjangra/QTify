import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Section
        title="Top Albums"
        endpoint="/albums/top"
        showAll
      />

      <Section
        title="New Albums"
        endpoint="/albums/new"
        showAll
      />

      <Section
        title="Songs"
        endpoint="/songs"
        showAll={false}
        isSongSection
      />
    </>
  );
}

export default App;