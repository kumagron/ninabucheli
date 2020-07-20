<template>
  <div class="div-block">
        <div class="inner-hero about-page">
            <div class="w-container">
                <h1 class="hero-header">We love writing</h1>
            </div>
        </div>
        <div id="posts" class="main-section">
            <div class="flex-container w-container">
                <div class="feature-image-mask"><img src="https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624.jpg" srcset="https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624.jpg 3024w"
                        sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 268.8000183105469px, 407.6499938964844px" alt="" class="feature-image" /></div>
                <div>
                    <h2>Feature section</h2>
                    <p>The <strong>feature</strong> layout is built with <strong>flex</strong>, like the <strong>hero</strong> layout. Don’t like our typesetting? You can update every detail in the typography section of the Style panel.<br/>‍<br/>You can
                        also add spacing between the heading and paragraph, swap a video in for the image, or add a button. Just make sure to drop your button into the <strong>div block</strong> that contains this content.</p><img src="https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c62204c5647563_signature.svg"
                        width="126" alt="" /></div>
            </div>
            <div class="container-7 w-container">
                <div class="w-row">
                    <div class="w-col w-col-4"><img src="https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f13464b29f766221d0f7f62_looking-to-lake-prof.jpg" width="344" alt="" class="about-image" /></div>
                    <div class="w-col w-col-8">
                        <div class="w-richtext">
                            <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                            <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element
                                to that field in the settings panel. Voila!</p>
                            <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the &quot;When inside of&quot; nested selector system.</p>
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
                    <form id="email-form" name="email-form" data-name="Email Form" method="post" action="https://sendgrid-func.azurewebsites.net/api/Subscribe" class="w-clearfix"><input type="email" id="email" name="email" data-name="Email" placeholder="Enter your email address" maxlength="256" required="" class="field w-input" /><input type="submit" value="Submit" data-wait="Please wait..." id="subscribe-button"
                            class="submit-button w-button" /></form>
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
                            class="footer-links w-col w-col-8 w-col-small-8"><a href="/" class="footer-link">Home</a><a href="/categories" class="footer-link">Categories</a><a href="/about" aria-current="page" class="footer-link w--current">About</a><a href="/contact" class="footer-link">Contact</a></div>
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