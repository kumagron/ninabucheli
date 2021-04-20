<template>
  <fragment>

  <div data-collapse="tiny" data-animation="over-right" data-duration="400" data-ix="navbar" role="banner" class="navbar w-nav">
      <div data-w-id="f050fb4b-c56a-6183-1a9e-92d54663dcfa" class="nav-background"></div>
      <div class="container-6 w-container">
        <a href="/" aria-current="page" class="logo w-nav-brand w--current">
          <img src="https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134d1c911bc71ba0b893ee_nina%20bucheli%20logo%202.svg" width="160" alt="nina bucheli logo" class="image-6"/>
          <div class="long-text">Escape.</div>
        </a>
        <nav role="navigation" class="nav-menu w-nav-menu">
            <a href="/" class="nav-link w-nav-link">Home</a>
            <a href="#/coaching" class="nav-link w-nav-link">Coaching</a>
            <a href="#/about" class="nav-link w-nav-link">About</a>
            <a href="#/contact" class="nav-link w-nav-link">Contact</a>
            <a href="#" class="close-x w-hidden-main w-hidden-medium w-hidden-small">×</a>
        </nav>
        <div class="menu-button w-hidden-main w-hidden-medium w-hidden-small w-clearfix w-nav-button">
            <div class="menu-icon w-icon-nav-menu"></div>
            <div class="menu-link">MENU</div>
        </div>
      </div>
  </div>
  
  <router-view></router-view>

  <div class="main-section dark">
    <!--
    <div class="container-8 w-container">
        <div class="section-heading">
            <h2 class="white">Stay in Touch</h2>
            <div class="med-divider"></div>
        </div>
        <div class="form-wrapper w-form">
            <form id="email-form" name="email-form" data-name="Email Form" method="post" class="w-clearfix"><input type="email" id="email" name="email" data-name="Email" placeholder="Enter your email address" maxlength="256" required="" class="field w-input" /><input type="submit" value="Submit" data-wait="Please wait..." id="subscribe-button"
                    class="submit-button w-button" /></form>
            <div class="success-message w-form-done">
                <p>Thank you! Your submission has been received!</p>
            </div>
            <div class="w-form-fail">
                <p>Oops! Something went wrong while submitting the form</p>
            </div>
        </div>
    </div>
    -->
    <footer class="footer-section">
        <div class="w-container">
            <div class="w-row">
              <div class="w-col w-col-4 w-col-small-4">
                <a href="/" aria-current="page" class="footer-logo w-inline-block w--current">
                  <img src="https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134d1c911bc71ba0b893ee_nina%20bucheli%20logo%202.svg" width="120" alt="nina bucheli logo" class="image-6"/>
                </a>
              </div>
              <div class="footer-links w-col w-col-8 w-col-small-8">
                <small class="footer-link">Copyright &copy; <span id="copyright-year">2021</span> NINABUCHELI</small>
              </div>
            </div>
        </div>
    </footer>
  </div>

  </fragment>
</template>

<script>

  import Vue from 'vue'
  import Fragment from 'vue-fragment'
  // import Form from './classes/form'

  Vue.use(Fragment.Plugin)

  export default {
    name: 'app',
    mounted() {
      Array.from(document.getElementsByClassName('nav-link')).forEach(
        function(e) {
            e.addEventListener('click', function(e)
            {
                var className = ' w--current';
                var current = document.getElementsByClassName('nav-link w-nav-link' + className)[0];
                current.className = current.className.replace(className, '');
                
                e.target.className += className;
            });


        });
      
      document.getElementById("copyright-year").innerText = (new Date()).getFullYear();

      // new Form(
      //   document.querySelector('#email-form'),
      //   'https://sendgrid-func.azurewebsites.net/api/Subscribe'
      // );

      
      this.$nextTick(function () {
        // Prevent insertion of 'webflow' badge
        document.addEventListener("DOMNodeInserted", function (e) {
          if(e.target.className == 'w-webflow-badge') {
            e.target.parentElement.removeChild(e.target);
          }
        });
      });
    }
  }
</script>