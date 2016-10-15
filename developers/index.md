---
layout: page-twocol
title: Developer Guides
permalink: /developers/
navitems:
    - url: "#"
      title: Developer Guides
    - url: "#HowtoIssueBadgesTechnicalGuide"
      title: How to Issue Badges: Technical Guide
    - url: "#verification"
      title: Verification
    - url: "#HowtoDisplayBadges"
      title: How to Display Badges
---

This section provides a set of technical resources to guide you through the processes of creating, issuing and displaying Open Badges. The specification provides technical documentation and code examples. These guides will build on those examples.

For a quick nontechnical introduction to Open Badges see [Get started with Open Badges »](http://openbadges.github.io/openbadges.org-static/get-started/)

<h2 class="title title-content" id="HowtoIssueBadgesTechnicalGuide">How to Issue Badges: Technical Guide</h2>

Issuing Open Badges requires constructing and publishing a set of interconnected resources that follow the structure and guidelines set out in the [Open Badges Specification](https://openbadgespec.org/). The properties that make up a badge’s metadata are split across these resources depending on where they apply. Together they form an Open Badge. For each badge awarded, there’s:
* An Issuer Profile describing the individual or organization awarding badges. The information in the profile will appear in the metadata for all badges, including name, description, contact email address, and website URI. One Issuer profile is typically shared between all the badges an organization awards, though Issuers may choose to operate several Issuer profiles in order to serve specific audiences better. For example, a complex issuing organization like a university may choose to allow individual departments or staff to define their own issuing profiles so badges appear as awarded by a specific program or professor. [Read more about the required and optional properties of the Issuer profile »](https://openbadgespec.org/#Issuer).
* A BadgeClass, the formal description of a single achievement the Issuer recognizes. This includes information such as the name, description, and of course the graphic image that’s the visual face of the badge, but also links to detailed criteria for how the badge may be earned and the Issuer profile that created it. A human readable criteria page and an image file visually symbolizing the accomplishment must be published at a stable URLs. Optionally, badges may be organized by tags or alignments to educational standards, and if included, that information appears in the BadgeClass. [Read more about the required and optional properties of the BadgeClass »](https://openbadgespec.org/#BadgeClass).
* An Assertion, the record of an individual’s achievement of the badge. The Assertion links to one BadgeClass and contains the information specific to one Recipient’s achievement of the badge’s criteria, like the date it was awarded, the encoded Recipient identifier it was awarded to, and optionally a link to evidence and an expiration date. An Assertion is the entry point for badge verification, and it may be delivered either as a hosted object with an accessible URL alongside the BadgeClass and Issuer profile resources, or as a cryptographically signed document given to the Recipient in order to distribute to relevant Consumers. A single BadgeClass may be awarded to many different individuals by creating an Assertion for each Recipient. [Read more about the required and optional properties of the Assertion »](https://openbadgespec.org/#Assertion)
A single Open Badge (sometimes called a “badge instance”) consists of a unique set of one each of an Issuer, BadgeClass and an Assertion, though the Issuer and BadgeClass are often shared across many Badge Instances. When each resource has been created, the Assertion may be “baked” into a copy of the badge image, and the badge may be delivered to the Recipient and stored anywhere that can keep image files. Open Badges are typically stored in Recipients’ accounts at Open Badges backpack services, from which Recipients may share them with Consumers whenever the verifiable badges are relevant. 
