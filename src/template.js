// function for creating an HTML with the answers
function makeTeamHTML(theTeam) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <div id="header" class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Team</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            ${generateTeam(theTeam)}
        </div>
    </div>
</div>
</body>
</html> 
`;    
}
function generateTeam(theTeam) {
    const teamHTML = [];
    teamHTML.push(theTeam
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    teamHTML.push(theTeam
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    teamHTML.push(theTeam
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return teamHTML.join("");
}
// card template for manager
function generateManager(manager) {
    return `<div class="card" style="width: 18rem;">
    <div id="card-header" class="card-header">
      <h2>${manager.getName()}</h2>
      <h3>☕️${manager.getRole()}</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id:  ${manager.getId()}</li>
      <li class="list-group-item">Email:   <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office Number:  ${manager.getOfficeNumber()}</li>
    </ul>
  </div>`
}
// card template for engineer
function generateEngineer(engineer) {
    return `<div class="card" style="width: 18rem;">
    <div id="card-header" class="card-header">
    <h2>${engineer.getName()}</h2>
    <h3>👓${engineer.getRole()}</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id:  ${engineer.getId()}</li>
      <li class="list-group-item">Email:   <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">Github:  <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
    </ul>
  </div>`
}
// card template for intern
function generateIntern(intern) {
    return `<div class="card" style="width: 18rem;">
    <div id="card-header" class="card-header">
    <h2>${intern.getName()}</h2>
    <h3>👨‍🎓${intern.getRole()}</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id:  ${intern.getId()}</li>
      <li class="list-group-item">Email:   <a href=" ${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School:  ${intern.getSchool()}</li>
    </ul>
  </div>`
}
module.exports = makeTeamHTML;