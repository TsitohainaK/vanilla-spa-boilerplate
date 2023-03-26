# Routes :railway_track:

Routes contain all of your route for all different pages.
Here you import all of your pages and attribute them to a path so it return your page when requested

The routes object contain route objects

route's should have

- **name**

- **path** for acceding the route

- **element** rendered when the route is requested

- **title** you can add title to the object to change the navigator page title when the user is in the current route

as exemple:

```js
  home: {
    name: "home",
    path: "/",
    element: Home
    title: "Home page"
  }
```

This is a valide route, Home should be imported from views
