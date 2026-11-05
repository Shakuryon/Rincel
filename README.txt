RINCEL ONTHE BEAT — WEBSITE STARTER
===================================

FILES
-----
index.html       Main one-page website
style.css        Main desktop styles and theme
media.css        Tablet and mobile responsive styles
index.js         Mobile navigation and form interactions
assets/images/   Replaceable image placeholders

BRAND / THEME
-------------
Vibrant noir:
- Black:       #080B12
- Deep navy:   #0B1530
- Electric:    #0150FD
- Cyan:        #06E5F4
- Aqua:        #45DBED
- Soft white:  #F2F6FC

IMAGE REPLACEMENT
-----------------
Replace these SVG placeholders with the client's real photographs.
Keep the filenames the same, or update the src attributes in index.html.

- studio-hero.svg
- studio-session-01.svg
- studio-session-02.svg
- studio-session-03.svg
- studio-session-04.svg

Recommended photos:
1. Hero: Rincel in the studio, ideally with the blue/cyan studio lighting.
2. Studio section: wide photo showing the recording room and equipment.
3. Gallery: client/guest session, artist at the microphone, producer at the desk.

BUSINESS DETAILS TO VERIFY
--------------------------
- Confirm the exact spelling/capitalization of "Geniune Hits Studioz".
- Confirm the public studio address / directions.
- Confirm the official WhatsApp number.
- Confirm which services, rates, studio hours and booking policies are current.
- Confirm permission to publish identifiable client photographs.

BOOKING FORM
------------
Open index.js and set:

whatsappNumber: "2547XXXXXXXX"

Use the verified studio number in international format, digits only.
The form creates a pre-filled WhatsApp message; the visitor must press Send.

NEWSLETTER
----------
The newsletter form is not connected to an email marketing provider yet.
Set newsletterEndpoint in index.js to a secure endpoint that accepts:
{ "email": "visitor@example.com" }

Use a provider/backend such as Brevo, Mailchimp, or a custom API endpoint.
Do not put private API keys in front-end JavaScript. The endpoint should handle
subscription confirmation, consent, duplicate addresses, and the free-beat
delivery email on the server side.

BEAT STORE
----------
The beat-store section is intentionally presented as a future expansion.
No beats, prices, licenses or products have been invented.

LAUNCH CHECKLIST
----------------
- Replace all five photo placeholders.
- Confirm business/studio spelling and location.
- Verify WhatsApp number and test booking flow on mobile.
- Connect newsletter provider and test confirmation + sample-beat delivery.
- Add real social links and any music/video embeds.
- Add privacy policy and consent language appropriate to the mailing list.
- Test all links, forms, and responsive layouts before publishing.

TECH
----
Vanilla HTML, CSS and JavaScript. No frameworks or build step required.
Open index.html locally, or deploy the folder to Netlify / another static host.
