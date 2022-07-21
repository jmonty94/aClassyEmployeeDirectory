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
    <main class="container-fuid">
`;
const addTeamMember = function (data) {
    let roleSpecific = ``;
    let roleIcon = ``
    if (data.getRole() === `Manager`) {

    }
    let cardContent =
        `
    <div class="card text-center">
        <div class="card-header">${roleIcon}${data.getRole()}</div>
        <div class="card-body">
            <h5 class="card-title>${data.name}</h5>
            <ul class="list-group list-group-light list-group-small">
                <li class="list-group-item px-4">Employee ID: ${data.id}</li>
                <li class="list-group-item px-4">Employee Email: ${data.email}</li>
                <li class="list-group-item px-4">${roleSpecific}</li>
            </ul>
        </div>
    </div>
    `
}