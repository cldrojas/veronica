<script>
  import Logo from "./Logo.svelte";

  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { classList } from "../utils";

  const toggle = (initialValue) => {
    const { subscribe, set, update } = writable(initialValue);
    return {
      subscribe,
      toggle: () => update((value) => !value),
      set,
    };
  };

  const open = toggle(false);
  let menuClasses = "";

  onMount(() => {
    menuClasses = classList({
      hidden: !open,
      block: open,
      "px-2 pt-2 pb-4": true,
      "sm:flex": true,
      "sm:p-0": true,
    });
  });
</script>

<div>
  <nav class="bg-gray-800  shadow ">
    <div class="px-8 mx-auto max-w-7xl">
      <div class="flex items-center justify-between h-16">
        <div class="w-full justify-between flex items-center">
          <Logo />
          <div class="hidden md:block">
            <div class="flex items-baseline ml-10 space-x-4">
              <a
                class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                href="/#Home"
              >
                Inicio
              </a>
              <a
                class="text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                href="/#Services"
              >
                Servicios
              </a>
              <a
                class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                href="/#About"
              >
                Sobre mi
              </a>
              <a
                class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                href="/#Contact"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="flex items-center ml-4 md:ml-6" />
        </div>
        <div class="flex -mr-2 md:hidden" on:click={open.toggle}>
          <button
            class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
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
      </div>
    </div>
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          href="/#Home"
        >
          Inicio
        </a>
        <a
          class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
          href="/#Services"
        >
          Servicios
        </a>
        <a
          class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          href="/#About"
        >
          Sobre mi
        </a>
        <a
          class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          href="/#Contact"
        >
          Contacto
        </a>
      </div>
    </div>
  </nav>
</div>
