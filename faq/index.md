---
layout: page
title: Frequently Asked Questions
permalink: /faq/
---
<h2 class="title title-content">What’s a Badge?</h2>
A badge is any visual token of achievement, affiliation, authorization, or other trust relationship. Open Badges applies this concept to the web, with connected, verifiable credentials. Understand more about Open badges [here]({{ site.baseurl }}/get-started/). 

<h3 class="title title-secondary">What are the Benefits of Badges?</h3>

Open Badges are a flexible and portable way to recognize learning and can sit alongside traditional qualifications and professional accreditation. See more on [Get started issuing badges]({{ site.baseurl }}/get-started/issuing-badges/#why-issue).

<h3 class="title title-secondary">What Skills or Achievements can Badges Represent?</h3>

Badges can represent many different skills and achievements, ranging from collaboration to certification. See programs offering badges of many types among the [Participating Issuers]({{ site.baseurl }}/about/participating-issuers) and read more about designing a badge program: [Get started issuing badges]({{ site.baseurl }}/get-started/issuing-badges).

<h3 class="title title-secondary">How are Badges Different from Résumés and CVs?</h3>

Paper résumés and CVs are static and need to be continually updated, while badges are inherently dynamic, as they can be presented in ever-changing combinations, creating a constantly evolving picture of a person’s lifelong learning. Open Badges can represent a more detailed picture than a CV or résumé and are verified before being displayed.

Interested parties can rest assured that a badge represents a legitimate, authenticated achievement, the nature of which is described within the badge itself, which is also linked to the issuing organization.

<h3 class="title title-secondary">What information is contained within a Badge?</h3>
Open Badges include information on the organization or individual who issued the badge; the criteria that the badge has been assessed against, evidence, when the badge was issued, a verifiable reference to the recipient and a number of other required an optional properties defined by the [Open Badges Specification](https://openbadgespec.org). Some badges contain links to detailed evidence, expiration dates, searchable tags, and alignments to educational standards or frameworks. See [Get Started]({{ site.baseurl }}/get-started/) and [Developers Guides]({{ site.baseurl }}/developers/).

<h3 class="title title-secondary">What Form does a Badge Take?</h3>
A badge is typically represented as an image file with JSON or JSON-LD metadata embedded invisibly inside. Images may be PNGs or SVGs. Badge data may also be represented as JSON-LD code directly. See [Developers]({{ site.baseurl }}/developers/) 


<h3 class="title title-secondary">What Does a Badge Issuer Do?</h3>
A badge Issuer creates, offers, and awards badges. See [Get Started Issuing Badges]({{ site.baseurl }}/get-started/issuing-badges/).

<h3 class="title title-secondary">What Does a Badge Displayer Do?</h3>
Badge Displayers create opportunities for Recipients to share badges. [Visit Display Badges.]({{ site.baseurl }}/get-started/displaying-badges)

<h3 class="title title-secondary">Who Can Issue Badges?</h3>
Any individual or organization can create an Issuer profile and begin defining Open Badges. Any entity that can be described with a name, description, URL, image, and email address is a possible candidate to become an Issuer. See [Get Started Issuing Open Badges]({{ site.baseurl }}/get-started/issuing-badges/) for more detail. The important part is that the Issuer profile should represent the person or organization who should be seen as trustworthy by target Recipients and Consumers to award the credentials they would like to offer.

<h3 class="title title-secondary">How are Badges Created and Issued?</h3>

The process of creating a badge typically involves three tasks:

* Offering a learning or other experience (often with an associated assessment)
* Creating a badge to represent that experience using a tool compatible with Open Badges
* Awarding the badge on successful completion of badge criteria

The process of creating a badge to be awarded as an Open Badge involves designing the image and data, then hosting them for online display. In technical terms, a badge consists of a generic BadgeClass and a badge Assertion for each Recipient who earns it. Essentially this means hosting some JSON-LD files and an image file. This can be accomplished through a number of available [applications and services]({{ site.baseurl }}/about/participating-services/). See [Get Started Issuing Badges]({{ site.baseurl }}/get-started/issuing-badges/)

<h3 class="title title-secondary">What’s the OBI?</h3>
You may see references to the “Open Badge Infrastructure (OBI)”, a predecessor to the more open architecture of the updated term “Open Badges ecosystem”. The OBI was the Mozilla Foundation badges team’s original architecture and API design that connected Issuer and Displayer applications with badge Recipients’ Mozilla Backpack accounts.

<div class="contentblock-x-imagecontainer">
  <img src="{{ site.baseurl}}/images/openbadges-obi-original.png" alt="Original model of the Mozilla Open Badges Ecosystem (OBI) of connected services" />
  <p class="contentblock-x-imagecaption">A depiction of the OBI model for connecting badge-aware applications (Mozilla Foundation, 2012).</p>
</div>

The OBI architecture remains functional but the Open Badges ecosystem has outgrown the dependency on specific applications’ APIs for performing badge operations. Formal updates to issuing and displaying protocols are being investigated by the specification group.  

The OBI model and the newer Open Badges ecosystem model support a multitude of Issuers conferring badges into the ecosystem, as well as many Displayers and Recipients using badges to share their competencies and achievements. Anyone can earn badges across many Issuers, collect them in one place tied to their identity, then share them with various websites and audiences.

The OBI aims to support badge issuing, collection, and display for badge Recipients. This involves:

* allowing Recipients to tie badges to a Backpack account and carry their badges with them wherever they go, displaying badges across their spaces on the web
* displaying badges to parties the Recipient cares about
* allowing Recipients to manage collections of badges and control visibility of those collections

The success of badges as an alternative path to accreditation and credentialing for learners relies on a significant ecosystem of badge Issuers, badge seekers, and badge Displayers. Each digital badge, or collection of badges, can inspire learning and translate “anytime, anyplace, any age” learning into a powerful tool for landing jobs, finding communities of interest, and demonstrating skills, competencies, and achievements.

A range of OBI tools and resources are available open source via GitHub, including:

+ [Mozilla Backpack](https://github.com/mozilla/openbadges-backpack)
+ [Badge Validator](https://github.com/mozilla/openbadges-validator)
+ [Bakery](https://github.com/mozilla/openbadges-bakery)
+ [Discovery (prototype)](https://github.com/mozilla/openbadges-discovery)
+ [Directory](https://github.com/mozilla/openbadges-directory/)

<h3 class="title title-secondary">What Does a Badging System Do?</h3>

Badge systems are the collected result of many interrelated design decisions implemented by an individual or badging program in order to award badges to students, users, or other Recipients. A badge system encompasses the badge definitions and graphics themselves, as well as the technology and procedures put in place to assess, award, and deliver badges. See the [participating issuers] for links to more information about existing systems. See [Badge System Design]({{ site.baseurl }}/get-started/issuing-badges/#design) for information about the steps involved in designing your own badge system.

<h3 class="title title-secondary">What’s a Badge Backpack?</h3>

There are no costs associated with collecting Open Badges or sharing them. Issuers and Displayers are free to innovate and design experiences on their own. Some Issuers may charge for certain assessments or badges, while some Displayers may have a fee for pulling badges into a particular network or profile.

<h3 class="title title-secondary">How are Badges Verified?</h3>

A badge’s authenticity is verified when a Displayer confirms that an individual or organization issued a particular badge to a user and that it’s still valid. Badge authenticity may be reverified by any time using the verification procedure outlined in the Open Badges Specification. See [Developer's Guide to Displaying Badges]({{ site.baseurl }}/#displaying-badges) for more information.

<h3 class="title title-secondary">How Does Assessment Fit in with Badging?</h3>

Assessment is defined by the badge Issuer and should be tailored to the nature of the badge to determine if the Recipient is deserving of a badge. It’s important to have assessment practices in place that are a good fit for the learning claims made by a badge. For more information, visit [Badge System Design]({{ site.baseurl }}/get-started/issuing-badges/#design).

<h3 class="title title-secondary">How Do Recipients Receive their Badges?</h3>

A badge award at its most basic involves the Issuer creating a badge Assertion file for the Recipient and badge. Typically, the Issuer will contact the Recipient when a badge is awarded. The nature of this communication is decided by the Issuer (e.g. email or SMS) who knows its community of badge Recipients best. Badges may be delivered as a “baked” portable image file, or using the Mozilla Backpack Issuer API, where a badge Recipient logged into the Issuer website is guided through a flow to claim the badge and send it to a Backpack account.

<h3 class="title title-secondary">The Badge Assertion and Metadata Seem Complex - Do I Need All the Items?</h3>

No, and much of the complexity that does exist is managed via user interfaces of badge issuing tools. Issuers rarely need to construct badge objects manually. The data structures associated with an Open Badge have been designed to accommodate as wide a range of Issuer and badging scenarios as possible. To account for this flexibility, many of the data items are optional. See the [Open Badges Specification](https://openbadgespec.org) for more information.

<h3 class="title title-secondary">How Do Recipients Find Out about Badges?</h3>

This depends on the badge Issuer and the Recipient community. For example, the Issuer may be an educational institution the Recipient is already associated with. Badge data can also include items designed to aid the process of finding badges to apply for, including descriptions and tags. Many efforts are underway to investigate how to publicize available badges. Services will spring up to serve specific discovery needs. For instance, The nbadges Discovery project built a prototype [directory](https://github.com/badgealliance/openbadges-directory), and [Credmos](http://credmos.com/) integrated with it to offer an in-browser badge discovery experience with real badges.

<h3 class="title title-secondary">How is Evidence ussed in Badging?</h3>

Evidence is the data behind a badge that links back to the Issuer, the criteria it was issued under, and the evidence verifying the credential. Within Open Badge Assertions, it may be referenced by URL.

* Hosted
* Either provided by the Recipient as part of an application process or identified by the Issuer

<h3 class="title title-secondary">Can More Than One Person Earn the Same Badge?</h3>

Yes, the Open Badges Specification is designed to make it easy to define a generic achievement (BadgeClass) and award it to dozens or thousands of individual Recipients, by creating an Assertion for each Recipient. By default, a badge can be awarded to many people; however, an Issuer can choose to define a new unique BadgeClass for every recipient if that’s a better fit for their system design.

<h3 class="title title-secondary">What’s Badge Criteria?</h3>

When an Issuer creates a new badge, the data can include details of the criteria that a Recipient must meet in order to be awarded the badge. A badge can include multiple criteria items if necessary. When assessment is involved, the reviewer may compare Recipient evidence against the badge criteria. Each criteria item can be required or optional.

<h3 class="title title-secondary">What’s a Baked Badge?</h3>
A baked badge is a badge image with Assertion data embedded in it. See [Open Badges Specification](https://openbadgespec.org/baking).

<h3 class="title title-secondary">What’s a Claim Code?</h3>

Badge Issuers can choose to issue badges using claim codes, a feature which is available in some issuing platforms. A claim code is a string of characters the Recipient can enter into a form on the Issuer website to receive the relevant badge. A typical scenario for this could be an event or festival where the organizer hands out claim codes to attendees.

<h3 class="title title-secondary">How Can Recipients Share their Badges?</h3>

Recipients can use a personal badge repository, ie, Backpack, to store, manage, and share badges. See [Get Started Earning Badges]({{ site.baseurl }}/get-started/earning-badges/.


<h3 class="title title-secondary">How Do Consumers Know that a Particular Badge was Awarded to a Particular Recipient?</h3>

Displayers and Consumers verify badges by parsing the data associated with each badge. Recipients can present earned badges to Consumers from within a tool that showcases their capabilities. See [Get Started Displaying Badges]({{ site.baseurl }}/get-started/displaying-badges/.

The metadata in a badge provides information regarding the recipient of the badge. This data is often hashed to obscure the recipient's identity while still allowing a verifier to confirm that the recipient identifier matches what is expected. See [Developers Guide to Verifying Badges]({{ site.baseurl }}/developers/#verification).

<h3 class="title title-secondary">How Do Consumers Know Who Issued a Badge?</h3>
The metadata in a badge provides information about the issuer of the badge, including a name, description, url and contact email address.

<h3 class="title title-secondary">How Do Consumers Know What a Badge Represents?</h3>

They’ll need to know that they’re looking at an Open Badge and the data for an awarded badge includes a link to the BadgeClass information, which includes descriptions of what the badge represents. Open Badges [Displayer]({{ site.baseurl }}/get-started/displaying-badges/) tools make this data available at consumers' fingertips.

<h3 class="title title-secondary">What are my Responsibilities as an Issuer if I wish to Enable Recipients to Send Badges to a Backpack?</h3>

As an Issuer, you grant badge Recipients a worldwide, royalty-free license to use badges (including all the content and code in them) in Backpacks and spaces they want to share their accomplishments on the web. You grant Open Badges enabled services the right to inspect and republish badge components with consent of the Recipient. If you’re an Issuer of badges and enable Recipients to send badges to their Mozilla Backpack, you also agree that:

* You’ll comply with all laws and regulations, including having a legally compliant privacy policy describing your role and interaction with the Mozilla Backpack and other Open Badges services as well as your collection, use, retention, or disclosure of information used in badges as well as the [Mozilla Backpack Terms of Use](https://backpack.openbadges.org/tou.html).
* You won’t send the Mozilla Backpack the information of any user under the age of 13. For more information, see the COPPA FAQ below. Some specification updates are underway.
* None of your badges will contain content or other information that infringes the rights of any 3rd party (including intellectual property, privacy, or publicity rights).

If you’re an educational institution, the criteria for earning badges may list required grades or minimum grades but the badge itself may not contain any information indicating the actual grade received by that Recipient. For more information, see FERPA below. Consult qualified legal advisors for your specific obligations under COPPA, FERPA, and other regulations that may be in force in your jurisdiction.

<h3 class="title title-secondary">Children’s Online Privacy Protection Act (COPPA): What if I’m an Issuer and my service is aimed at children under 13 or I have children under 13 earning Badges?</h3>

The Mozilla Backpack isn’t available to users under the age of 13. If you have users under 13 who are earning badges, don’t allow them to push badges to the Mozilla Backpack. Regardless, you can still implement the Open Badges Specification in conjunction with your internal service or in conjunction with appropriate 3rd party OBI Backpacks. Please speak with your legal counsel about your particular obligations under the [Children’s Online Privacy Protection Act](http://www.coppa.org/). You can also find out more about COPPA at the [FTC COPPA FAQs](http://www.ftc.gov/privacy/coppafaqs.shtm).

<h3 class="title title-secondary">What if I Operate or Work for an Educational institution that is Subject to the Family Educational Rights and Privacy Act (FERPA)?</h3>

You’ll have to review FERPA compliance requirements with your legal counsel. We’ve provided some information to help facilitate some of that discussion in this FAQ.

<h3 class="title title-secondary">What’s the Family Education Rights and Privacy Act (FERPA) and Does it Apply to me?</h3>

FERPA is a federal law that applies to schools and learning institutions that receive federal funding. The law protects the privacy of students who are or have been in attendance at these institutions and about whom the institution keeps education records in any format. Additional information about the law itself can be found [here](http://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html).

<h3 class="title title-secondary">Under FERPA, what’s an Education Record?</h3>

Education records are those records maintained by an educational “agency” or “institution” that directly relate to a particular student.

<h3 class="title title-secondary">How Does FERPA Protect Students’ Privacy?</h3>

FERPA protects against the improper disclosure of personally identifiable information (PII) about students that are contained within their “Education Record”. FERPA protects this information by affording parents certain rights with respect to their children’s education records, and generally prohibits the disclosure of PII derived from those records to 3rd parties without parental consent. Additional rights granted by FERPA include a parent’s or legal guardian’s right to access their child’s education records and the right to request that inaccurate or misleading information be amended. These rights transfer to the student once he/she turns 18 years old.

<h3 class="title title-secondary">When can PII from an Education Record be Disclosed Without Consent?</h3>

A school is permitted to disclose PII from a student’s education records to 3rd parties without obtaining consent when that information has been appropriately designated “Directory Information” by the school or learning institution.

Generally, Directory Information is information that wouldn’t be considered harmful or an invasion of privacy if disclosed. It can include the student’s name, email address, degrees, honors, and awards received, phone number, photograph, date and place of birth, major field of study, participation in officially recognized activities and sports, the most recent previous educational agency or institution attended, grade level or year, and enrollment status. Directory information is designated by the school or learning institution and determined at its discretion. A badge may contain a student’s Directory Information, such as his/her email address and honors, awards, or degrees. Even if you designate information in a badge as Directory Information, a parent or student can request that you not share that information, and you shouldn’t send that information after a parent or student has made such a request.

<h3 class="title title-secondary">What “Best Practices” Should I Consider Implementing When Disclosing Student Data?</h3>

It’s your responsibility to discuss FERPA compliance obligations with your legal counsel in connection with OBI. Regardless of how you classify data, we recommend that students and/or parents or legal guardians have as much transparency and choice as possible when it comes to sharing student data. You may want to ask qualified legal advisers about some of the following best practices:

* Make sure your Privacy and Directory Information policies provide notice of your disclosure practices associated with issuing a badge.
* Don’t include actual grades or individual test scores in a badge.
* Don’t include sensitive information such as social security numbers, health, medical, or disability information in a badge.
* Don’t allow users who are under 13 to send badges to the Mozilla Backpack.
* Only include the minimal amount of data that must be embedded in a badge under the OBI specification.





