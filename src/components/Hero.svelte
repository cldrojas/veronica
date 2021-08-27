<div id="Hero" class="Hero">
	<div class="hero-content">
		<div class="hero-image" />
		<div class="hero-title">
			<h2>Hola!</h2>
			<h4>Mi nombre es Verónica Crespo</h4>
			<h5>Fisioterapeuta</h5>
		</div>
	</div>
</div>

<style>
	.Hero {
		color: var(--white);
	}

	.hero-content {
		height: 750px;
	}

	.hero-image {
		background-image: url("./img/bg-hero.jpeg");
		background-size: cover;
		height: 100%;
	}

	.hero-title {
		position: absolute;
		z-index: 1;
		top: 47%;
		margin: 10px;
		font-size: 30px;
		text-align: center;
		display: block;
		justify-content: left;
		width: 90%;
		height: 35%;
		background-color: #401770c9;
		padding: 10px;
	}

	@media only screen and (min-width: 860px) {
		.hero-content {
			padding: 30px;
			background: var(--morado-darker);
		}

		.hero-image {
			margin-left: 10%;
			background-image: url("./img/bg-hero.jpeg");
			background-size: contain;
			background-repeat: no-repeat;
		}

		.hero-title {
			background-color: #4f1e8859;
			top: 25%;
			left: 45%;
			width: 40%;
			height: 60%;
		}
	}
</style>
