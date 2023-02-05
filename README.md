# resizeImageApi
Overview:

building an API that can be used in two different ways.As a simple placeholder API, 
the first allows you to place images into your frontend with the width and height set via URL parameters for rapid prototyping.The second use case 
is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and 
upload multiple copies of the same image to be used throughout your site.

How to build and start the server:

1. Install all dependencies

Install the dependencies and devDependencies:

npm i 

Start the server:

npm run start

Build:

npm run build
Testing and linting:

1. Linting:

npm run lint

2. Testing:

npm run test

Endpoint:

/api/images?width=<width>&height=<height>&filename=<imageName>

Method: get URL Params: height and width - the height or width of the image in pixels Query Param: filename - the specific image you are requesting.
For example : /api/images?width=200&height=200&filename=img1

Available images:
img1
img2
img3
img4
img5

Functionality:
-User can query endpoint using various params and queries to retrieve an image with a specified height and width.
-All images requested will be saved to disk.
-There is a cache layer. If a user requests an image size that has already been requested, there is no need for resizing and the previously resized image will be returned.

Coding Styles:
linting with Eslint and formatting using Prettier.

Built with:

NodeJS - The JavaScript runtime.

Express - The web framework.

TypeScript - The language used.

Sharp - NodeJS image processor.
