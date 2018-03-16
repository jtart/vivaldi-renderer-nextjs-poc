# Vivaldi Renderer Next.JS POC

POC of Vivaldi Renderer using Next.JS.

## Usage
1. `yarn install`
2. `yarn dev`
3. Server will start on http://localhost:3000
4. There is a single API, `/article`. Pass a query param of `data` that is an encoded JSON object with the schema:
```
{
  "title": [string],
  "heading": [string],
}
```
[Example request](http://localhost:3000/article?data=%7B%22heading%22%3A%22Hello+World%21%22%2C%22title%22%3A%22Title+-+Hello+World%21%22%7D).