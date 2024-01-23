---
layout: layout.html
title: Contact
eleventyNavigation:
  key: Contact
  order: 4
---

<div class="container">
  <div class="eyebrow"></div>
  <h1>Contact</h1>
  <div class="two-column two-column__50-50">
    <div class="column-first column">
      <p>For more information about our services please fill out the form below or give us a call at <a href="tel:5094077097">(509) 407-7097</a>.</p>
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
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
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
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" color="60" /></textarea>
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
        <h3>Fully Licensed</h3>
        <p>J&M Remodel LLC is located in Spokane Valley, WA.
        <p>We are licensed, bonded and insured in the state of Washington.</p>
        <p><strong>License Number</strong><br>604710435-001-0001</p>
      </div>
    </div>
  </div>
</div>
