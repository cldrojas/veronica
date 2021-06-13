<script>
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import Services from "./components/Services.svelte";
  import About from "./components/About.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<main>
  <Header />
  <Hero />
  <Services />
  <About />
  <Footer />
</main>

<style>
  :root {
    margin: 0;
    padding: 0;
    font-size: large;
    background-color: var(--white);
    color: var(--white);
    --white: #fff8dc;
    --morado: #8c30f5;
    --morado-dark: #6426ac;
    --morado-darker: #310244;
  }

  main {
    margin: 0 auto;
    display: grid;
    gap: 30px;
  }
</style>
