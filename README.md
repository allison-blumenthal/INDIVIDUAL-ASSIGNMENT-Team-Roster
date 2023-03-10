Netlify app site: https://team-roster-blumenthal.netlify.app

Provided ERD: (https://user-images.githubusercontent.com/29741570/180609833-7f231bf4-42a5-4f0a-b8b1-fae1c78cffc4.png)

Stretch 2 ERD: (https://www.figma.com/file/r4FaDh7vAL6DepnJopP8UV/Team-Roster-Stretch2-ERD?node-id=0%3A1&t=sb0H8Hc9ewKdBfx0-1)

Wireframe: 
(https://www.figma.com/file/M6kBcjfsQ9zfkCxx5aGLJy/Team-Roster-DoggieDaycare?node-id=0%3A1&t=9twdA9KkbZMHAmG3-1)

Flowchart:
(https://www.figma.com/file/0VYWA1adyqetrQTQFpfBqB/Team-Roster-DoggieDaycare-Flowchart?node-id=0%3A1&t=jqCH0XCVy12HOtGD-1)

FEATURES LIST

- Authentication 
  - When logged out:
    - login button visible
  - When logged in:
    - cannot see the login button
    - Team view visible
    - logout button visible

- Routing
  - Navbar links
    - Team --> navigates to '/team' and shows h1 tag that says "Team"
    - New --> navigates to '/new' and shows h1 tag that says "Add a Member"

- Create Member
  - Click 'New" in navbar --> displays form to add a new member
    - new member object has user's UID
    - new member object is created in Firebase and now shows in Team view

- Read Member
  - Click 'Team' in navbar --> displays all member objects that have been added by user
  - User cannot see member objects created by other users

- Update Member
  - Each member card has an 'Edit' button
   - Click 'Edit' button on member card --> displays a form with the member's info pre-populated
    - Form is editable - when 'submit' is hit, the member object is updated in firebase and Team view updates with new info

- Delete Member
  - Each member card has a 'Delete' button
  - Click 'Delete' button on member card --> member object is removed from the user's database and Team view updates accordingly 
