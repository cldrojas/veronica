<script>
	import Service from "./Service.svelte";
</script>

<div class="Services">
	<div class="Services-content">
		<Service
			title="Primer servicio"
			description="Primer servicio agregado de forma manual"
			details="Esta es la descripcion detallada del primer servicio agregado de forma manual"
			cost="500"
		/>

		<Service
			title="Segundo servicio"
			description="Segundo servicio agregado de forma manual para probar el layout"
			details="Esta es la descripcion detallada del segundo servicio agregado de forma manual"
			cost="500"
		/>
	</div>
</div>

<style>
	.Services {
		margin: 10% 0;
	}
	.Services-content {
		display: grid;
		gap: 20px;
	}
	@media only screen and (min-width: 860px) {
		.Services-content {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
