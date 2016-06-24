---
layout: page-twocol
title: About Open Badges
permalink: /about/
navitems:
    - url: "#"
      title: Start Learning About Badges
    - url: "#digital-vs-open"
      title: Digital Badges vs Open Badges
    - url: "#system-roles"
      title: Roles in a Badging System
    - url: "#technology"
      title: Technology
    - url: "#history"
      title: History
---
Open Badges are visual symbols of accomplishments packed with verifiable learner data and evidence according to the Open Badges Specification. The Open Badges Specification defines the properties required to create a Badge and award it to a recipient, as well as procedures for verifying badge authenticity and "baking" the data into portable badge image files. These data-rich badge-images can be collected by the learner and moved across all Open Badges-compatible platforms.

The Open Badges project was built upon groundbreaking work initiated by Mozilla and the [MacArthur Foundation](https://www.macfound.org/). The Badge Alliance (BA) formed in 2014 to expand upon the work and organize cooperative development of a distributed ecosystem around Open Badges. [History »](#history)

In 2016, the [Badge Alliance]({{ site.baseurl }}/badge-alliance) is working to define the continuing vision for Open Badges, turning this vision into a new version release of the specification, and ensuring broad support for this evolution in the open source libraries and compatible services developed by the BA members. 

If you're new to Open Badges, the amount of information may seem overwhelming. Although the technical aspects of badging can be complex, the concepts in a badging system are mostly intuitive. 

<h2 class="title title-content">What is an Open Badge?</h2>
See [Definitions and Learning Resources »](resources)
Badges contain detailed metadata about the issuer, recipient, and achievements.

<div class="contentblock-x-imagecontainer">
  <img src="{{ site.baseurl}}/images/openbadges-anatomy-kyle-bowen.png" alt="A picture of metadata under the surface of a badge, using the metaphor of human skeleton and organs underneath the skin" />
  <p class="contentblock-x-imagecaption">Open Badges Anatomy, by Kyle Bowen (Used under CC-BY-SA License)</p>
</div>

Issuers award badges to Recipients by giving them portable image files. Recipients store and share them in their backpacks or display software, which can be used to verify their authenticity.

<div class="contentblock-x-imagecontainer">
  <img src="{{ site.baseurl}}/images/badges-ecosystem-infographic.jpg" alt="An infographic showing the different users and services in the badges ecosystem. Issuers award badges to recipients who store them in displayers which verify authenticity and make it possible to share with consumers." />
  <p class="contentblock-x-imagecaption">The Open Badges Ecosystem (by Erik Knutson for the Badge Alliance, licensed CC-BY)</p>
</div>

The Open Badges Specification is designed to make badging flexible enough to represent a full range of online and offline learning experiences. While initially most attractive within the formal and informal education market, open badging is spreading to many industries and disciplines, across a range of formal and informal learning environments. Empowering recipients to use their badges as legitimate credentials also requires support for sharing badges across many display sites and services. Building a credential issuing, management, and verification system within a single company would be easier than the Open Badges model, but the distributed nature of Open Badges embeds the values of the web into learning credentials, ensuring users in every role have choices about which software and services they want to use.

<h2 class="title title-content" id="digital-vs-open">Digital Badges vs. Open Badges</h2>
Not all digital badges are Open Badges. A digital badge is an online representation of a skill you’ve earned, and Open Badges are a subset of digital badges that have powerful additional features and benefits: 

* Open Badges can demonstrate a wider range of achievements than many traditional forms of accreditation, representing these experiences in a more detailed way. Each badge can include a description of the accomplishment, together with the evidence used to support the badge award, packaged in a portable,verifiable digital object.
* Open Badges can be used to unlock learning and career pathways. The diverse nature of badges can help employers and educators better match individuals to opportunities.
* Recipients can use Open Badges to convey achievements in a variety of contexts rather than traditional types of accreditation, which tend to be siloed to separate environments.
* Although individual badges can be granular and detailed in nature, they can accumulate to represent larger scale achievements like degrees and certificates.
* Open Badges can evolve faster than traditional models, allowing them to represent emerging specialties and innovations which are valuable to further education and employment, but aren’t always quantified.
* Badges can represent many of the personal attributes that matter to employers, but traditional education makes little or no attempt to measure.
* Badges have the potential to aid the motivation process in learning environments, encouraging engagement, and reinforcing the sense of reward.
* The granular nature of badges encourages varying pathways to learning, allowing learners to discover their own strengths, rather than following strict, recognized routes.
Badges can be used in professional contexts, such as certificate of professional development programs and professional associations.
* Badges give recipients control over their online identity, integrating with web channels for building community links via social media.
* Unlike traditional qualifications, badges describe the path a particular learner took along the way.
* Badges use technologies which make them inherently interoperable with a range of existing and future applications.

<h2 class="title title-content" id="system-roles">Roles in a Badging System</h2>
Participants in a badging system fall into three main roles: Issuer, Recipient, and Consumer. The Issuers provide badges, Recipients store them, then compose representations of their learning to share with relevant Consumers. 

<h3 id="issue" class="title title-secondary">Badge Issuers</h3>
Badge Issuers are organizations or individuals who create and award badges. Issuers are responsible for defining badges, making them available to recipients, and handling applications. This may involve a range of complex tasks, such as assessment and comparing evidence against criteria. Alternatively, it may be lightweight when a badge is issued for attending an event. 

Depending on the level of complexity, badge issuing can involve several people operating within a larger organization or one individual. At minimum, an Issuer has to host some JSON-LD files at a persistent online location. See More information for educators and employers who want to issue badges: [Get started issuing badges »]({{ site.baseurl }}/get-started/issuing-badges). 

<h3 class="title title-secondary">Badge Recipients</h3>
A Recipient is someone who earns a badge (either by applying or being directly issued it). A Recipient can use an account at an Open Badges-compatible backpack service to manage and share badges. Recipients can earn Open Badges in various ways. For example:

* Martin sees a badge on a website and decides to apply for it.
* He submits an application, which may include evidence.
* Martin receives feedback from the badge issuer, detailing whether or not his application was successful.
* Martin is offered the badge and decides whether or not to accept it.
* He can download a portable badge image or is offered the ability to push his new badge to his backpack account directly.
* Martin can manage, collect, and display badges in the backpack.

<h3 class="title title-secondary">Backpacks and Other Open Badge Displayers</h3>
Backpacks and Open Badge Displayers are websites, organizations, or services that store or access Open Badges and display them on behalf of Recipients. The groupings and permissions affecting the display of badges is determined by the settings in the backpack, so the Recipient has control over how his/her badges are displayed. See [Open Badges backpack services and applications »](participating-services).

Much of badge system design involves Consumer perspectives, ensuring that badges in a system have currency among a target Consumer group.

<h2 class="title title-content" id="technology">Open Badges Technology</h2>
So, how’s all this implemented? A range of software and programming tools help people adopt badging systems. The Open Badges ecosystem consists of deployments of the underlying technology that supports badge issuing, collection, and display. The OBI is defined by two aspects: the [Open Badge Specification](https://openbadgespec.org), which technically describes how to construct badges; and a web-connected software that implements it as issuers, backpacks, verifiers, and displayers.
A backpack is the key recipient-facing application, a service that provides badge recipients a way to collect and manage their badges. Because Open Badges are built on an open data specification, there are multiple software options for each part of the ecosystem; users don't get locked into working with a single provider.

A badge is a digital image and its metadata. The data can be baked into the badge, meaning that it’s embedded into the image file and travels with it wherever the image goes. The individuals and organizations who issue badges create the badge metadata - which is designed to support verification of badges so that a Recipient's badges can be checked for authenticity. The data includes information about:

* What achievement the badge represents: name, description, and a link to detailed criteria
* Who earned it, when, and an optional link to evidence of the Recipient’s achievement
* Who issued it, their name, description, website, and contact email address

Many of the applications that drive the Open Badge Infrastructure are released under open source licenses. See some of the tools and code and learn how to contribute to their development [here](participating-services).

<h2 class="title title-content" id="history">History of Open Badges</h2>
The Open Badges Project began during the 2010 Mozilla Festival. The next year, the Digital Media and Learning Competition provided $2 million in grants for innovative badge systems. In 2012, the Mozilla Foundation released the Public Beta of the Open Badge Infrastructure, followed by Open Badges 1.0 in 2013. The Summit to Reconnect Learning, held in 2014, was the first event to focus on moving Open Badges from the edges of innovation to the mainstream. There, the [Badge Alliance]({{ site.baseurl }}/badge-alliance) launched to disseminate the work and facilitate collaboration between a growing set of Open Badges ecosystem stakeholders. Today, the BA has a new set of technical resources and committed partners to ensure the right and complete ecosystem is built.

<h3 class="title title-secondary">Ongoing Mozilla Partnership</h3>
Open Badges were developed and piloted within the [Mozilla Foundation](https://www.mozilla.org/en-US/foundation/) from 2010 to 2014. Mozilla will continue to support the Open Badges ecosystem, taking on a smaller role working alongside peer members of the Badge Alliance. Mark Surman, Mozilla’s Executive Director, serves on the Badge Alliance Board along with Connie Yowell and Rob Abel. The Badge Alliance will continue to facilitate cooperation and organization between its members and adoption of the specification through events, meetings, publications, and communication channels.
