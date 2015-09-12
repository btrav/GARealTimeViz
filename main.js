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
    var countryName = item[0]
    var circle = document.createElement('div')
    circle.id = "circle"
    circle.innerText = countryName
    frag.appendChild(circle);
});

document.body.appendChild( frag );

// var box =
// getElementById('box')