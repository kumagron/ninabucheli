<template>
    <span>
        <div class="hero-section">
            <div id="w-node-78e434d76ae1-380f7f0b" class="hero-content w-container">
                <div data-ix="hero-text" class="hero-heading">Just live your best life.</div>
                <div data-ix="hero-text-2" class="hero-subheading">Let me help you get a head start.</div>
            </div>
        </div>
        <section id="about-me" class="feature-section">
            <div class="flex-container w-container">
                <div class="feature-image-mask"><img src="https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624.jpg" srcset="https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c622f4b864755b_20200717_024624.jpg 3024w"
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 268.8000183105469px, 407.6499938964844px" alt="" class="feature-image" /></div>
                <div>
                    <h2>Feature section</h2>
                    <p>The <strong>feature</strong> layout is built with <strong>flex</strong>, like the <strong>hero</strong> layout. Don’t like our typesetting? You can update every detail in the typography section of the Style panel.<br/>‍<br/>You can
                        also add spacing between the heading and paragraph, swap a video in for the image, or add a button. Just make sure to drop your button into the <strong>div block</strong> that contains this content.</p><img src="https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/5f134e0e72c62204c5647563_signature.svg"
                        width="126" alt="" /></div>
            </div>
        </section>
        <div class="category-section-2">
            <div class="w-container">
                <div class="w-dyn-list">
                    <div class="w-dyn-empty">
                        <p>No items found.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="posts" class="main-section bottom-padding">
            <div id="Latest-post" class="w-container">
                <div class="section-heading">
                    <h2 class="section-title">Featured Posts</h2>
                    <div class="med-divider"></div>
                </div>
                <div class="w-dyn-list">
                    <div class="w-dyn-empty">
                        <p>No items found.</p>
                    </div>
                </div>
            </div>
            <div class="w-container">
                <div class="section-heading">
                    <h2 class="section-title">Most Recent</h2>
                    <div class="med-divider"></div>
                </div>
                <div class="w-dyn-list">
                    <div class="w-dyn-empty">
                        <p>No items found.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </span>
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