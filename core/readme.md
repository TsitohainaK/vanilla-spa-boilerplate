# Routes
use the routes file to add your route, routes are generaly composed of:
*name
*path
*render
*script

name is just to identify it, 
path is the pathname (in the url) to access to it,
render is the function that contain the html code,
and script is the function that will be called after the render, it is optional.

## exemple
here an exemple of how a route would be

`
// the exemple components need to be imported first

{
  name: "exemple",
  path: "/exemple",
  render: Exemple().render,
  script: Exemple().script
}
`