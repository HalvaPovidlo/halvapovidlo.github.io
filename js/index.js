function fileToId(file, id) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                document.getElementById(id).innerText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

fileToId("quotes", "allQuotes")
let allSum = 0;

function showAllImages(imageList, id) {
    var gallery = document.getElementById(id);

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", imageList, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                list = rawFile.responseText.split('\n');
                for (var i = 0; i < list.length; i++) {

                    var div = document.createElement("div");
                    div.setAttribute("class", "mb-3 pics animation all 2");

                    var image = document.createElement("img");
                    image.setAttribute("class", "img-fluid");
                    if (list[i].startsWith("http")) {
                        image.setAttribute("src", list[i]);
                    } else {
                        image.setAttribute("src", "wallImages/" + list[i]);
                    }
                    gallery.appendChild(div);
                    div.appendChild(image);
                }
            }
        }
    }
    rawFile.send(null);
}

showAllImages("wallImagesList", "wallGallery")

function generateLeaderboard(leaderboardList, id) {
    var tbody = document.getElementById(id);

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", leaderboardList, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                list = rawFile.responseText.split('\n');
                for (var i = 0; i < list.length; i++) {
                    allSum += Number(list[i].split(' ')[1]);
                    var row = document.createElement("tr");
                    var cell1 = document.createElement("th");
                    cell1.scope = "row";
                    var cell2 = document.createElement("td");
                    var cell3 = document.createElement("td");
                    var cell4 = document.createElement("td");
                    textnode1 = document.createTextNode(i);
                    textnode2 = document.createTextNode(list[i].split(' ')[0]);
                    textnode3 = document.createTextNode(list[i].split(' ')[1]);
                    textnode4 = document.createTextNode((list[i].split(' ')[1] - 1000) / 1000 * 100 + "%");
                    cell1.appendChild(textnode1);
                    cell2.appendChild(textnode2);
                    cell3.appendChild(textnode3);
                    cell4.appendChild(textnode4);
                    row.appendChild(cell1);
                    row.appendChild(cell2);
                    row.appendChild(cell3);
                    row.appendChild(cell4);
                    tbody.appendChild(row);
                }
            }
        }
    }
    rawFile.send(null);
}

generateLeaderboard("ludikLeaderboard", "contestLeaderboard")

function updateProgressBar(leaderboardList, id) {
    var progressBar = document.getElementById(id);

    var percent = 20;
    percent = allSum / 100000 * 100;
    progressBar.style = "width: " + percent + "%;";
    progressBar.innerText = percent + "%";

}

updateProgressBar("leaderboardList", "progressBar")