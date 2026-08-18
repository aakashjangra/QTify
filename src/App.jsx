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
      />

      <Section
        title="New Albums"
        endpoint="/albums/new"
      />
    </>
  );
}

export default App;