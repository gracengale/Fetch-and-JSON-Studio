window.addEventListener("load", function() {
    let container = document.getElementById("container");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            for (i = 0; i < json.length; i++) {
                let bioName = `${json[i].firstName} ${json[i].lastName}`;
                let spaceHours = json[i].hoursInSpace;
                let active = json[i].active;
                let skillsArray = json[i].skills;
                let skills = skillsArray.join(", ");
                let picture = json[i].picture;

                container.innerHTML += "<div class='astronaut'><div class='bio'><h3>" + bioName + "</h3><ul><li>Hours in space: " + spaceHours + "</li><li class='activity'>Active: " + active + "</li><li>Skills: " + skills + "</li></ul></div><img class='avatar' src=" + picture + "></div>";
            }  
        });        
    });
});