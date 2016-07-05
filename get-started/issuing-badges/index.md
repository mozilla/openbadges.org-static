---
layout: page-twocol
title: Get Started Issuing Badges
permalink: /get-started/issuing-badges/
navitems:
    - url: "#"
      title: Get Started Issuing Badges
    - url: "#step-by-step"
      title: Issuing Step-by-Step
    - url: "#requirements"
      title: Requirements
    - url: "#revocation"
      title: Revocation
    - url: "#verification"
      title: Verification
    - url: "#insignia"
      title: Issuer Insignia
---
Issuers—which can be individuals or organizations—create and offer badges, then award them to Recipients who store them in badge management and display software, also known as “backpacks”. Whether you’re a software developer or just looking for more detailed technical information about how Open Badges work, this page will help you understand how Issuers define and award badges.

Badge Recipients can use their backpack software to share badges with Consumers who are interested in their qualifications. While badges can be delivered as portable image files, Open Badges software is needed to perform verification steps and present metadata to users.

Open Badges are symbols of individual accomplishments, backed by verifiable metadata. Below, you’ll learn about the data Issuers put into badges and how to construct Open Badges. First, here’s a quick look at the type of data inside a badge:

<div class="contentblock-x-imagecontainer">
  <img src="{{ site.baseurl}}/images/bryan-mathers-open-badges-peeled.png" alt="A picture of metadata under the surface of a badge, showing a circuitboard underneath a hexagonal badge image with a star emblem" />
  <p class="contentblock-x-imagecaption">Open Badges Peeled by <a href="https://twitter.com/BryanMMathers">Bryan Mathers</a> (Used under CC-BY-ND License). See more of Bryan's badges work on <a href="http://badges.thinkoutloudclub.com/">#OB101</a></p>
</div>

