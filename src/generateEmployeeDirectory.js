import fs from "node:fs";

let employeeDirectoryHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.3.0/mdb.min.css" rel="stylesheet" />
    <title>Our Team</title>
</head>
<body>
    <header>
        <div class="p-5 text-center bg-image" style="
            background-image: url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg');
            height: 400px;
          ">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                        <h1 class="mb-3">Our Team</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main class="container-fuid d-flex">
`;
const addTeamMember = function (data) {
    let roleSpecific = ``;
    let roleIcon = ``
    if (data.getRole() === `Manager`) {
        roleSpecific = `<i class="fas fa-building"></i> Office Number: ${data.officeNumber}`;
        roleIcon =`<i class="fas fa-chalkboard-teacher"></i>`;
    } else if (data.getRole() === `Engineer`) {
        roleSpecific = `<i class="fab fa-github"></i> GitHub profile page : <a href="https://github.com/${data.github}" target="_blank">${data.github}</a>`;
        roleIcon = `<i class="fas fa-people-carry"></i>`;
    } else if (data.getRole() === `Intern`){
        roleSpecific = `<i class="fas fa-graduation-cap"></i> School attending: ${data.school}`;
        roleIcon = `<i class="fas fa-mug-hot"></i>`
    }
    let cardContent =
        `
    <div class="card col-3 m-5 px-auto text-center">
        <div class="card-header">${roleIcon}${data.getRole()}</div>
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <ul class="list-group list-group-light list-group-small">
                <li class="list-group-item px-4">Employee ID: ${data.id}</li>
                <li class="list-group-item px-4">Employee Email: <a href="mailto:${data.email}">${data.email}</a> </li>
                <li class="list-group-item px-4">${roleSpecific}</li>
            </ul>
        </div>
    </div>
    `;
    employeeDirectoryHtml += cardContent
};
const htmlEnding = function () {
    employeeDirectoryHtml += 
    `
    </main>
    </body>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.3.0/mdb.min.js"></script>
    </html>
    `;
    return employeeDirectoryHtml
}

const finishedHTML = function(){
    const completedFile = htmlEnding();
    fs.writeFile(`./dist/index.html`, completedFile, error => {
        if(error) {
            console.log(error);
            return;
        };
        console.log(`Employee directory completed and published in ./dist under index.html`);
    });
};

export { addTeamMember, finishedHTML }