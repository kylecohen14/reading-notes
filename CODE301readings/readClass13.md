# CRUD

## Status Codes Based On REST Methods
1. In your own words, describe what each group of status code represents:
    - 100’s = Header req recieved. We will try. But it wont work
    - 200’s = It worked
    - 300’s = Redirected. Not avail
    - 400’s = You messed something up
    - 500’s = I (server) messed up
2. What is a status code 202?
  - Accepted. But processing. Posted with url to the finish
3. What is a status code 308?
  - Permanent redirect. Use another URL please
4. What code would you use if an update didn’t return data to a client?
  - 204
5. What code would you use if a resource used to exist but no longer does?
  - 404
6. What is the ‘Forbidden’ status code?
  - 403

## Build A REST API With Node.js, Express, & MongoDB - Quick 


### cite
  - Which HTTP Status Code to Use for Every CRUD App, April 15, 2020 (https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)

1. Why do we need to pull our MongoDB database string out of our server and put it into our .env?
2. What is middleware?
  - software, provides services outside of offerings by operating system
3. What does app.use(express.json()) do?
  - recognize the incoming req object as a json obj
4. What does the /:id mean in a route?
  - 
5. What is the difference beween PUT and PATCH?
  - put modifys version of the req resource (update)
  - patch supplies set of instructions to modify resource
6. How do you make a defalut value in a schema?
  -
7. What does a 500 error status code mean?
  - generic error response
8. What is the difference between a status 200 and a status 201?
  - 200 = req recieved and being processed
  - 201 = req was successful and resource has been created

  ### cite 
  - Build A REST API With Node.js, Express, & MongoDB - Quick (https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)