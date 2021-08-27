<div id="About" class="About">
	<div class="about-content">
		<p>
			Me gusta mucho ayudar a las personas a rehabilitarse, es mi manera de
			aportar al mundo y shalala.
		</p>
	</div>
</div>

<style>
	.About {
		font-family: "Pattaya", sans-serif;
		font-size: 40px;
		height: 550px;
		background-image: url("./img/bg-info.jpeg");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		color: var(--white);
	}

	.about-content {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		padding: 40px;
		background-color: #008080c4;
		height: 100%;
		grid-row: 1 / -1;
		grid-column: 1/ -1;
	}

	.about-content p {
		display: grid;
		grid-column: 1 /3;
		grid-row: 2 / -1;
		font-size: 30px;
	}

	@media only screen and (min-width: 860px) {
		.About {
			background-size: contain;
			background-position: center;
		}

		.about-content {
			background-color: #008080c4;
			height: 100%;
		}

		.about-content p {
			margin: 0;
			font-size: 30px;
		}
	}
</style>
