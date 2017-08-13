# app.kintos.mx

Users platform for Kintos

## toDo

  - show error messages at login
  - fix register and login process
  - add design and layouts
  - add menu and routes
  - create components
  - implement functionaly
  - check security and development

## Usage

Create an account at https://firebase.google.com/

- `git clone https://github.com/kintos/app.kintos.mx.git kintos`
- `cd kintos`
- `npm install`

Create the environment files below in `src/environments/`.

#### environment.ts
```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "APIKEY",
    authDomain: "DEV-APP.firebaseapp.com",
    databaseURL: "https://DEV-APP.firebaseio.com",
    storageBucket: "DEV-APP.appspot.com"
  }
};
```
#### environment.prod.ts
```typescript
export const environment = {
  production: true,
  firebaseConfig: {
    // same as above, or use a different firebase project to isolate environments
  }
};
```

And finally `npm start`


## Notes

If any problem with npm run

``` npm cache clean ```

To get the firebase credentials please refer to firebase.google.com