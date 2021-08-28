<script>
	export let title, description, details, cost;
	var state = false;

	function handleClick(title) {
		console.log("Agendar hora para ", title);
	}

	function toggle() {
		state = !state;

		if (state) {
			document.getElementById("modal-" + title).style.display = "block";
			document.body.classList.add("stop");
		} else {
			document.body.classList.remove("stop");
			document.getElementById("modal-" + title).style.display = "none";
		}
	}
</script>

<div class="Service" on:click={toggle}>
	<h2>{title}</h2>
	<span>{description}</span>
	<button>Ver detalles >></button>
</div>

<div id="modal-{title}" class="modal" on:click={toggle}>
	<div class="modal-content">
		<div class="container">
			<h2>{title}</h2>
			<p>{details}</p>
			<p>Valor: {cost} {cost > 0 ? "MXN" : ""}</p>
			<div class="action">
				<button on:click={handleClick(title)}>Agendar</button>
			</div>
		</div>
	</div>
</div>

<style>
	.Service {
		width: 70%;
		box-shadow: midnightblue 10px 10px;
		margin: auto;
		display: grid;
		background-color: var(--morado-dark);
		color: var(--white);
		justify-items: center;
		padding: 30px;
	}

	button {
		background-color: transparent;
		border: none;
		margin-top: 50px;
		font-weight: bold;
		color: var(--white);
	}

	.modal {
		display: none;
		position: fixed;
		z-index: 10;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100vh;
		transform: translate(-50%, -50%);
		background: #1b0f0f98;
	}

	.modal-content {
		position: absolute;
		width: 70%;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 100;
		background-color: rgb(140, 48, 245);
		color: var(--white);
		padding: 30px;
	}
</style>
