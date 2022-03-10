<template>
  <nav id="navbar" class="navbar navbar-expand-lg">
    <div class="container">
      <!-- navbar brand  -->
      <a class="text-white navbar-brand" href="/">YondoMondo</a>
      <!-- navigation button  -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-dropdown"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="@assets/imgs/icons/mobile_nav.svg" alt="navbar icon" />
      </button>

      <!-- collapse menu  -->
      <div id="navbar-dropdown" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="/#universe" class="nav-link text-capitalize text-white">
              universe
            </a>
          </li>
          <li class="nav-item">
            <a href="/#roadmap" class="nav-link text-capitalize text-white">
              roadmap
            </a>
          </li>
          <li class="nav-item">
            <a href="/#purpose" class="nav-link text-capitalize text-white">
              purpose
            </a>
          </li>
          <li class="nav-item">
            <a href="/#team" class="nav-link text-capitalize text-white">
              team
            </a>
          </li>
          <li class="d-flex nav-item social-icons align-items-center">
            <a
              href="https://twitter.com/yondomondo"
              target="_blank"
              class="d-block me-3 me-xxl-4"
            >
              <img src="@assets/imgs/icons/twitter.svg" alt="twitter icon" />
            </a>
            <a
              href="https://discord.com/invite/arDjz5thy6"
              target="_blank"
              class="d-block"
            >
              <img src="@assets/imgs/icons/discord.svg" alt="discord icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
};
</script>
