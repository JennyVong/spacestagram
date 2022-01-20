# Spacestagram: Shopify Frontend Summer Internship Challenge 2022  :O

- Demo [Spacestagram here](https://jennyvong.github.io/spacestagram/) :D
- [Source Code here](https://github.com/JennyVong/spacestagram/tree/master) :)

## Development server

To run Spacestagram on your local machine:
- clone repo onto local machine
- run `npm install` to install dependencies
- run `npm run start`
- navigate to `http://localhost:4200/`

## Features  ^(^-^)^

### View images from NASA's Rover Photos API
- view images in a Masonry theme using the Angular module, ngx-masonry
    - https://github.com/wynfred/ngx-masonry
- see description of its Rover name, Camera name and date
- click on image to view enlarged and zoom in if needed
- loads 20 images at a time

### Like images (star)
- liked images are saved into a `localstorage` to retain data on refresh
- can view liked images in the liked images page by clicking on the profile icon on the right hand side of the navbar
- can dislike images on any page
    - disliking an image on the liked images page will automatically remove the image there

### Search images by camera
- search bar in navbar filters displayed images on main page based on input
- option to choose a specific camera through dropdown

### Loading State
- instead of seeing a blank black page, a loading progress bar is displayed while images are being fetched from the api

### Responsiveness
- can be viewed on mobile, desktop and display

## Future Additions  O.o

### Search liked images
- allow users to search and filter different cameras on the liked images page

### Additional image APIs
- load a variety of photos and expand the filtering search bar to a system
- could incorporate a save image button and section
    - filtered by API
    - profile icon would represent both saved and liked images

### Full Stack!
- add a backend and database so each user can have their own liked and saved images
- express and SQL?

## Design (>^-^)>

- ideas were planned out in Figma: https://www.figma.com/file/WPlX3CQbbcOgvg3Dzz2xzw/Spacestagram?node-id=0%3A1

## Development ._.

- Angular CLI (https://github.com/angular/angular-cli) version 11.0.6.
- Angular Material for the icons and menu in mobile view https://material.angular.io/
