# PetBook

An "online guestbook" that users can comment on, obviously themed around my pets (week 04 Assessment) 🐶🐱📕

## Aims, Planning & Design

In this assignment I'm aiming to meet all of the required goals, as well as at least 2 strectch goals for this assignment and allow users to post, view, delete and like comments. I would like the data to be filtered, so that the comments are in-context (i.e you will only see comments about a pet under a photo of that pet) and while writing this in the outset my loose plan is to use an assigned value that is related to the page the comment has been left on. Obviously, I can't account for a user who may leave a comment on the "wrong" page, but that is true of every website that offers a commenting feature like this.

I’ve made the conscious choice this time around to design from a mobile-first POV. I still default to designing from a desktop-first point and, in fact, I can struggle with imagining a “unique” design within the constraints of a phone screen, but I’m determined to work through that feeling without letting it scare me off any more than it already has.

Figma is still my go-to choice for first design steps / the wireframe stage. Reading ahead in our class notes I have seen the advice/expectation that wireframes should not include colour, so I have taken that into account here vs the “wireframe” I created in Figma for the cookie clicker game. I'm aiming again for three breakpoints -- one for phones, one for medium sized screens such as tablets and the final for wider screens. I created a wireframe for each breakpoint this time, and made sure to represent elements when both collapsed and expanded.

![image][alt text]

[image]: /breakpoint-wireframes.png "Wireframes for a desktop, tablet and app versions of an online guestbook"

For design inspiration I’m looking at the miffy brand&website (https://miffyshop.co.uk). The brand is known for using flat/saturated colours and “friendly” styling, which lend a refreshing and down-to-earth feel that I think would be perfect for a little guestbook like this (partly helped in my case because of the nostalgia I have for the character, but I think that my understanding of what the brand are trying to do and how they are going about it means that even without nostalgia for that particular character, the emotional impact on the user will be the same).

I am using this palette that is based on the brand colours from miffy: https://www.color-hex.com/color-palette/101109

![image][alt text]

[image]: /colour-wireframe.png "An exploration on what the final design of the online guestbook may look like, with a lot of flat, saturated colours and thick outlines."

I have written my own user stories for this (for future reference, these were written in self-reflection time on Wednesday so this list will automatically also include any user stories provided in the assignment literature on Thursday)

**User Stories**

📒 I want the user to be able to leave and read comments on a specific page that relate to that pet

📒 I want the user to be able to navigate easily to each page thanks to an intuitive and responsive design/layout

📒 I want users who may require assistive technology or may be reliant on a weaker internet connection to still be able to experience the website

## The Building Process

I began with setting up a "skeleton" of the project and making sure that all the connections were working by using a database table I had previously created for a workshop. As I worked on this I continued to think about the logic I would have to employ in order to create the filtered display I'm planning. At the moment I have 2 main approaches in mind:

- Have the form send some hidden property based on what image the user is looking at. This seems like a more elegant way of figuring it out, and by more elegant I think I mean more complex (note to self, would this be done by calling the render function at different times?)

- Have the user select which pet their comment is for in a dropdown list. This means that the form would always be static, and only the data that the user enters would have to differ

As the setup time continues I will continue to think about this and do some research on how a form may send the hidden data I would be looking for -- this will include looking at query strings & the form on the TechEd website that auto-selects a value based on what link the user has clicked to view the form. However, until then I will create a version of the site that displays all of the comments under each image, not just the comments intended for that pet (in order to ensure I have the minimum working site and to allow me time to style breakpoints) and then I will attempt to build onto that.

Building the actual functionality of having the form onscreen and then users information posting to the database and appending to the body of the page went quickly and without any issues at all ... (⊙_⊙) I have to say, during my self-reflection time this week I was re-visiting our Week 02 assignment (the dynamic image gallery) and that has allowed me to juxtapose my mindset right now with how out of my depth I felt back then.

Now I'm out of my depth by CHOICE -> yes we're back to talking about filtering the comments again.

Manny helpfully pointed me in the direction of filtering client-side, or dynamic routing server-side. This continues to be a stretch goal, but since the rest of the project has gone almost unbelievably easily I still have strength to try something a little crazy.

## The Styling Process

Having such a strong visual direction from my planning stage really helped the styling process be efficient. Taking my feedback from last week into account, I am attempting to totally style using flex/grid and not allowing myself to rely on margins, which is requiring a little troubleshooting with regards to the parent-child relationships (scope reaches me even here...) but I have faith.

As I was styling the breakpoints, I realised the problems with my wireframe designs. Although I didn't have enough time to address these concerns, it allowed me to realise that I need to impliment a "testing the wireframe" step in my process, and underlines the importance of strong planning that takes into account every aspect of the creation process.

I think that the visual design overall is a success, and I think the theme works as intended. I tried to rely on more "strong" CSS styling this time (meaning flex and not moving things around via margins), although I did rely on padding here and there ...

## Testing (and sharing with friends!)

I seeded my database with data in order to test the GET route on my server and tested using console logging and by displaying the data on my client. Although I managed to successfully get a queried string (apologies for not knowing how to use the correct language just yet) and could log it in my console, unfortunatley I could not jump the final hurdle and have the queried information displayed on the client (ಥ﹏ಥ) That's ok ... I love getting future goals via tiny failures.

The POST route was tested by myself a LOT and organically tested when I shared the link to my friends (which I obviously did as soon as I could). A LOT of the test entries I personally created got deleted for the simple sake of users not needing to scroll past 24 different "I'm testing" comments left by people named "testtest" or similar.

The testing seems to suggest that I have met the requirements for the MVP (meaning minimum viable product), which brings me to:

## Reflections

☆⌒(> \_ <) I am forcibly telling myself to be more proud of myself for this than I really feel. The dangers of having big dreams, I suppose...

I was kind of shocked at how easy building a working foundation-version of this app was, although I acknowledge that it's (partly) due to the fact that every piece of the puzzle was given to us throughout the week in the workshops, and more .. overtly(?) than usual.

Thinking the logic through for the features I "failed" in was something that I felt fairly comfortable in doing, and I'm .. let's say something like 90% certain that if I had more time (and hadn't foolishly left these features to when there was no class support) I would have managed to get a working version. That is as frustrating as it is heartening, though!
