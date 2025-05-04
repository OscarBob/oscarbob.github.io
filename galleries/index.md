---
layout: default
title: Gallery
description: Browse our collection of photo galleries
---

<section class="gallery-index">
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    
    <div class="gallery-list">
        <div class="gallery-preview">
            <a href="{{ site.baseurl }}/galleries/nature">
                <img src="{{ site.baseurl }}/assets/images/nature/thumbnail.jpg" alt="Nature Gallery">
                <h2>London Faces</h2>
                <p>Beautiful photographs showcasing the natural world</p>
            </a>
        </div>
        
        <div class="gallery-preview">
            <a href="{{ site.baseurl }}/galleries/architecture">
                <img src="{{ site.baseurl }}/assets/images/architecture/thumbnail.jpg" alt="Architecture Gallery">
                <h2>Architecture Gallery</h2>
                <p>Stunning architectural photography from around the world</p>
            </a>
        </div>
        
        <div class="gallery-preview">
            <a href="{{ site.baseurl }}/galleries/people">
                <img src="{{ site.baseurl }}/assets/images/people/thumbnail.jpg" alt="People Gallery">
                <h2>People Gallery</h2>
                <p>Portraits and candid photography of people</p>
            </a>
        </div>
    </div>
</section>