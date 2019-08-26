This project is a small tourname web application where user can see the leaders board and thier position in the tournament
The user can also see the price offered at different postion.

## Project Setup
- unzip the folder and open it in any IDE
- Install the dependency using `npm install` install node if it complains
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
will show linting issue

### `npm run coverage`
Will provide the test coverage

## Folder Structure


- `coverage`: output folder for generated code coverage reports.
- `dist`: production build of application.
- `src`: source code of project.
    - `components`- list of all components. Each component has its own css and test file.
    - `configs` - configuration properties.
    - `constants` - string constants.
    - `sharedComponents` - resuable components. Each resuable component has its own css and test file.
    - `states` - redux states that includes action, selector, reducer and their tests
    - `store` - redux setup combine reducer and store initialisation
    - `utils` - global resuable functions
- `test`: unit testing mock file only.

## Tech Stack
React, Redux, Jest, Enzyme, Webpack, Prettier, Eslint 

## Requirement
- `Tabs`
    - `Highlighted active tab component`
    -  `switchagle and shoe content of active tab`
- `Leaderboard`
    - `Diplayed in tab form with headers pos, score and prize`
    - `Display top three players and the current user postion and if user is not a part display top 4`
    - `User details will be highlighted`
    - `show points to reach to next available prize, hide when user at top position`
- `Prizes`
     - `Diplayed in tab form with headers Positions, Prize`
- `Caching`
    - `Api Response is cached for 3 mins. no api is called for next 3 mins after api call`


## Assumptions
- `Leaderboard :  when user positon is not in the prize range show 0.00 in prize column for the user row`
- `when user is in top prize range hide next available prize points`