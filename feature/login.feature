Feature: Authentication filed

Scenario: User sign in with invalid credentials to see information about mistake
Given the user is on the sign in/sing up page
And fill all input with email and password
And press submit button
When the user enters invalid credentials, becouse it was not register before
Then the user should see information about invalid user data