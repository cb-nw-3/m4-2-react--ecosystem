# 4.2.4 React Router

Modern JS apps use "client-side routing".

---

# Routes

All routes are defined in the React application.

```jsx
import {Route} from 'react-router-dom';

<Route path="/about">
  <About />
</Route>
<Route path="/blog">
  <Blog />
</Route>
```

---

A `<Route>` component consists of at least two things:

- The path to match (eg. "/about")
- What to render when the path matches (the `children` prop)

---

# Why?

Why might we do routing this way, instead of doing it with Express on the back-end?

---

# Exercise

What gets rendered in the following snippets?

---

```jsx
<div>
  <Route exact={true} path="/">
    Home
  </Route>
  <Route path="/about">About</Route>
</div>
```

Current URL: http://localhost:3000/about

//it won't render the first route. It does contain / but not that exactly, so it'll render what is contained in the second route, wich is "about"

```jsx
<div>
  <Route path="/items/:itemId">Item detail page</Route>
  <Route path="/items">Item list page</Route>
  <Route>404 not found</Route>
</div>
```

Current URL: http://localhost:3000/items/abc

//this will resolve to "item detail page" AND "Item list page" AND 404 not found since items is contained inside of the first route AND if you have no path in your route it always get's rendered

# `<Switch>`

Renders the first match
NB. if you place a broad path first, like our 404, it'll always render this first. So place them from the most specific to the least (unless you use exact hehehe).

---

# Router

All routes must be nested under a router

---

```jsx
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//"as" is used to rename an import. So BrowserRouter is renamed to whatever we want. In this case Router
function App(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/shop/:itemId">
            <ItemDetails />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

---

# Link

Use the provided `<Link>` component to get from one route to another.

```jsx
import { Link } from "react-router-dom";

<Link to="/shop/abc123">View item details</Link>;
```

---

# Question

Why use `<Link to="...">` instead of `<a href="...">`?

---

# Question

Is this "real" navigation?

yes, we are leverage push state API.

---

### Accessing URL params

```jsx
<Route path="/items/:itemId">
  <ItemDetails />
</Route>
```

`ItemDetails` has no props!

How will it access the `itemId` URL parameter?

---

# Hooks

Hooks are a relatively modern addition to the React framework.

They let us "hook in" to React internals.

We'll learn much more about them in the next few lectures.

---

```jsx
//inside APP
<Route path="/items/:itemId">
  <ItemDetails />
</Route>;

//this is in the component
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  // `useParams` is the hook.
  // Hooks always start with `use`.
  //ItemId is now a variable that holds our req.paramater
  const { itemId } = useParams();

  return <h3>Item ID: {itemId}</h3>;
};
```

[Documentation](https://reacttraining.com/react-router/web/example/url-params)

---

# Fin
