<script>
  import Logo from "./Logo.svelte";
</script>

<div id="Header" class="sm:sticky flex flex-grow min-h-4 bg-pink-500 sm:bg-yellow-700">
  <div class="align-center justify-around flex">
    <nav>
      <ul>
        <Logo />
        <li><a href="#Services">Servicios</a></li>
        <li><a href="#About">Sobre mi</a></li>
        <li><a href="#Contact" class="active">Contacto</a></li>
      </ul>
    </nav>
  </div>
</div>

<!-- <style>
  .Header {
    display: none;
  }
  @media only screen and (min-width: 860px) {
    .Header {
      position: sticky;
      z-index: 2;
      height: 60px;
      background-color: var(--morado-darker);
      /* margin-bottom: -30px; */
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .header-content {
      width: 100%;
    }

    ul {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 0;
    }
    li {
      line-height: 60px;
      list-style: none;
    }
    a {
      color: var(--white);
    }
    .active {
      background-color: var(--morado);
      padding: 18px;
      border-radius: 0;
    }

    .sticky {
      top: 0;
      width: 100%;
    }
  }
</style> -->
