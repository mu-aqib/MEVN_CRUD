# MEVN Crud Application

## Description
The MEVN CRUD (Create, Read, Update, Delete) application is designed to manage cars and car categories, establishing a meaningful relationship between the two entities. Utilizing the MEVN stack (MongoDB, Express.js, Vue.js, Node.js), the project allows users to perform various operations on cars and categories seamlessly.

## Key Features:
1)  **Secure User Authentication**: The backend employs JWT (JSON Web Tokens) and bcrypt for secure user authentication and password hashing.
2)  **Frontend & Backend Secure Routing**: The frontend has secire routing and layout fot authentic and un-authentic users. The backend has middleware which verify the user token and create a secure operation.
3)  **Expressive Backend**: The backend is built using Express.js, facilitating robust and efficient API development.
4)  **Real-time Data Validation**: Vuelidate, a Vue.js plugin, enables real-time validation of form inputs, ensuring data accuracy.
5)  **Interactive Frontend**: The Vue.js frontend is enriched with Bootstrap-Vue, providing an intuitive and user-friendly interface.
6)  **Smooth Data Handling**: Axios enables seamless communication between the frontend and backend, streamlining data retrieval and updates.
7)  **Dynamic Data Presentation**: Vue-tables-2 offers dynamic and interactive data table functionalities for a visually appealing user experience.
8)  **State Management**: Vuex simplifies state management, ensuring consistent and centralized data handling across components.


## Concepts Used:
  ### Frontend
  ```
1)  axios
2)  bootstrap-vue
3)  vue-router
4)  vue-tables-2
5)  vuex
6)  vuelidate
```

### Backend
  ```
1)  express
2)  bcryptjs
3)  cors
4)  dotenv
5)  express-async-handler
6)  jsonwebtoken
7)  mongoose
```      
# Folder Structure

<img width="265" alt="Screenshot 2023-07-22 at 9 32 04 PM" src="https://github.com/mu-aqib/MEVN_CRUD/assets/60979323/0d4e6cda-fb9d-40c7-a42b-2b63e8c50092">


## Project setup
#### frontend
```
npm install
npm run serve
```

#### backend
```
npm install
npm run dev || npm start
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
