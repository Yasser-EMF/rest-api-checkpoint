Great! Here’s how you can test your API with Postman:

1. Testing the GET Route: Retrieve All Users
Method: GET
URL: http://localhost:3000/users
Steps:

Open Postman.
Select GET from the method dropdown.
Enter http://localhost:3000/users in the URL field.
Click the Send button.
You should receive a response with a list of users (if any exist).
2. Testing the POST Route: Add a New User
Method: POST
URL: http://localhost:3000/users
Body: raw JSON
Example JSON Body:

json
Copy code
{
  "name": "MOHAMED",
  "email": "business.elmachhoune@gmail.com"
}
Steps:

Select POST from the method dropdown.
Enter http://localhost:3000/users in the URL field.
Go to the Body tab.
Select raw and choose JSON from the dropdown.
Paste the JSON body (like the example above) into the text area.
Click the Send button.
You should receive a response with the newly created user object.
3. Testing the PUT Route: Edit a User by ID
Method: PUT
URL: http://localhost:3000/users/{id}
Body: raw JSON
Example JSON Body:

json
Copy code
{
  "name": "MOHAMED EL MACHHOUNE",
  "email": "business.elmachhoune@gmail.com"
}
Steps:

First, get a user’s ID by performing a GET request.
Select PUT from the method dropdown.
Replace {id} in the URL with the actual user ID (e.g., http://localhost:3000/users/64d9e7d6b41d9c3d4b123456).
Go to the Body tab.
Select raw and choose JSON from the dropdown.
Paste the JSON body (like the example above) into the text area.
Click the Send button.
You should receive a response with the updated user object.
4. Testing the DELETE Route: Remove a User by ID
Method: DELETE
URL: http://localhost:3000/users/{id}
Steps:

First, get a user’s ID by performing a GET request.
Select DELETE from the method dropdown.
Replace {id} in the URL with the actual user ID (e.g., http://localhost:3000/users/64d9e7d6b41d9c3d4b123456).
Click the Send button.
You should receive a response confirming that the user has been deleted.
