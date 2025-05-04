---
layout: default
title: Image Gallery
description: A collection of beautiful photographs showcasing nature, architecture, and art.
---

<section class="gallery-header">
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
</section>

<section class="gallery-grid">
    <div class="gallery-item" data-id="1">
        <img src="{{ site.baseurl }}/assets/images/placeholders/img1.jpg" alt="Nature landscape">
        <div class="gallery-caption">Beautiful Mountain Landscape</div>
    </div>
    
    <div class="gallery-item" data-id="2">
        <img src="{{ site.baseurl }}/assets/images/placeholders/img2.jpg" alt="Urban architecture">
        <div class="gallery-caption">Modern City Architecture</div>
    </div>
    
    <div class="gallery-item" data-id="3">
        <img src="{{ site.baseurl }}/assets/images/placeholders/img3.jpg" alt="Abstract art">
        <div class="gallery-caption">Abstract Art Composition</div>
    </div>
    
    <div class="gallery-item" data-id="4">
        <img src="{{ site.baseurl }}/assets/images/placeholders/img4.jpg" alt="Ocean waves">
        <div class="gallery-caption">Ocean Waves at Sunset</div>
    </div>
    
    <div class="gallery-item" data-id="5">
        <img src="{{ site.baseurl }}/assets/images/placeholders/img5.jpg" alt="Wildlife photography">
        <div class="gallery-caption">Wildlife in Natural Habitat</div>
    </div>
    
    <div class="gallery-item" data-id="6">
        <img src="{{ site.baseurl }}/assets/images/placeholders/img6.jpg" alt="Historical building">
        <div class="gallery-caption">Historical Architecture</div>
    </div>
    
    <div class="gallery-item" data-id="7">
        <img src="{{ site.baseurl }}/assets/images/placeholders/img7.jpg" alt="Portrait photography">
        <div class="gallery-caption">Portrait Photography</div>
    </div>
    
    <div class="gallery-item" data-id="8">
        <img src="{{ site.baseurl }}/assets/images/placeholders/img8.jpg" alt="Food photography">
        <div class="gallery-caption">Culinary Delights</div>
    </div>
    
    <div class="gallery-item" data-id="9">
        <img src="{{ site.baseurl }}/assets/images/placeholders/img9.jpg" alt="Macro photography">
        <div class="gallery-caption">Macro Photography</div>
    </div>
</section>

<div class="lightbox">
    <button class="close-lightbox">&times;</button>
    <div class="lightbox-content">
        <img src="" alt="">
        <div class="lightbox-caption"></div>
    </div>
    <div class="lightbox-nav">
        <button class="prev-btn">&lt;</button>
        <button class="next-btn">&gt;</button>
    </div>
</div>

<!-- Reference to external JavaScript file -->
<script src="{{ site.baseurl }}/js/gallery.js"></script>