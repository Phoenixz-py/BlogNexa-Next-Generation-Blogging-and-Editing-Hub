# Blog_in_React

The application was created using React, a JavaScript library for building user interfaces. The application displays a list of blog posts, as well as a form for creating new posts. The user can sort the posts by date or title, and they can also delete posts.

The biggest challenge in creating the application was deleting posts. The application uses a RESTful API to fetch the list of blog posts, and the API does not support deleting posts. To overcome this challenge, the application uses a workaround that involves fetching the list of blog posts again after a post is deleted.

Another challenge was sorting the posts by date or title. The application uses Array.sort() method to sort the posts, but this method can only sort the posts by a single property. To overcome this challenge, the application uses a custom sorting function that sorts the posts by both the date and the title.

Creating new posts was the least challenging part of the project. The application uses a simple form to collect the information for a new post, and the information is then submitted to the API. The API creates the new post and returns the post object to the application.

The project was a success. The application was created on time, and it meets all of the requirements assigned by the internship requirement. The application is also easy to use and navigate.



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
TO RUN:
1. npm install
2. npm start
I'm skipping details as anyone can know how to run and in which dir
