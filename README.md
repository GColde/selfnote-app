# selfnote-app

Project to keep track of your daily life

````
# Introduction

Build this to have some personal tracker for training performence,
liked recipes + nutrition checker to have everything in one place (instead of using sticky notes).


# Getting Started

## 1. Installation Process

### Prerequisites

Ensure you have the following software installed on your system:

- Node.js (version 14.0.0 or higher)
- Git

### Steps

1. **Clone the Repository**

   Open your terminal and clone the repository using the following command:

   ```bash
   git clone https://github.com/GColde/selfnote-app

2. **Navigate to the Project Directory**

    cd selfnote-app

3. **Install Dependencies**

    Use npm or yarn to install the necessary dependencies:
    ```bash
    npm install


## 2. Software Dependencies

This project relies on several npm packages. The main dependencies include:

-Vite
-React (or Vue/Preact/Svelte, depending on your project setup)
-Other project-specific libraries (e.g., Axios, TailwindCSS)

For a complete list of dependencies, refer to the package.json file in the root directory of the project.


## 3. Latest Releases

To stay updated with the latest releases, you can:

-Watch the repository on GitHub
-Check the CHANGELOG.md file for a summary of recent changes
-Follow the release tags on the GitHub repository


## 4. API References


## Database
For the project database, MongoDB is recommended.

## API Keys
To utilize the nutritionix API, create an account on [nutritionix.com](https://www.nutritionix.com) and provide the necessary keys in `const.js`.

# Example MongoDB Collections and Documents

## Collection: "users"
Document example:
```json
{
  "name": "testsubject",
  "email": "test@gmail.com",
  "password": "sh2b$15005asda/.sda0j/VSasdCl,?Vstl2%5b60Zp$3zfhhs.G"
}


## Collection: "daylogsV2"
Document example:
```json
{
  "task": "Dumbells",
  "weight": "95",
  "year": 2024,
  "day": 8,
  "month": "May",
  "userId": {
    "$oid": "5881a1b505858974j5850611543e"
  }
}

## Collection: "recipes"
Document example:
```json
{
  "name": "Paella",
  "time": "Dinner",
  "ingredients": "Olive oil,Onion,Bell pepper,Garlic,Saffron threads,Chicken,Lemon wedges,Fresh parsley",
  "stepOne": "Heat olive oil, sauté onions, peppers, garlic. Add salt, pepper, paprika. Stir in diced tomatoes and rice.",
  "stepTwo": "Pour broth, add saffron. Arrange protein (chicken, chorizo, shrimp). Simmer until rice is almost cooked.",
  "stepThree": "Nestle lemon wedges, sprinkle parsley. Cook until socarrat forms. Rest, then serve directly from the pan. Enjoy!"
    "userId": {
    "$oid": "5881a1b505858974j5850611543e"
  },
}

# Build

1. **Run the Build Command**

    Use the following command to create an optimized production build:

   ```bash
   npm run build

    This will generate a dist directory containing the production-ready files.


2. **Serve the Production Build**

    You can preview the production build locally using a static server. For example, using vite preview:

    ```bash
    npm run preview

    This will start a local server and open the production build in your default browser.

    By following these steps, you should be able to set up, develop, and build your Vite
    application successfully. For any issues or further customization, refer to
    the official Vite documentation or the documentation provided within your project's repository.




````
