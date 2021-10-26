# trello-clone-via-digital-challenge
Via Digital challenge to create a Trello clone

## install dependencies
On path ```app``` and ```api``` run:  
```shell
npm i
```

## run application
On path ```app``` run:  
```shell
npm run serve
```

On path ```api``` run:  
```shell
npm run dev
```

## Techonologies
* App
    - Vue 3
    - Vue draggable next
    - Tailwind
    - daisyUI
* Api
    - Fastify
    - FaunaDB

## Project features
[*] Create columns  
[*] Add cards to a column  
[*] Move cards inside and between columns  
[*] Auth

## Things that could be done better
* Auth
    - The session token is not invalidated and exchanged with another one
    - Keys could be stored in a Redis instance and invalidated when they where removed
* Updates
    - All column updates are made sending the whole column data back to API
* User data
    - Boards and columns are not loaded and shown to the user
* Real time
    - Updates could be fast and all sessions would kept in sync with WebSockets
