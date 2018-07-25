Project Slidr
=============
---

## What is Project Slidr? 
Think of Slidr like the best version of YouTube annotations you've ever seen. Slidr allows users to see custom slides that follow along with a youtube video. These slides can contain Pictures, Gifs, text, links, even formatted code. Here are just a few of the user stories: 

+ **A teacher** who recorded a lecture with only a single camera can now easily present students with all sorts of extra information, without doing any extra video editing. 
+ **A vloger** making a "haul" video can present all sorts of extra close up pictures of each item, along with timed links to buy the items. 
+ **Coders** can watch a tutorial, and see all relevant code as each section goes by, and easily cut and copy examples for themselves 

### Navigate any video in seconds

No more endlessly scrolling, stopping, listening, and then re-scrolling to find your spot. The navigation buttons let you jump to the slide and section of video that you want, instantly.

### Update your tutorials with ease

Sometimes you learn more about a project after you're done with a video. Instead of shooting an entire new video, now you can throw in a slide with more pictures and gifs, even links to other videos. Maybe some technology changed since shooting, just throw on a slide explaining the new version during the relevant part of your video. 

 Creators, it's time to upgrade your videos with Slidr today! 


##### *...or at least you could if it was done*
I'm currently a student at [Flatiron School's Access Labs], and Slidr is my final project. Right now, Slidr is still just in its MVP phase. But in less than a week it will be deployed and available to anyone who feels like poking around in the beta version. 

---

# Technical Stack
Slidr is built using React, Router, and Redux, and incorporates the [YouTube Player API] to actually track the videos. On the back end I'm just running a RESTful Rails API and making fetch requests from the front end. The code for that is [available here], if you want to see. All data is serialized using the [Serializer] gem, and the dynamic, controlled forms on the front rely heavily on the [Normalizr] package. All the styling is custom [Sass], hopefully it won't be *that* obvious that I styled it myself.

## Using Slidr 
Like the rest of my portfolio, it will be deployed on Heroku, and I will likely upgrade to hobby dyno's to limit the load time. There is no installation required for the user, and accounts are not necessary to view content, only to make it. All that is required to sign up is an email account, but feel free to use a dummy one while it's still in beta.

## Challenges 
By far, the toughest part of this project was handling the actual creation of the video projects. Each video can have an unknown number of slides, and each slide can have an unknown number of sections. Each section can currently be 1 of 4 types, though I hope to add more soon. Because I didn't think that wasn't difficult enough, each one of these should be able to me moved around with ease. 

That means if you have a slide at 1:23, but want to put in a new one at 1:00, the form needs to update to reflect that. And of course, everything needs to be able to be deleted. At the time of writing, I'm currently working on all these features, but they should all make it to the release since they are necessary for basic CRUD.

## MVP 1.1 and beyond
Currently, I'm focusing on implementing all the features needed just to make a video presentation, but once the basic functionality is there, it moves on to the student/teacher segment. Because I can keep track of the timecode, the next set of features work with timed questions. In the next iteration, I would like to implement a nice heat map feature for teachers. They will be able see exactly where in the video the most students were confused, then add slides to answer the questions that the original video missed. 




[Flatiron School's Access Labs]: https://www.accesslabs.org/
[YouTube Player API]: https://developers.google.com/youtube/iframe_api_reference
[Normalizr]: https://github.com/paularmstrong/normalizr
[Serializer]: https://github.com/rails-api/active_model_serializers
[Sass]: https://sass-lang.com/
[available here]: https://github.com/MostlyFocusedMike/slides-back
