# AngularInterview

This project is used in the interview process at TrendMiner

## Getting started

Make sure you have node (>=12.18.3) and npm (>=6.14.6) installed 

* Check out the project
* Run `npm install`
* Run `npm start api` to start the API server
* Run `npm run test` to test the application
    * When you just checked out the project you will have some test failures
    * 4 failed Test Suites
    * 6 failed Tests
    * 1 failed Snapshot
* Run `npm start` to start the application 
 

## API documentation

### Retrieve context items

**Request**

GET http://localhost:3333/api/context

**Response**

```json
[
   {
     "id":"1",
     "name":"Example1",
     "type":"INFORMATION"
   },
   {
     "id":"2",
     "name":"Example2",
     "type":"BATCH"
   },
   {
     "id":"3",
     "name":"Example3",
     "type":"INFORMATION"
   }
 ]
```

### Add context items

**Request**

POST http://localhost:3333/api/context

**Body**
```json
{
  "name": "string",
  "type": "string"
}
```

**Response**
```json
   {
     "id":"1",
     "name":"Example1",
     "type":"INFORMATION"
   }
```

## Goals

The goal of this interview is for us to understand your thought process and how you cope with different situations, this is equally or even more important than the code you write so don't hesitate to think out loud.
As you have seen when running the tests some of them fail, it's up to you to implement the missing functionality so they become green.
In the end, when all tests pass the application should look like this. ![Result](./images/end-result.png).

### 1. Make sure existing items are rendered correctly
At the moment context items not are retrieved from the API server and not displayed, correctly implement the facade to achieve this.

### 2. We also want to be able to add some context items
For now, clicking on create doesn't do much, make sure when you click on this button:
* The item is saved on the server
* The form is cleared

### 3. Implement reducer test for all of the actions
`apps/angular-interview/src/app/domain/store/reducers/context-item.reducer.spec.ts` only contains a test for an unknown action implement test for the following actions:
* setContextItems
* toggleLoading
