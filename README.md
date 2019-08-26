This project is a small tournament web application where user can see the leaderboard and his/her position in the tournament
he/she can also see the price offered at different postion.

## Project Setup
- Unzip the folder and open it in any IDE like Visual studio code
- Install the dependencies using `npm install` install node if it complains
- Run the application using `npm start`
- Build the production application using `npm build`

## Note
### Need to enable cors as it throws cors issue when running in local


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run format`
Will format the source file.

### `npm run lint`
Will show linting issue

### `npm run coverage`
Will provide the test coverage

## Folder Structure


- `coverage`: output folder for test coverage reports.
- `dist`: production build of application.
- `src`: source code of project.
    - `components`- list of all components. Each component has its own scss and test file.
    - `configs` - configuration properties.
    - `constants` - string constants.
    - `sharedComponents` - resuable components. Each resuable component has its own scss and test file.
    - `states` - redux states that includes action, selector, reducer and their tests
    - `store` - redux setup combine reducer and store initialisation
    - `utils` - global resuable functions
- `test`: unit testing mock file only.

## Tech Stack
React, Redux, Jest, Enzyme, Webpack, Prettier, Eslint 

## Requirement
- `Tabs`
    - `Highlight active tab component`
    -  `Switchable and shows content of active tab`
- `Leaderboard`
    - `Diplay in tab form with headers pos, score and prize`
    - `Display top three players and the current user postion (if user is not a part display top four)`
    - `User details will be highlighted`
    - `Show points to reach to next available prize, hide when user at top position`
- `Prizes`
     - `Diplay in tab form with headers Positions, Prize`
- `Caching`
    - `The data fetched from API is cached fro 3 mins. No additional Api is called even the page is refreshed during this time`


## Assumptions
- `Leaderboard : When user's positon is not in the prize range show 0.00 in prize column for the user row`
- `When user is in top prize range hide next available prize points`