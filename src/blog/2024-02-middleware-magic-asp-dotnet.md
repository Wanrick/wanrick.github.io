---
title: 'Middleware Magic in ASP.Net'
pubDate: 2024-02-13
description: '“It is well-known what a middleman is: he is a man who bamboozles one party and plunders the other.” - Benjamin Disraeli'
author: 'Wanrick'
image:
    url: '/src/blog/images/dog-between-two-phones.jpg'
    alt: 'Cover image for the post'
tags: ["middleware", "dotnet8", "aspnetcore"]
---

I was at a developer conference in 2023, where I attended a session on Middleware in ASP.NET. I have heard the term used
many times, but the power of it only then became clear to me. Yet I had no real-world application, so I stored it in my
memory box and went my merry way.
The project I'm working on for my job required a massive rewrite of an outdated platform. We updated our API endpoints
that now require IDs to be sent through as part of the URL. IDs in our URLs would have been no problem if our data used Guid or
integer IDs. Sadly, this was not the case and the data we're working with used a structure for IDs that allows slashes, commas and other special characters. (You're probably ahead of me already) To prevent this, we have to encode URLs on our front end. Doing so, we ensure that when the URL contains an ID with slashes, we encode the slashes and can still route to our endpoints.

For local development, this was no problem. We encode the URL in the front end, our ASP.NET API gets called correctly, and we can decode the ID portion without hassle. All is well with the world.

We deploy to an Azure Web Service, and chaos ensues. (Maybe not as dramatic as all that, but this was where the fun started.) It turns
out that Azure decodes a URL before sending it through to the application. That means that if the ID in our URL contains
a slash, the route now has an additional slash and contains a path segment that shouldn't exist, and the application cannot identify our endpoint. The fix, you may be wondering? Enter Middleware.

The HTTP Request Pipeline is, in essence, a chain of Middleware from entering an ASP.NET application until it reaches
the controller and it continues when sending the response back to the front end.
The documentation from Microsoft describes Middleware as:
"software assembled into an app pipeline to handle requests and responses."

Essentially, a request enters the ASP.NET application and passes into a chain of Middleware, where each link can choose to pass the request to the following link before reaching the controller. The controller performs your application logic and sends the response back through the chain in the reverse order it came through. The response "bubbles up" again through the Middleware.

You may be familiar with Middleware for authorization/authentication, JSON deserialization, logging and more included by ASP.NET. You can add your own custom Middleware by calling .Use() on the application builder. The "Use" method accepts a delegate function that takes the HTTPContext and a reference to the next Middleware in the chain as parameters. It's important to note that the application executes custom Middleware as the final link(s) in the request chain before reaching the controllers. As such, we could not use custom Middleware to rewrite our request URL. We needed to change the URL before the application routes the request.

The piece of Middleware that came to our rescue: "UseRewrite". With a bit of RegEx magic, we could identify if the URL contains an ID and decode just this segment. When reaching the request router, the URL contains the correct encoding, and the routing is successful, even after Azure has changed the URL.

Middleware is a powerful tool when you need to perform some complex logic on a request or response in your HTTP pipeline. So go and get creative!

Read More on: https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-8.0