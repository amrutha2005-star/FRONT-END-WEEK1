import React, { useState } from 'react';
import './app.css';

// Child component that accepts props
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>; // Display the prop 'name'
};

// Header Component
const Header = (props) => {
  return <h1>{props.title}</h1>; // Display the title prop
};

// Footer Component
const Footer = (props) => {
  return <footer>{props.footerText}</footer>; // Display the footer text prop
};

const App = () => {
  // task-14: Show/Hide Elements - State variable to toggle visibility
  const [isVisible, setIsVisible] = useState(true);
  
  // task-23: Button Counter - State variable to track the click count
  const [count, setCount] = useState(0);
  
  // task-16: Basic Form Input Handling - State variable to store input value
  const [inputValue, setInputValue] = useState('');
  
  // task-11: Display the current date - Extract current date parts
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are 0-indexed
  const year = currentDate.getFullYear();

  // task-10: Fruit List - Array to store fruit names
  const fruits = ["Apple", "Banana", "Orange", "Grapes"];
  
  const name = "abhi"; 
  const age = 30;

  // task-5: Inline styling - Define style for the heading
  const headingStyle = {
    color: 'blue',
    fontSize: '24px',
    textAlign: 'center',
    margin: '20px',
  };

  // task-18: Render a Greeting Based on Time - Determine the greeting based on the current hour
  const hour = currentDate.getHours();
  let greetingMessage = '';
  if (hour < 12) {
    greetingMessage = 'Good Morning!';
  } else if (hour < 18) {
    greetingMessage = 'Good Afternoon!';
  } else {
    greetingMessage = 'Good Evening!';
  }

  // Handle button click
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // project: User Profile Card
  // Description: Design a card that displays a user’s name, photo, and description.
  // Allow the user to edit their name using an input field.
  // Steps:
  // 1. Create a UserCard component with props for name, image, and description.
  // 2. Use a state variable to manage the user name.
  // 3. Add an input field that updates the name dynamically.
  // Key Concepts:
  // Props for passing data.
  // State updates with useState.
  // Controlled components.

  const [userName, setUserName] = useState("A.P.J.Abdul kalam");
  const [userDescription, setUserDescription] = useState("Abdul Kalam was elected as the 11th president of India in 2002 ");
  const userImage = "https://www.newszii.com/wp-content/uploads/2018/07/Dr-APJ-Abdul-Kalam.jpg";

  // Handle user name change
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      {/* task-1: Static Text - Display simple static text */}
      <h1>hello world</h1>

      {/* task-3: Rendering Variables - Dynamically render variables */}
      <h1>Hello, {name}!</h1>
      <p>Your age is {age}.</p>
      <p>Next year, you will be {age + 1} years old.</p>
      <p>2 + 2 = {2 + 2}</p>

      {/* task-5: Inline Styling - Apply inline styling to the heading */}
      <h1 style={headingStyle}>Hello, styled with inline CSS!</h1>

      {/* task-7: Create a Component with Props - Passing props to Greeting component */}
      <Greeting name={name} />

      {/* task-14: Show/Hide Elements - Toggle visibility of greeting */}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Greeting
      </button>
      {isVisible && <h2>{greetingMessage}</h2>} {/* Conditional rendering */}

      {/* task-16: Basic Form Input Handling - Input field and dynamic display of typed value */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something"
      />
      <p>You typed: {inputValue}</p>

      {/* project User Profile Card - Create a card with user info */}
      <div className="user-card">
        <img src={userImage} alt="User" className="user-image" />
        <div className="user-details">
          <input 
            type="text" 
            value={userName} 
            onChange={handleNameChange} 
            className="user-name-input" 
          />
          <p className="user-description">{userDescription}</p>
        </div>
      </div>

      {/* task-23: Basic Button Counter - Increment counter on button click */}
      <button onClick={() => setCount(count + 1)}>
        Click me to increment count
      </button>
      <p>Button clicked {count} times</p>

      {/* task-18: Render a Greeting Based on Time - Render greeting message based on the current time */}
      <h1>{greetingMessage}</h1>

      {/* task-20: Add External CSS - Styling from external CSS */}
      <h1 className="styled-header">This is styled from an external CSS file</h1>

      {/* task-21: Render a React Element Dynamically - Render different greetings based on time */}
      {hour < 12 ? <h1>Good Morning!</h1> : <h1>Good Day!</h1>}

      {/* task-22: Practice Using Comments in JSX - This is a JSX comment */}
      {/* This is a comment that won't show up in the rendered page */}

      {/* task-24: Create a Simple Header Component - Pass title to Header component */}
      <Header title="Welcome to My React App" />
      <Header /> {/* This will use the default title if no prop is passed */}
      
      {/* task-26: Render an Image - Display an image */}
      <img src="https://th.bing.com/th/id/OIP.iKz5caJpPPsnZtf7deSdUAHaJQ?rs=1&pid=ImgDetMain" alt="Placeholder" />

      {/* task-27: Import and Use Multiple Components - Pass footer text to Footer component */}
      <Footer footerText="This is a footer message" />

      {/* task-10: Fruit List - Render a list of fruits */}
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // Rendering each fruit as a list item
        ))}
      </ul>

      {/* task-11: Display Current Date - Show the current date */}
      <h1>Current Date</h1>
      <p>{`Today's date is ${month}/${day}/${year}`}</p> {/* Display the current date */}
    </>
  );
};

export default App;
