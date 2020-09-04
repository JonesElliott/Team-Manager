const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Employee variables
var newName = "";
var newID = "";
var newEmail = "";
var newRole  = "";
var newOther = "";

// Initiate the program
console.log(`
==============================================================
                        Team Management
            Follow prompts to add members to your team
==============================================================
`);
getTeamMember();

/* Write code to use inquirer to gather information about the development team members,
and to create objects for each team member (using the correct classes as blueprints!) */

// Request any badge(s)
function getTeamMember() {
    inquirer
      .prompt([
        {
            message: "Name: ",
            name: "name"
        }]).then(function({ name }) {
            console.log(name);
            newName = name;
            getID();
        });
}

function getID() {
    inquirer
    .prompt([
      {
          message: "ID #: ",
          name: "id"
      }]).then(function({ id }) {
          console.log(id);
          newID = id;
          getEmail();
      });
}

function getEmail() {
    inquirer
    .prompt([
      {
          message: "Email Address: ",
          name: "email"
      }]).then(function({ email }) {
          console.log(email);
          newEmail = email;
          getRole();
      });
}

function getRole() {
    inquirer
    .prompt([
      {
        type: 'list',
        message: "Selected Employee's Role",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
      }]).then(function({ role }) {
          console.log(role);
          newRole = role;
          switch (role) {
              case "Manager":
                  setOfficeNumber();
                  break;
              case "Engineer":
                  setGitHub();
                  break;
              case "Intern":
                  setSchool();
              default:
                  "Hmmm, that's not supposed to happen...";
          }
      });
}

function setOfficeNumber() {
    inquirer
    .prompt([
      {
          message: "Office Number: ",
          name: "oNumber"
      }]).then(function({ oNumber }) {
          console.log(oNumber);
          newOther = oNumber;
          completeEmployee();
      });
}

function setGitHub() {
    inquirer
    .prompt([
      {
          message: "GitHub Username: ",
          name: "github"
      }]).then(function({ github }) {
          console.log(github);
          newOther = github;
          completeEmployee();
      });
}

function setSchool() {
    inquirer
    .prompt([
      {
          message: "School Name: ",
          name: "school"
      }]).then(function({ school }) {
          console.log(school);
          newOther = school;
          completeEmployee();
      });
}

function completeEmployee() {
    inquirer
    .prompt([
      {
        type: 'list',
        message: "Do you want to add Another Team Member?",
        choices: ["Yes", "No"],
        name: "choice"
      }]).then(function({ choice }) {
          if (choice === "Yes") {
              console.log(`
==============================================================
                       New Team Member
==============================================================
              `);
              getTeamMember();
          } else {
              console.log('All Team Members Have been Added!');
          }
      });
}

function buildEmployeeClass() {

}

/* After the user has input all employees desired, call the `render` function (required
 above) and pass in an array containing all employee objects; the `render` function will
 generate and return a block of HTML including templated divs for each employee! */

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
