---
layout: page-twocol
title: Get Started Displaying Badges
permalink: /get-started/displaying-badges/
navitems:
    - url: "#apps"
      title: Displayer Applications
    - url: "#recipients"
      title: For Recipients
    - url: "#developers"
      title: For Developers
---
Badges are meant to be shared. Through the process of badge Recipients sharing information about their achievements with selected Consumers, those Recipients can turn their badges into new opportunities, promotions, informal recognition, and other forms of value in their work and recreational relationships.

<h2 class="title title-content" id="apps">Displayer Applications</h2>
Badge Displayers create opportunities for Recipients to share the badges they’ve earned. With the Recipient’s email address, the Displayer can retrieve badges the Recipient’s been awarded and chosen to make public. 
How the Displayer processes a badge is determined by how it was retrieved and what form its Assertion takes. The Displayer can parse the data associated with each badge, verify it for authenticity, and display it in websites, applications, or social media posts.

This page will orient you to the various display platforms available and give you the information you need to set up your own display service to connect badge Recipients to Consumers and opportunities because of their credentials.

The displaying of badges can benefit and connect Recipients and Consumers. For example, a Recipient’s badges can signal achievement to a potential employer, which may be seeking an individual with the credentials and skills displayed by the Recipient. 

<h2 class="title title-content" id="recipients">For Badge Recipients</h2>
Open Badges makes it possible for Recipients to display badges acquired in various contexts, painting a more detailed, complete picture of their skills and experiences.
Badges are not siloed or limited to one site but can be combined with badges from multiple Issuers and then shared for different audiences and purposes.
Each Recipient controls how and where his/her badges are displayed through a Backpack. See Backpack Services in Participating Services
If a site has a Recipient's email address and knows the Recipient uses the Mozilla Backpack, it can query the person's Backpack account for public badges. The response is a JSON representation of the badges.

<h3 class="title title-secondary">Ways to Display Open Badges from Backpacks:</h3>

* [Mozilla Backpack](https://backpack.openbadges.org/) - You can upload badges, create groups of related badges, then share them through websites, blogs, and social media sites. The Mozilla Backpack is also available as open source software. Users can share their badges by including them in collections and sharing via URL.
* [Badgr](https://badgr.io) - Badgr provides Open Badges issuing and earner badge management all from one account. Free accounts are available on https://badgr.io, and the software is also available open source for users who wish to run their own server. With Badgr, users may upload badges they have earned via multiple confirmed email addresses and share them by making collections.
* [Open Badge Passport](https://openbadgepassport.com/) - Badges issued from Open Badges Factory are automatically transferred into Open Badge Passport if the Recipient’s email address used for issuing the badge was saved to the Recipient’s Open Badge Passport account setting. Other badges can be uploaded as files from a computer or imported from a Mozilla Backpack. The application backing OBP is available open source as Salava by Discendum. Users can share their badges by building pages that include badges, text, and portfolio items.

<h2 class="title title-content" id="developers">For Developers</h2>
To display badges in your own applications you need:

* A web server able to make Internet requests
* Ability to make HTTP requests and read JSON/JSON-LD responses
* To know the Recipient’s email address

With the Mozilla Backpack Displayer API, you can query that Backpack for public badges awarded to a particular Recipient.  Information about the badges is returned in JSON, which you can use to render a wide variety of displays. Other Backpack have their own APIs for retrieving badge data for display in connected applications.

To access development documentation and build your own application:

* Seek help from our [developer community.](http://bit.ly/badgesdevgroup)
* Get in touch with the Badge Alliance team. We’re here to help! [Contact us]({{ site.baseurl }}/contact).

<h3 class="title title-secondary">Verifying Badges</h3>
A displayer may have reason to verify badge authenticity independently if the source of the badge does not meet trust requirements of the application. To make clear the trustworthiness of the badges themselves, It is also a good idea to put the ability to verify badges or see verification results in the hands of users of your display interface. See [Verifying Badges for Display](https://github.com/mozilla/openbadges-backpack/wiki/Verifying-Badges-for-Display).
