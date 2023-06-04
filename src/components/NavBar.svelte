<script lang="ts">
  import Logo from './Logo.svelte'

  $: open = false
  const handleToggle = () => (open = !open)
</script>

<header class="bg-gray-800 sticky top-0 shadow px-6 flex justify-around max-h-16">
  <Logo />
  <nav class="flex justify-around">
    <ul
      class="md:flex md:translate-y-0 md:opacity-100 -translate-y-full items-start opacity-0 animation-all ease-in-out 700ms"
      class:translate-y-full={open}
      class:opacity-100={open}
    >
      <li class="p-4 flex text-[#fafafa]"><a href="#inicio">Inicio </a></li>
      <li class="p-4 flex text-[#fafafa]"><a href="#servicios">Servicios </a></li>
      <li class="p-4 flex text-[#fafafa]"><a href="#sobre">Sobre </a> mi</li>
      <li class="p-4 flex text-[#fafafa]"><a href="#contacto">Contacto </a></li>
    </ul>
    <div class="grid md:hidden place-self-start self-auto">
      <button
        class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
        on:click={handleToggle}
        on:keyup={handleToggle}
      >
        <svg
          width="20"
          height="20"
          fill="currentColor"
          class="w-8 h-8"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
          />
        </svg>
      </button>
    </div>
  </nav>
</header>
