# TODO
------
## General Tasks:
As one of your last projects, it's possible you will be sharing this with employers, so be sure to follow best practices and make it look good!

- [ ] Invest some time in styling it up!
    - [ ] Research cards for your movie posters on the list page
    - [ ] Research grids for your movie posters on the Movie List page
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.

## Home Page:
This should display all of the movies in the movie database. When a movie poster is clicked, a user should be brought to the /details view.

- [X] Display all movies in grid
    - [X] Poster display
    - [X] Title display to right poster
    - [X] Description display underneath title
    - [X] Format as card
- [x] Make poster clickable
    - [X] Moves user to the /details page


## Details Page:
This should show all details including genres, for the selected movie.

- [X] Display all movie details
    - [X] Display larger poster
    - [X] Display title to right/above of poster
    - [X] Display description under title
    - [X] Display list of genres under description
    - [X] Back to List button to return to home page
- [ ] STRETCH: Edit Page button

## Add Movie Page:
Allow the user to add a new movie including a link to the movie poster image

- [ ] Input form
    - [ ] Title input (required)
    - [ ] Poster image link input (optional)
    - [ ] Text area input for description (optional)
    - [ ] Genre list drop down (required)
        - [ ] STRETCH: Select multiple genres
- [ ] Cancel button
    - [ ] Clears all inputs
    - [ ] Returns user to Home Page
- [ ] Save button
    - [ ] Adds movie to "movies" table in DB
    - [ ] Clears all inputs
    - [ ] Returns user to the Home Page 

## STRETCH: Edit Page
Add to the detail page an edit button that brings the user to the edit page.

- [ ] Input to change movie title
- [ ] Text area to update the description
- [ ] Cancel button
    - [ ] Clears all inputs
    - [ ] Returns user to Home Page
- [ ] Save button
    - [ ] Adds movie to "movies" table in DB
    - [ ] Clears all inputs
    - [ ] Returns user to the Home Page 

## Other Goals

- [ ] Display the current values in the input (title) and textarea (description) on the Edit Page
- [ ] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql) to make this possible.
- [ ] Allow the user to select many genres
- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
- [ ] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Create an `Admin` page. Add a link from the `Home` page to the `Admin` page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (`camera`) and password (`action`), the page should display a form to add genres to the database, and a list of all of the genres with an `x` to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.