<h2 class="title title-content" id='step-by-step'>How to Issue Badges: a Step-by-Step Technical Introduction</h2>
Issuing Open Badges requires constructing and publishing a set of interconnected resources that follow the structure and guidelines set out in the [Open Badges Specification](https://openbadgespec.org). The properties listed in the graphic above are split across these resources depending on where they apply. Together they form an Open Badge. For each badge awarded, there’s:

* An Issuer profile describing the individual or organization awarding badges. The information in the profile will appear in the metadata for all badges, including name, description, contact email address, and website URI. One Issuer profile is typically shared between all the badges an organization awards, though Issuers may choose to operate several Issuer profiles in order to serve specific audiences better. For example, a complex issuing organization like a university may choose to allow individual departments or staff to define their own issuing profiles so badges appear as awarded by a specific program or professor. [Read more about the required and optional properties of the Issuer profile »](https://openbadgespec.org/#Issuer).
* A BadgeClass, the formal description of a single achievement the Issuer recognizes. This includes information such as the name, description, and of course the graphic image that’s the visual face of the badge, but also links to detailed criteria for how the badge may be earned and the Issuer profile that created it. A human readable criteria page and an image file visually symbolizing the accomplishment must be published at a stable URLs. Optionally, badges may be organized by tags or alignments to educational standards, and if included, that information appears in the BadgeClass. [Read more about the required and optional properties of the BadgeClass »](https://openbadgespec.org/#BadgeClass).
* An Assertion, the record of an individual’s achievement of the badge. The Assertion links to one BadgeClass and contains the information specific to one Recipient’s achievement of the badge’s criteria, like the date it was awarded, the encoded Recipient identifier it was awarded to, and optionally a link to evidence and an expiration date. An Assertion is the entry point for badge verification, and it may be delivered either as a hosted object with an accessible URL alongside the BadgeClass and Issuer profile resources, or as a cryptographically signed document given to the Recipient in order to distribute to relevant Consumers. A single BadgeClass may be awarded to many different individuals by creating an Assertion for each Recipient. [Read more about the required and optional properties of the Assertion »](https://openbadgespec.org/#Assertion)

A single Open Badge (a "Badge Instance") consists of a unique set of one each of an Issuer, BadgeClass and an Assertion, though the Issuer and BadgeClass are often shared across many Badge Instances. When each resource has been created, the Assertion may be “baked” into a copy of the badge image, and the badge may be delivered to the Recipient and stored anywhere that can keep image files. Open Badges are typically stored in Recipients’ accounts at Open Badges backpack services, from which Recipients may share them with Consumers whenever the verifiable badges are relevant.

<h3 class="title title-secondary">Baking and Images</h3>
<img src="{{ site.baseurl }}/images/test-badge.png" style="float:left;" alt="An example badge image with a shield graphic">A graphic image is an important component of a digital badge, because it carries much of the symbolic weight and branding of the achievement and its Issuer. The Open Badges Specification defines specific methods for embedding Open Badges metadata into PNG or SVG image files. The data must be encoded into these files precisely to avoid interrupting the image display in traditional renderers like web browsers but must be discoverable by badge-specific inspection tools. Badge images must be a square aspect ratio, and it is recommended to be greater than 90x90 pixels in size but under 256kb filesize for maximum compatibility. "Bakery" tools are available open source in multiple languages and via HTTP API. [Read more about baking Open Badge images »](https://openbadgespec.org/#badge-baking)

<h3 class="title title-secondary">Open Badge Composition Tutorials</h3>
The techniques described here work for building one or two complete badges, but when you want to scale up to offering hundreds, you can embed these practices into code or start working with a hosted platform or web application software to handle creating badges.

* [New Issuers: Give Yourself a Badge](https://github.com/mozilla/openbadges-backpack/wiki/New-Issuers:-Give-Yourself-a-Badge) - This tutorial includes step-by-step instructions to create a badge, award it, bake it, then upload it into a backpack. 
* Or, if you’re familiar with JSON-LD syntax, try your hand at creating badges with [Badge Lab](https://github.com/mozilla/openbadges-backpack/wiki/New-Issuers:-Give-Yourself-a-Badge). It’s a customized tutorial that walks you through creating your own Open Badge by hand.

<div class="contentblock-x-imagecontainer">
  <img src="{{ site.baseurl}}/images/openbadges-flow-diagram-mozilla.png" alt="Issuers deliver a Recipient baked Open Badge images, which she stores in a Backpack and displays to many Consumers who are interested in her accomplishments." />
  <p class="contentblock-x-imagecaption">Issuers deliver a Recipient baked Open Badge images, which she stores in a Backpack and displays to many Consumers who are interested in her accomplishments.</p>
</div>

<h3 class="title title-secondary">A Typical Issuing Scenario</h3>
Several staffers at an after-school club get together. They want to recognize learning that’s happening in their program with Open Badges. They:

* Set some general goals they hope to accomplish using badges to guide their design decisions;
* Decide to recognize a specific skill with a particular badge and come to agreement on how they will embed issuing this badge into their day-to-day practices. [See Badge System Design »](../badge-system-design);
* Design the badge and define the badge metadata in their Open Badges Issuer application;
* Publish the Issuer Profile and BadgeClass, start assessing students’ achievement, and awarding the badge to individual Recipients.
* Send the awarded badges to Recipients by email, following the instructions in the program’s chosen issuing software.
* Other system designs for programs offering badges may involve students applying for badges by submitting evidence and program staff reviewing applications. Badge systems may integrate with online learning environments and award some badges automatically as a result of interactions that meet defined criteria. But, however badge systems are designed, if the Issuer uses Open Badges, students can combine the badges they’ve earned into collections together with all the Open Badges they’ve earned in other parts of their lifelong learning journeys.

<h3 class="title title-secondary">Badge Issuing Flow in Detail</h3>
You can design a badge issuing flow to suit your organization and community of badge Recipients. The Open Badges tools and specifications support the creation, validation, publication, assessment, issuing, and display of badges. 

When a badge is awarded to an earner, these steps may be carried out:

* Issuer creates and hosts (or cryptographically signs) a badge Assertion.
* Issuer delivers the badge to the Recipient, either as a baked image file or by offering to push the Recipient’s badge to his/her backpack account. The Mozilla Backpack [Issuer API](https://github.com/mozilla/openbadges-backpack/wiki/Using-the-Issuer-API) will bake the image automatically for the Recipient. Other backpack platforms’ capabilities vary. See open source bakery software in [Tools and Code »](.../participating-services/open-source).
* From within the backpack, the Recipient decides whether to make the badge part of a public collection or page.
* Many badge Recipients use the [Mozilla Backpack](https://backpack.openbadges.org) to store their badges, which features a Displayer API to integrate with external applications who may query the Recipient’s backpack account for badge Assertion info and other options for Recipients to share their badges with Consumers like employers, college admissions offices, managers, and peers.
* Sharing, embedding, and display options vary slightly for users of different backpack platforms.
* Displayers can only query for badges the Recipient has chosen to make public.
* Identity can be verified by Consumers, as can signatures where appropriate.

Displayers may choose to prominently display Open Badges features by linking to a validator service to allow Consumers to check on demand to ensure that a badge has proper integrity. Because Open Badges are verifiable, Consumers should have easy access to these capabilities whenever they encounter badges.
[See more Information on Displaying Open Badges »](../displaying-badges) 

<h2 class="title title-content" id="requirements">Issuing Requirements</h2>
Issuer organizations may use one of the available issuing platforms or establish their own Issuer service by running open source code or building their own application. To act as an Issuer service, you need:

* A web server where you can serve your JSON-LD files for your Issuer Profile, BadgeClasses, and Assertions at stable URLs
* Recipient email addresses (other Recipient identification options are coming as of Q3 2016)

Additionally, for signed Assertions, you need to:

* Generate a public/private key pair and host the public key
* Sign the badge Assertions when they are issued

See also the [Issuer Checklist](https://github.com/mozilla/openbadges/wiki/Issuer-Checklist) to ensure you’re not missing any steps or options in crafting your BadgeClasses and Assertions.

Issuers should consider the following guidelines on badge images:

* Images should be PNGs (or SVGs).
* Images should be square and not exceed 256kb for maximum compatibility. They should have dimensions not smaller than 90 x 90px. View badge images at small sizes to ensure that the content remains legible when scaled.
* An image must exist for the BadgeClass.
* Additionally, baked images may be linked from Assertions via URL to the image on the Issuer server, stored within the metadata if you opt to bake badges locally.
* BadgeClass images may be published as Data URIs embedded in the BadgeClass definition itself, but baked Assertion images may not (because it's a circular reference).

<h2 class="title title-content" id="revocation">Revocation</h2>
Badge Assertions may be revoked if the Issuer determines they were issued in error or no longer should be valid. For a hosted Assertion, revocation entails replacing the Assertion with a note declaring the reason for revocation. For signed Assertions, Issuers may create a revocation list with keys for each of the UIDs they wish to revoke.

See notes on [revocation](https://openbadgespec.org/#revoking) in the Open Badges specification for more information.

<h2 class="title title-content" id="verification">Verification</h2>
Verification is the process of ensuring that a badge meets the requirements of the Open Badges Specification. Although as an Issuer you may not be displaying earned badges, proper implementation of the Open Badges Specification allows those who seek to understand badges to justify placing trust in these records through strong verification.

The identity section of a badge Assertion includes the Recipient’s email address, a hash of the Recipient’s email address, or a salted hash of the Recipient’s email address. A Displayer can compare this value to the (hashed) expected input email of the Recipient claiming the badge to establish authenticity. This facilitates verification, while preventing the need to store the earner’s email explicitly within the badge Assertion, providing protection against routine forms of unauthorized access.

For signed Assertions, validators use the public key to carry out a verification check. Issuers can also revoke signed badges, in which case a revocation list is created, including the UIDs for revoked badges - Displayers can check this list in case a badge has been revoked. See [Revoking Issued Signed Badges](revoking-a-signed-badge).

<h2 class="title title-content" id="insignia">Issuer Insignia</h2>
Declare your support for Open Badges with Issuer insignia for your website. Show the world your badges align with the Open Badges and that they should expect the full range of Open Badges features when they see badges referenced on your site. 

<p style="text-align: center;">
	<img src="{{ site.baseurl }}/images/issuer-insignia-ribbon1.png">
	<img src="{{ site.baseurl }}/images/issuer-insignia-ribbon2.png">
</p>

<p style="text-align: center;">
	<img src="{{ site.baseurl }}/images/issuer-insignia-banner1.png"><br />
	<img src="{{ site.baseurl }}/images/issuer-insignia-banner2.png">
</p>

