---
layout: page
title: Contact
permalink: /contact/
---
Contact us for questions about how to get started, to be connected with partners, or information about joining or supporting the Open Badges movement.

<form action="https://formspree.io/badges@badgealliance.org" method="POST">
	<h3 class="title title-secondary"><legend>Send us an email!</legend></h3>
	<p><label for="name">Name:</label><br /><input type="text" name="name" style="width: 100%; padding: 0.5em;"></p>
    <p><label for="_replyto">Your Email Address:</label><br /><input type="email" name="_replyto" style="width: 100%; padding: 0.5em;"></p>
    <p>
    	<label for="comment">Question/Comment:</label><br />
    	<textarea name="comment" style="width: 100%; height: 15em;"></textarea>
	</p>

	<input type="hidden" name="_subject" value="Openbadges.org contact form" />
    <input type="hidden" name="_next" value="{{ site.baseurl }}/contact/thank-you/" />
    <input type="text" name="_gotcha" style="display:none" />

    <input type="submit" class="button" value="Send">
</form>
