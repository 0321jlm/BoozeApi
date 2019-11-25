# Project 3 - Favorite Breweries

Called "Favorite Breweries", is an application that tracks your favorite breweries per state. The app allows a user to search for local breweries, save them as a favorite and add ratings and comments

Functionality includes full CRUD with a show, create new favorites, update and delete.

### Developers

Fred Kaesmann
Jess Madeux
JoAnn Briggs

## URL to site

xxx

## Screen Shot

![](https://user-images.githubusercontent.com/35512164/69552265-292e3480-0f6c-11ea-9e3f-3434a12d2c99.png>)

## Features

```
1. Home page encourages users to create an account
2. Ability to create a new user account
3. Ability to create new stock holding, edit them, and delete them
4. Main feature is to protect the home page with a session key

```

## Key Technologies

```
- JavaScript
- HTML
- CSS
- Bootstrap
- Mongo
- Mongoose
- Node JS
- React
- Express


```

## import

```
Node

Axios
CORS
React
React-dom
React-Scripots
React Strap

Mongo

npm install mongoose
echo DBQuery.prototype.\_prettyShell = true >> ~/.mongorc.js

```

## Key Code Functions

```
* Reading reading third-part API (https://api.openbrewerydb.org/breweries?by_state=connecticut) to pull in breweries by state
* Storing rating, comments and object returned from API into Mongo DB
* CRUD funtionality
    const { baseURL } = this.props;
    const showEditForm = this.state.editButton ? (
      <UpdateBooz booz={this.state.selectedBrewery} getModel={this.getModel} />
    ) : (
      <ShowBooz booz={this.state.boozToShow} booz2={this.state.boozComments} />
    );

```

## Main problems

```
1. Difficulties in keeping the ports in sync, as Express defalts to 3000
2. Passing state up to the top .js file
3. Difficulties in styling React tags
```

## Credits

```
- w3schools.com https://www.w3schools.com/
- stack overflow https://stackoverflow.com/
- Bootstrap https://getbootstrap.com/
- Mongo database https://www.mongodb.com/
```

## Authors and acknowledgment

The General Assembly instructors were key resouces in developing this site

# Favorite Breweries

Fred Kaesmann, Joann Briggs,

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

/////////////////

import React, { Component } from "react";
import axios from "axios";

class UpdateBooz extends Component {
constuctor() {
// super();
this.state = {
rating: 0,
comments: ""
};
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
this.setState({
rating: this.props.booz.rating,
comments: this.props.booz.comments
});
}

handleChange(event) {
const { name, value } = event.target;
this.setState({
[name]: value
});
}

async handleSubmit(event) {
// try {
// event.preventDefault();
// const boozID = this.props.booz.\_id;
// const url = `http://localhost:3003/booz/${boozID}`;
// const payload = {
// rating: this.state.rating,
// comments: this.state.comments
// }
// const updatedBooz = await axios.put(url, payload);
// this.props.getBooz();
// this.setState({
// rating: {},
// comments: ''
// }
// ) catch (err){
// console.log('Update Submit Error: ', err);
// }
// }
}

render() {
return (
<div>
<h1>Update Info</h1>
<form onSubmit={() => this.handleSubmit}>
<div>
<label htmlFor="rating">Rating:</label>
<input
type="number"
name="rating"
id="rating"
OnChange={this.handleChange}
// value={this.state.rating}
/>
<label htmlFor="comments">Comments:</label>
<input
type="text"
name="comments"
id="comments"
onChange={this.handleChange}
// value={this.state.comments}
/>
<input type="submit" value="Update Booz" />
</div>
</form>
</div>
);
}
}

export default UpdateBooz;
