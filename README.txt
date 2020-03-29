Description of Folders

1. Routes
    > Holds the Page endpoints 
        ex: userAccounts.js holds the endpoints that follow localhost:3000/user
            which include enpoints '/users' & '/users/new' 
            '/users' directs to the temporary Search Users page
            '/users/new' directs to the Sign Up page

2. Views
    > Where all HTML code is located
        ~ layouts
            > holds the base html for all pages (head, and body framework with centering)
        ~ partials
            > these are smaller segments of code that will be shared by pages
                ex: errorMessages will display the error collected by the current rendered html page
                    header is the shared links to all created pages (homepage, user search, and user create)
        ~ userAccounts
            > these are specific html code for each type of page is located
                ex: index is the html code for the search users page ('localhost:3000/users')
                    new is the html code for the create users page ('localhost:3000/users/new')

3. Templates
    > Where all the HTML code previously written is stored. This code will not be used,
    but will be copied into .ejs files located in the views Folders

4. Models
    > Where the 'classes' are held. These are the json objects we create to push to the database.
        ex: userAccounts is a json object that holds data such as name, location, username, password, etc.
            cropData is the json object that holds data about our user's crop entry

5. Static
    > Where the files for bootstrap and jquery are located. This folder may not be necessary. As it does not seem
    compatible with our server and does not impact the html rendered on our site.

(6.) Server.js
    > Where we set port of our environment.  Also where we assign new endpoints/routes to branch from base endpoint '/'.
    Here is also where we connect to MongoDB we have created. Body parser is used to help us handle the json objects we recieve
    from front end.

Heroku: create a new app, upload our code to app, connect app to a sample database (new database from MongoDB).
This way we can visualize how our code runs on a separate server, and how it interacts with our database.