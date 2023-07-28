
# React Star Rating Component API

A highly customizable star rating component for React applications, designed to be easily integrated into any review system.

## Featuers

- **Highly Customizable**: This star rating component offers a wide range of customization options, allowing you to adapt it to your specific needs.
- **Size and Classname Customization**: You can easily adjust the size and provide a custom CSS class to the star rating component.
- **Default Rating:** Set a default rating value to display when no user rating has been given.
- **Messages Array**: Supply an array of messages to be displayed for each rating level, adding a personal touch to your review system.
- **Color Options:** Customize the color of the stars and other elements to match your application's design.


##  Import

Import the StarRating component into your React application:
jsx
```
import StarRating from "react-star-rating-component";
```

## Usage

```
import React, { useState } from "react";
import StarRating from "react-star-rating-component";

function App() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating
        maxRating={10}
        size={24}
        color="red"
        className="test" // Define these classes in the styles.css
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        defaultRating={2}
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </>
  );
}

export default App;
```
## Props

Here are the available props that you can pass to the StarRating component:

- **maxRating (number, optional)**: The maximum rating value (default: 5).
- **color (string, optional)**: The color of the stars (default: "#fcc419").
- **size (number, optional)**: The size of the stars in pixels (default: 48).
- **className (string, optional)**: Custom CSS class to be applied to the star rating container.
- **messages (array, optional)**: Array of messages to display for each rating level.
- **defaultRating (number, optional)**: The default rating value to display (default: 0).
- **onSetRating (function, required):** Callback function that is triggered when a rating is set, receiving the new rating value as an argument.


## Styling

To customize the styling of the component, you can define CSS classes and use them with the className prop. Here is an example of how you can define styles in your styles.css file:

```
/* styles.css */
.test {
  /* Your custom styles go here */
}

```
