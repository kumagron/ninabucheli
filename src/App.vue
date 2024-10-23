<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div
    data-collapse="tiny"
    data-animation="over-right"
    data-duration="400"
    data-ix="navbar"
    role="banner"
    class="navbar w-nav"
  >
    <div
      data-w-id="f050fb4b-c56a-6183-1a9e-92d54663dcfa"
      class="nav-background"
    ></div>
    <div class="container-6 w-container">
      <a href="/" aria-current="page" class="logo w-nav-brand">
        <img
          src="https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134d1c911bc71ba0b893ee_nina%20bucheli%20logo%202.svg"
          width="160"
          alt="nina bucheli logo"
          class="image-6"
        />
        <div class="long-text">Escape.</div>
      </a>
      <nav role="navigation" class="nav-menu w-nav-menu">
        <RouterLink to="/" class="nav-link w-nav-link w--current"
          >Home</RouterLink
        >
        <RouterLink to="/coaching" class="nav-link w-nav-link"
          >Coaching</RouterLink
        >
        <RouterLink to="/about" class="nav-link w-nav-link">About</RouterLink>
        <RouterLink to="/contact" class="nav-link w-nav-link"
          >Contact</RouterLink
        >

        <a href="#" class="close-x w-hidden-main w-hidden-medium w-hidden-small"
          >×</a
        >
      </nav>
      <div
        class="menu-button w-hidden-main w-hidden-medium w-hidden-small w-clearfix w-nav-button"
      >
        <div class="menu-icon w-icon-nav-menu"></div>
        <div class="menu-link">MENU</div>
      </div>
    </div>
  </div>

  <RouterView />

  <div class="main-section dark">
    <footer class="footer-section">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-4 w-col-small-4">
            <a
              href="/"
              aria-current="page"
              class="footer-logo w-inline-block w--current"
            >
              <img
                src="https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134d1c911bc71ba0b893ee_nina%20bucheli%20logo%202.svg"
                width="120"
                alt="nina bucheli logo"
                class="image-6"
              />
            </a>
          </div>
          <div class="footer-links w-col w-col-8 w-col-small-8">
            <small class="footer-link"
              >Copyright &copy;
              <span id="copyright-year">2024</span> NINABUCHELI</small
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
