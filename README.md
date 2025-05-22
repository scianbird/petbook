# PetBook

An "online guestbook" that users can comment on, obviously themed around my pets (week 04 Assessment) 🐶🐱📕

## Aims, Planning & Design

In this assignment I'm aiming to meet all of the required goals, as well as at least 2 strectch goals for this assignment and allow users to post, view, delete and like comments. I would like the data to be filtered, so that the comments are in-context (i.e you will only see comments about a pet under a photo of that pet) and while writing this in the outset my loose plan is to use an assigned value that is related to the page the comment has been left on. Obviously, I can't account for a user who may leave a comment on the "wrong" page, but that is true of every website that offers a commenting feature like this.

I’ve made the conscious choice this time around to design from a mobile-first POV. I still default to designing from a desktop-first point and, in fact, I can struggle with imagining a “unique” design within the constraints of a phone screen, but I’m determined to work through that feeling without letting it scare me off any more than it already has.

Figma is still my go-to choice for first design steps / the wireframe stage. Reading ahead in our class notes I have seen the advice/expectation that wireframes should not include colour, so I have taken that into account here vs the “wireframe” I created in Figma for the cookie clicker game. I'm aiming again for three breakpoints -- one for phones, one for medium sized screens such as tablets and the final for wider screens. I created a wireframe for each breakpoint this time, and made sure to represent elements when both collapsed and expanded.

![alt text][image]

[image]: /breakpoint-wireframes.png "Wireframes for a desktop, tablet and app versions of an online guestbook"

For design inspiration I’m looking at the miffy brand&website (https://miffyshop.co.uk). The brand is known for using flat/saturated colours and “friendly” styling, which lend a refreshing and down-to-earth feel that I think would be perfect for a little guestbook like this (partly helped in my case because of the nostalgia I have for the character, but I think that my understanding of what the brand are trying to do and how they are going about it means that even without nostalgia for that particular character, the emotional impact on the user will be the same).

I am using this palette that is based on the brand colours from miffy: https://www.color-hex.com/color-palette/101109

![alt text][image]

[image]: /colour-wireframe.png "An exploration on what the final design of the online guestbook may look like, with a lot of flat, saturated colours and thick outlines."

I have written my own user stories for this (for future reference, these were written in self-reflection time on Wednesday so this list will automatically also include any user stories provided in the assignment literature on Thursday)

**User Stories**

📒 I want the user to be able to leave and read comments on a specific page that relate to that pet

📒 I want the user to be able to navigate easily to each page thanks to an intuitive and responsive design/layout

📒 I want users who may require assistive technology or may be reliant on a weaker internet connection to still be able to experience the website

## The Building Process

I began with setting up a "skeleton" of the project and making sure that all the connections were working by using a database table I had previously created for a workshop. As I worked on this I continued to think about the logic I would have to employ in order to create the filtered display I'm planning. At the moment I have 2 main approaches in mind:

- Have the form send some hidden property based on what image the user is looking at. This seems like a more elegant way of figuring it out, and by more elegant I think I mean more complex

- Have the user select which pet their comment is for in a dropdown list. This means that the form would always be static, and only the data that the user enters would have to differ

As the setup time continues I will continue to think about this and do some research on how a form may send the hidden data I would be looking for -- this will include looking at query strings & the form on the TechEd website that auto-selects a value based on what link the user has clicked to view the form
