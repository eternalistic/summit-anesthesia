---
layout: layout.html
title: Contact
eleventyNavigation:
  key: Contact
  order: 4
---

<div class="container">
  <h1 class="page-title">{{ title }}</h1>
  <div class="two-column two-column__50-50">
    <div class="column-first column">
      <div class="prose">
        <p>For more information about our services please fill out the form below.</p>
      </div>
      <form
        name="contact"
        netlify
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        action="/contact/success"
      >
        <div class="form-item form-item__name">
          <label for="name" class="form-required">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-item form-item__group">
          <div class="two-column two-column__50-50 two-column__align-center">
            <div class="form-item form-item__phone">
              <label for="phone">Phone</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <div class="form-item form-item__email form-item__reset">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>
        </div>
        <div class="form-item form-item__message">
          <label for="message" class="form-required">Message</label>
          <textarea id="message" name="message" rows="5" color="60" required/></textarea>
        </div>
        <p class="form-item form-item__hidden hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <div class="form-item" data-netlify-recaptcha="true"></div>
        <div class="form-item form-item__submit">
          <button type="submit" class="button">Send</button>
        </div>
      </form>
    </div>
    <div class="column-last column">
      <div class="c--callout">
        <h3>Contact Information</h3>
        <div class="prose">
          <p><strong>Address</strong><br>{{ site.address }}</p>
          <p><strong>Phone:</strong> {{ site.phoneNumberLink }}</p>
          <p><strong>Fax:</strong> (541) 459-1556</p>
          <p><strong>Toll Free:</strong> {{ site.phoneTollFreeNumberLink }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
