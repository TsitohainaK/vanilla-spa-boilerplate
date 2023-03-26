# Routes :railway_track:

Routes contain all of your route for all different pages.
Here you import all of your pages and attribute them to a path so it return your page when requested

The routes object contain route object

route's should have

- **name**

- **path** for acceding the route

- **element** element rendered when the route is requested

as exemple:

```js
  home: {
    name: "home",
    path: "/",
    element: Home
  }
```

This is a valide route, Home should be imported from views
