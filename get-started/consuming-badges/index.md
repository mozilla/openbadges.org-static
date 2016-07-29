---
layout: page
title: Understanding Open Badges
permalink: /get-started/consuming-badges/
---
The powerful tools in the Open Badges Ecosystem are designed to put the power of verifiable, portable credentials in the hands of Recipients and the Consumers they want to talk about their achievements with. Consumers and the tools designed to support them fulfill important roles turning Open Badges back into valuable real-world opportunities.

<h2 class="title title-content">Verifying a Badge</h2>
To determine the credibility of an Open Badge, Consumers can inspect and validate the badge with an Open Badges validator tool, often one built into the display platform where they see a badge, to determine whether it’s valid, and that it belongs to the expected Recipient.

A good Open Badges validator ensures a number of checks pass: 

* Validation that the badge is awarded to the expected email address of the Recipient: Badge verification tools can inform a Consumer whether a badge matches an expected Recipient, but it’s up to the Consumer to determine that the expected email address belongs to the person presenting the badge to them.
* Validation of expiration: Open Badges may have expiration dates, allowing organizations to issue badges for skills or authorizations which are only valid for a set period of time. Validators will check that a badge hasn’t expired.
* Validation of Structural validity: Badge metadata should be properly structured according to the Open Badges Specification, including relationships between components to detect integrity problems that may indicate foul play.
* Validation of Issuer identity: Open Badges contain profile information about the Issuer who awarded the credential, including contact information if additional questions arise. Good validators make it easy for Consumers to see the relevant information about the Issuer profile and the issuing platform, software, or service used by the Issuer.
* Validation of cryptographic integrity: For badges containing cryptographic signatures, these signatures are validated and information is displayed about the provided public key and relationship to the Issuer profile.

[Read more about validation in the Open Badges Specification](https://openbadgespec.org/#badge-verification) and see a list of [available validation tools](https://openbadgespec.org/tools/#verification).
