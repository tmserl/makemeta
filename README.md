# MakeMeta

[![Netlify Status](https://api.netlify.com/api/v1/badges/45fd6f91-bc19-4c47-a324-02ed6b8420e5/deploy-status)](https://app.netlify.com/sites/makemeta/deploys)

[See it in action](https://makemeta.app)

## How it started

I am guilty of Googling ‘essential meta tags’ far too many times when building new websites. Having previously worked in the Digital Marketing sector, I know first hand the importance of meta tags when linking to websites on various social platforms. The click-through rate of sites that take advantage of Twitter’s full-sized social card, for instance, is tenfold. Despite this, I always find myself Googling which meta tags to use. I decided to solve this problem and build a generator that automatically assembles all of these important and useful meta tags all in one go.

Built using React, TypeScript and deployed on Netlify, this tool quickly generates meta tags for the user dynamically, and as they are typing in their information. I decided to go for a no-frills, minimalist look, to make the process as pain-free as possible. Simply type in information such as the website title, description and image URLs, and the site does all the hard work for you.

This project introduced me to React’s conditional rendering, allowing only specific components to render when the relevant state is captured from the form. MakeMeta was also my first project built using TypeScript. I found the process of declaratively typing variables and functions very useful; allowing me to know exactly what type of data should be captured in React’s state. I can also see how this additional typing can make for an easier re-introduction of the codebase in the future, when I might not of seen the code for some time.

## Screenshots

### Input form

![MakeMeta](/README/makemeta1.png)

### Meta tag output

![MakeMeta](/README/makemeta2.png)

### Conditional rendering

![MakeMeta](/README/makemeta3.gif)
