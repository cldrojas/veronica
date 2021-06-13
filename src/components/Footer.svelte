<script>
  import Logo from "./Logo.svelte";
</script>

<div id="Contact" class="Footer">
  <div class="footer-content">
    <Logo />
    <div class="description">Aportando al bienestar de las personas</div>
    <div class="social">
      <ul>
        <li><span class="fab fa-facebook-f" /></li>
        <li><span class="fab fa-twitter" /></li>
        <li>
          <a href="https://www.instagram.com/xanaragetzamani/"
            ><span class="fab fa-instagram" /></a
          >
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  .Footer {
    height: 120px;
    background-color: #2b2b2b;
    color: var(--white);
  }

  .footer-content {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
  }

  .social {
    display: flex;
    grid-column: 2 / -1;
    grid-row: 1;
  }

  .fa-instagram {
    color: var(--white);
  }
  .description {
    font-size: 12px;
    grid-column: 1/ 3;
  }
  ul {
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    text-align: start;
    display: flex;
    margin: 0;
  }

  li {
    font-size: 25px;
    list-style: none;
  }
</style>
