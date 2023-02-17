## useReducer Note
1. install react app.
2. install react router dom.
3. set all routes and maintain folder structure.
4. create context folder in src.
5. create state folder in src.
6. in state folder create actionTypes file and create reducers file.
7. in reducers file create initialState object. create reducers function. this function parameters are state and action. and in this function write logic for this project using if else or switch case.
8. in context folder create Provider.js file and there createContext set in variable.
9. provider function component destructure children as props.
10. in index.js wrap the App component using this provider.
11. then set useReducer get reducer and initialState parameter and it return state and dispatch in array.
12. in useEffect fetch products set products calling dispatch and pass type and payload.
13. set state and dispatch in value object.
14. in function return part as component set createContext variable . Provider and pass value from value object. in this component write {children}
15. write a function and in this function set useContext in variable and this useContext's parameter is createContext's variable. 
16. return this useContext variable. and export the function
17. now just call the function where set useContext. in this function get fetching data values.
