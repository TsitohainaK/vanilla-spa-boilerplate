# Component, View stucture

## render()
a component is a function that return atleast a render function, i.e the html in as a string 

## script()
paired with the actual script this function is used to handle the changement on the his html,
so it is called after the render function, this function is optional but if it exist,
it need to be returned with the render function as 

### exemple
here an exemple of how a component or view file should look like

`
export default function Exemple(){
  /* Here your script that will be called before the render */
  const user = "John Doe"
  
  function script(){
    /* Here your script that will be called after the render */
  }

  /* Your html code here */
  const render = () => 
  /*html*/
  `<h1>Hello ${user}, welcome</h1>`;

  return {
    render, script
  }
}
`