function fileToId(file, id)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
            	document.getElementById(id).innerText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

fileToId("quotes", "allQuotes")

function showAllImages(imageList, id) {
	var gallery = document.getElementById(id);

	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", imageList, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
            	list = rawFile.responseText.split('\n');
            	for (var i = 0; i < list.length; i++) {
                			//var div = document.createElement("div", {class : "mb-3 pics animation all 2"});
                			var div = document.createElement("div");
                			div.setAttribute("class", "mb-3 pics animation all 2");
                			//<img class="img-fluid" src="wallImages/image_1.png" alt="Card image cap">
                			//var image = document.createElement("img", {class : "img-fluid", src : "wallImages/" + list[i]});
                			var image = document.createElement("img");
                			image.setAttribute("class", "img-fluid");
                			if (list[i].startsWith("http"))
                			{
                			image.setAttribute("src", list[i]);
                			}
                			else
                			{
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