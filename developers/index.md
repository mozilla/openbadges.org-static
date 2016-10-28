---
layout: page-twocol
title: Developers Guide
permalink: /developers/
navitems:
    - url: "#issuing-badges"
      title: Guide to Issuing Badges
    - url: "#badge-images"
      title: Badge Images
    - url: "#verification"
      title: Guide to Verifying Badges
    - url: "#displaying-badges"
      title: Guide to Displaying Badges
---

This section provides a set of technical resources to guide you through the processes of creating, issuing and displaying Open Badges. The Specification provides technical documentation and code examples. These guides will build on those examples.

For a quick nontechnical introduction to Open Badges see [Get started with Open Badges »]({{ site.baseurl }}/get-started/)

<h2 class="title title-content" id="issuing-badges">How to Issue Badges: Technical Guide</h2>

Issuing Open Badges requires constructing and publishing a set of interconnected resources that follow the structure and guidelines set out in the [Open Badges Specification](https://openbadgespec.org/). The properties that make up a badge’s metadata are split across these resources depending on where they apply. Together they form an Open Badge. For each badge awarded, there’s:

* An Issuer Profile describing the individual or organization awarding badges. The information in the profile will appear in the metadata for all badges, including name, description, contact email address, and website URI. One Issuer profile is typically shared between all the badges an organization awards, though Issuers may choose to operate several Issuer profiles in order to serve specific audiences better. For example, a complex issuing organization like a university may choose to allow individual departments or staff to define their own issuing profiles so badges appear as awarded by a specific program or professor. [Read more about the required and optional properties of the Issuer profile »](https://openbadgespec.org/#Issuer).
* A BadgeClass, the formal description of a single achievement the Issuer recognizes. This includes information such as the name, description, and of course the graphic image that’s the visual face of the badge, but also links to detailed criteria for how the badge may be earned and the Issuer profile that created it. A human readable criteria page and an image file visually symbolizing the accomplishment must be published at a stable URLs. Optionally, badges may be organized by tags or alignments to educational standards, and if included, that information appears in the BadgeClass. [Read more about the required and optional properties of the BadgeClass »](https://openbadgespec.org/#BadgeClass).
* An Assertion, the record of an individual’s achievement of the badge. The Assertion links to one BadgeClass and contains the information specific to one Recipient’s achievement of the badge’s criteria, like the date it was awarded, the encoded Recipient identifier it was awarded to, and optionally a link to evidence and an expiration date. An Assertion is the entry point for badge verification, and it may be delivered either as a hosted object with an accessible URL alongside the BadgeClass and Issuer profile resources, or as a cryptographically signed document given to the Recipient in order to distribute to relevant Consumers. A single BadgeClass may be awarded to many different individuals by creating an Assertion for each Recipient. [Read more about the required and optional properties of the Assertion »](https://openbadgespec.org/#Assertion)
A single Open Badge (sometimes called a “badge instance”) consists of a unique set of one each of an Issuer, BadgeClass and an Assertion, though the Issuer and BadgeClass are often shared across many Badge Instances. When each resource has been created, the Assertion may be “baked” into a copy of the badge image, and the badge may be delivered to the Recipient and stored anywhere that can keep image files. Open Badges are typically stored in Recipients’ accounts at Open Badges backpack services, from which Recipients may share them with Consumers whenever the verifiable badges are relevant. 

<h3 class="title title-secondary">Open Badges Specification Updates</h3>

Some consequential updates to this structure are coming with the next version of the Specification, particularly enabling embedding of complete BadgeClass and Issuer Profile documents into an Assertion (and into baked badges). See [current issues in progress](https://github.com/openbadges/openbadges-specification/issues?q=is%3Aopen+is%3Aissue+milestone%3A%222.0+Prototypes%22) for details.

<h3 class="title title-secondary">Baking and Images</h3>

<div>
  <img src="{{ site.baseurl}}/images/test-badge.png" alt="Test Badge" />
</div>

A graphic image is an important component of a digital badge, because it carries much of the symbolic weight and branding of the achievement and its Issuer. The Open Badges Specification defines specific methods for embedding Open Badges metadata into PNG or SVG image files. The data must be encoded into these files precisely to avoid interrupting the image display in traditional renderers like web browsers but must be discoverable by badge-specific inspection tools. Badge images should have a square aspect ratio, and it is recommended to be greater than 90x90 pixels in size but under 256kb file size for maximum compatibility. “Bakery” tools are available open source in multiple languages and via HTTP API. [Read more about baking Open Badge images »](https://openbadgespec.org/#badge-baking)

<h3 class="title title-secondary">Open Badge Composition Tutorial</h3>
The techniques described here work for building one or two complete badges, but when you want to scale up to offering hundreds, you can embed these practices into code or start working with a hosted platform or web application software to handle creating badges.

* [New Issuers: Give Yourself a Badge](https://github.com/mozilla/openbadges-backpack/wiki/New-Issuers:-Give-Yourself-a-Badge) - This tutorial includes step-by-step instructions to create a badge, award it, bake it, then upload it into a backpack.

<h3 class="title title-secondary">Delivery and Display</h3>
Issuers deliver a Recipient baked Open Badge images, which she stores in a Backpack or other displayer, which verifies the content and display verified metadata to many Consumers who are interested in her accomplishments.

<div class="contentblock-x-imagecontainer">
  <img src="{{ site.baseurl}}/images/badges-ecosystem-infographic.jpg" alt="Badges Ecosystem Infographic" />
  <p class="contentblock-x-imagecaption">The Open Badges Ecosystem (by Erik Knutson, Concentric Sky, licensed CC-BY)
</p>
</div>

<h3 class="title title-secondary">A Typical Issuing Scenario</h3>

Several staffers at an after-school club get together. They want to recognize learning that’s happening in their program with Open Badges. They:

* Set some general goals they hope to accomplish using badges to guide their design decisions;
* Decide to recognize a specific skill with a particular badge and come to agreement on how they will embed issuing this badge into their day-to-day practices. [See Badge System Design »]({{ site.baseurl }}/get-started/issuing-badges/#design);
* Design the badge and define the badge metadata in their Open Badges Issuer application;
* Publish the Issuer Profile and BadgeClass, start assessing students’ achievement, and awarding the badge to individual Recipients.
* Send the awarded badges to Recipients by email, following the instructions in the program’s chosen issuing software.
* Other system designs for programs offering badges may involve students applying for badges by submitting evidence and program staff reviewing applications. Badge systems may integrate with online learning environments and award some badges automatically as a result of interactions that meet defined criteria. But, however badge systems are designed, if the Issuer uses Open Badges, students can combine the badges they’ve earned into collections together with all the Open Badges they’ve earned in other parts of their lifelong learning journeys.

<h3 class="title title-secondary">Badge Issuing Flow in Detail</h3>

You can design a badge issuing flow to suit your organization and community of badge Recipients. The Open Badges tools and Specifications support the creation, validation, publication, assessment, issuing, and display of badges.

When a badge is awarded to an earner, these steps may be carried out:

* Issuer has already defined and hosted an Issuer Profile and at least one BadgeClass.
* Issuer creates and hosts (or cryptographically signs) a badge Assertion.
* Issuer delivers the badge to the Recipient, either as a baked image file or by offering to push the Recipient’s badge to his/her backpack account. The Mozilla Backpack [Issuer API](https://github.com/mozilla/openbadges-backpack/wiki/Using-the-Issuer-API) will bake the image automatically for the Recipient. Other backpack platforms’ capabilities vary. See open source bakery software in Tools and Code ».
* From within the backpack, the Recipient decides whether to make the badge part of a public collection or page.
* Many badge Recipients use the [Mozilla Backpack](https://backpack.openbadges.org/) to store their badges, which features a Displayer API to integrate with external applications who may query the Recipient’s backpack account for badge Assertion info and other options for Recipients to share their badges with Consumers like employers, college admissions offices, managers, and peers.
* Sharing, embedding, and display options vary slightly for users of different backpack platforms.
* Displayers can only query for badges the Recipient has chosen to make public.
* Identity can be verified by Consumers, as can signatures where appropriate.

Displayers may choose to prominently display Open Badges features by linking to a validator service to allow Consumers to check on demand to ensure that a badge has proper integrity. Because Open Badges are verifiable, Consumers should have easy access to these capabilities whenever they encounter badges. [See more Information on Displaying Open Badges »]({{ site.baseurl }}/get-started/displaying-badges)

<h3 class="title title-secondary">Issuing Requirements</h3>

Issuer organizations may use one of the available issuing platforms or establish their own Issuer service by running open source code or building their own application. To act as an Issuer service, you need:

* A web server where you can serve your JSON-LD files for your Issuer Profile, BadgeClasses, and Assertions at stable URLs
* Recipient email addresses (other Recipient identification options are coming in the next version of the Specification around the end of 2016)

Additionally, for signed Assertions, you need to:
* Generate a public/private key pair and host the public key
* Sign the badge Assertions when they are issued

See also the [Issuer Checklist](https://github.com/mozilla/openbadges/wiki/Issuer-Checklist) to ensure you’re not missing any steps or options in crafting your BadgeClasses and Assertions.
Issuers should consider the following guidelines on badge images:

<h3 class="title title-secondary" id="badge-images">Badge Images</h3>

* Images should be PNGs (or SVGs).
* Images should be square and not exceed 256kb for maximum compatibility. They should have dimensions not smaller than 90 x 90px. View badge images at small sizes to ensure that the content remains legible when scaled.
* An image must exist for the BadgeClass.
* Additionally, baked images may be linked from Assertions via URL to the image on the Issuer server, stored within the metadata if you opt to bake badges locally.
* BadgeClass images may be published as Data URIs embedded in the BadgeClass definition itself, but baked Assertion images may not (because it’s a circular reference).

<h3 class="title title-secondary">Revocation</h3>

Badge Assertions may be revoked if the Issuer determines they were issued in error or no longer should be valid. For a hosted Assertion, revocation entails replacing the Assertion with a note declaring the reason for revocation. For signed Assertions, Issuers may create a revocation list with keys for each of the UIDs they wish to revoke. A revocation list is a single JSON document for the entire issuer.

See notes on [revocation](https://openbadgespec.org/#revoking) in the Open Badges Specification for more information.

<h3 class="title title-secondary">Issuer Insignia</h3>

Declare your support for Open Badges with Issuer insignia for your website. Show the world your badges align with the Open Badges and that they should expect the full range of Open Badges features when they see badges referenced on your site.

<div>
  <a href="{{ site.baseurl}}/get-started/issuing-badges/#insignia"><img src="{{ site.baseurl}}/images/issuer-all.png" alt="Issuer Banner &amp; Ribbon" /></a>
</div>
<a class="button" href="{{ site.baseurl}}/get-started/issuing-badges/#insignia">Download Issuer Insignia &raquo;</a>

<h2 class="title title-content" id="verification">Verification</h2>

Verification is the process of ensuring that a badge meets the requirements of the Open Badges Specification. Although as an Issuer you may not be displaying earned badges, proper implementation of the Open Badges Specification allows those who seek to understand badges to justify placing trust in these records through strong verification.

The identity section of a badge Assertion includes the Recipient’s email address, a hash of the Recipient’s email address, or a salted hash of the Recipient’s email address. A Displayer can compare this value to the expected email(s) of the Recipient claiming the badge to establish authenticity. This facilitates verification, while preventing the need to store the earner’s email explicitly within the badge Assertion, providing protection against routine forms of unauthorized access.

For signed Assertions, validators use the public key to carry out a verification check. Issuers can also revoke signed badges, in which case a revocation list is created, including the UIDs for revoked badges - Displayers can check this list in case a badge has been revoked. See [Revoking Issued Signed Badges](https://openbadgespec.org/#revoking).

To determine the credibility of an Open Badge, Consumers can inspect and validate the badge with an Open Badges validator tool, often one built into the display platform where they see a badge, to determine whether it’s valid, and that it belongs to the expected Recipient.

A good Open Badges validator ensures a number of checks pass:

* Validation that the badge is awarded to the expected email address of the Recipient: Badge verification tools can inform a Consumer whether a badge matches an expected Recipient, but it’s up to the Consumer to determine that the expected email address belongs to the person presenting the badge to them.
* Validation of expiration: Open Badges may have expiration dates, allowing organizations to issue badges for skills or authorizations which are only valid for a set period of time. Validators will check that a badge hasn’t expired.
* Validation of Structural validity: Badge metadata should be properly structured according to the Open Badges Specification, including relationships between components to detect integrity problems that may indicate foul play.
* Validation of Issuer identity: Open Badges contain profile information about the Issuer who awarded the credential, including contact information if additional questions arise. Good validators make it easy for Consumers to see the relevant information about the Issuer profile and the issuing platform, software, or service used by the Issuer.
* Validation of cryptographic integrity: For badges containing cryptographic signatures, these signatures are validated and information is displayed about the provided public key and relationship to the Issuer profile.

[Read more about validation in the Open Badges Specification](https://openbadgespec.org/#badge-verification).

Here are some available validation tools:

* [Mozilla Open Badges Validator](http://validator.openbadges.org/) - This software is available open source [here](https://github.com/mozilla/openbadges-validator).
* [BadgeCheck](https://badgecheck.io/) - BadgeCheck also allows you to check the recipient of badge.

<h2 class="title title-content" id="displaying-badges">How to Display Badges</h2>

Badges are meant to be shared. Through the process of badge Recipients sharing information about their achievements with selected Consumers, those Recipients can turn their badges into new opportunities, promotions, informal recognition, and other forms of value in their work and recreational relationships.
Badge Displayers create opportunities for Recipients to share the badges they’ve earned. With the Recipient’s email address, the Displayer can retrieve badges the Recipient’s been awarded and chosen to make public. How the Displayer processes a badge is determined by how it was retrieved and what form its Assertion takes. The Displayer can parse the data associated with each badge, verify it for authenticity, and display it in websites, applications, or social media posts.
The displaying of badges can benefit and connect Recipients and Consumers. For example, a Recipient’s badges can signal achievement to a potential employer, which may be seeking an individual with the credentials and skills displayed by the Recipients. 

Open Badges makes it possible for Recipients to display badges acquired in various contexts, painting a more detailed, complete picture of their skills and experiences. Badges are not siloed or limited to one site but can be combined with badges from multiple Issuers and then shared for different audiences and purposes. Each Recipient controls how and where his/her badges are displayed through a Backpack. See more about [Backpack Services »]({{ site.baseurl }}/about/participating-services/#backpacks)

To display badges in your own applications you need:

* A web server able to make Internet requests
* Ability to make HTTP requests and read JSON/JSON-LD responses
* To know the Recipient’s email address


The Mozilla Backpack [Displayer API](https://github.com/mozilla/openbadges-backpack/wiki/Using-the-Displayer-API) is a good example of display capabilities available to developers. With the Mozilla Backpack Displayer API, you can query that Backpack for public badges awarded to a particular Recipient. Information about the badges is returned in JSON, which you can use to render a wide variety of displays. Other Backpack have their own APIs for retrieving badge data for display in connected applications, though community members hope to converge on some simple functionality to be available from all backpacks in 2017 in order to enable developers of display applications to work with any compliant backpack service where badges are stored.
To access development documentation and build your own application:

* Seek help from our [developer community](http://bit.ly/badgesdevgroup).
* As of January 2017, Open Badges will become an IMS standard! Get in touch with the IMS working group team. We’re here to help! Contact us at. [OpenBadgesInfo@imsglobal.org](mailto:OpenBadgesInfo@imsglobal.org)

<h3 class="title title-secondary">Ways to Display Open Badges from Backpacks:</h3>

Displayer capability from different backpacks varies per application.

* [Mozilla Backpack](https://backpack.openbadges.org/) - Recipients upload badges, create groups of related badges, then share them through websites, blogs, and social media sites. The Mozilla Backpack is also available as open source software. Users can share their badges by including them in collections and sharing via URL.
* [Badgr](https://badgr.io/) - Badgr provides Open Badges issuing and earner badge management all from one account. Free accounts are available on badgr.io, and the software is also available open source for users who wish to run their own server. With Badgr, users may upload badges they have earned via multiple confirmed email addresses and share them by making collections. All of these functions are available to connected applications who authenticate with recipient credentials.
* [Open Badge Passport](https://openbadgepassport.com/) - Badges issued from Open Badges Factory are automatically transferred into Open Badge Passport if the Recipient’s email address used for issuing the badge was saved to the Recipient’s Open Badge Passport account setting. Other badges can be uploaded as files from a computer or imported from a Mozilla Backpack. The application backing OBP is available open source as Salava by Discendum. Users can share their badges by building pages that include badges, text, and portfolio items.
