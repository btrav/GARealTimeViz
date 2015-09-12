var data = {
  "kind": "analytics#realtimeData",
  "rows": [
    [
      "Canada",
      "1"
    ],
    [
      "France",
      "4"
    ],
    [
      "Italy",
      "1"
    ],
    [
      "Poland",
      "1"
    ],
    [
      "Ukraine",
      "1"
    ],
    [
      "United Kingdom",
      "2"
    ],
    [
      "United States",
      "15"
    ]
  ]
}


var frag = document.createDocumentFragment()

data.rows.forEach(function(item) {
    var countryName = item[0];
    var counterUserNumber = item[1];
    var user = document.createElement('div');
    var userContent = document.createElement('div');
    var userTitle = document.createElement('span');
    userContent.className = "userContent";
    userTitle.innerText = countryName;
    userTitle.className = "countryName"
    user.appendChild(userContent);
    userContent.appendChild(userTitle);
    user.className = "user"
    frag.appendChild(user);
});

document.body.appendChild( frag );