<script>
	import Header from "./components/Header.svelte";
	import Hero from "./components/Hero.svelte";
	import Services from "./components/Services.svelte";
	import About from "./components/About.svelte";
	import Footer from "./components/Footer.svelte";
</script>

<main class="App">
	<div class="App-content">
		<Header />
		<Hero />
		<Services />
		<About />
		<Footer />
	</div>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Pattaya&display=swap");
	.App {
		overflow: hidden;
		color: white;
	}
	.App-content {
		margin: 0 auto;
	}
</style>
