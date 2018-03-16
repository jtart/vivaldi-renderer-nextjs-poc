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