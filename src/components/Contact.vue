<template>
  <div class="div-block">
        <div class="inner-hero">
            <div class="container">
                <h1 class="hero-header">Let&#x27;s Connect</h1>
            </div>
        </div>
        <div id="posts" class="main-section">
            <div class="w-container">
                <div class="w-row">
                    <div class="w-col w-col-6">
                        <h3>Connect with Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh
                            et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p><a href="http://www.twitter.com/webflowapp" target="_blank" class="social-text">Follow us on Twitter</a><a href="http://www.facebook.com/webflow"
                            target="_blank" class="social-text facebook">Like us on Facebook</a><a href="http://www.instagram.com" target="_blank" class="social-text instagram">Follow us on Instagram</a></div>
                    <div class="w-col w-col-6">
                        <h3>Send a Request</h3>
                        <div class="w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" class="contact-form"
                                action="https://sendgrid-func.azurewebsites.net/api/Contact"><label for="name" class="field-label">Name:</label><input type="text" id="name" name="name" data-name="Name" placeholder="Enter your name" maxlength="256" class="contact-field w-input" /><label for="email" class="field-label">Email Address:</label><input
                                    type="email" id="email" name="email" data-name="Email" placeholder="Enter your email address" maxlength="256" required="" class="contact-field w-input" /><label for="Message" class="field-label">Message:</label>
                                <textarea
                                    id="Message" name="Message" placeholder="Say what you need to say..." maxlength="5000" data-name="Message" class="contact-field message w-input"></textarea><input type="submit" value="Submit" data-wait="Please wait..." class="button w-button" /></form>
                            <div class="success-message w-form-done">
                                <p class="success-text">Thank you! Your submission has been received!</p>
                            </div>
                            <div class="w-form-fail">
                                <p>Oops! Something went wrong while submitting the form</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-section dark">
            <div class="container-8 w-container">
                <div class="section-heading">
                    <h2 class="white">Stay in Touch</h2>
                    <div class="med-divider"></div>
                </div>
                <div class="form-wrapper w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="post" action="https://sendgrid-func.azurewebsites.net/api/Subscribe" class="w-clearfix"><input type="email" id="email" name="email" data-name="Email" placeholder="Enter your email address" maxlength="256" required="" class="field w-input" /><input type="submit" value="Submit" data-wait="Please wait..." class="submit-button w-button"
                        /></form>
                    <div class="success-message w-form-done">
                        <p>Thank you! Your submission has been received!</p>
                    </div>
                    <div class="w-form-fail">
                        <p>Oops! Something went wrong while submitting the form</p>
                    </div>
                </div>
            </div>
            <div class="footer-section">
                <div class="w-container">
                    <div class="w-row">
                        <div class="w-col w-col-4 w-col-small-4"><a href="/" class="footer-logo w-inline-block"><img src="https://uploads-ssl.webflow.com/5f0f594feb6c22080396e722/5f11ca085fc343587ed02025_nina%20bucheli%20logo%202.svg" width="160" alt="nina bucheli logo"/><div class="long-text">Escape.</div></a></div>
                        <div
                            class="footer-links w-col w-col-8 w-col-small-8"><a href="/" class="footer-link">Home</a><a href="/categories" class="footer-link">Categories</a><a href="/about" class="footer-link">About</a><a href="/contact" aria-current="page" class="footer-link w--current">Contact</a></div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
</template>


<script>
    import form from '@/classes/form'

    export default {
        mounted() {
            window.scrollTo(0, 0);
            new form().OverrideFormSubmit();
    }
  }
</script>