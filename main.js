var removeUsers = function() {
 var list = document.getElementsByClassName("user");
 for(var i = list.length - 1; 0 <= i; i--)
 if(list[i] && list[i].parentElement)
 list[i].parentElement.removeChild(list[i]);
 console.log("hi");
}

//Sample Data below
/*
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
*/

var updateData = function() {

    $.ajax({
        'async': false,
        'global': false,
        'url': "https://ga-real-time-api-data-art.appspot.com/query?id=ahtzfmdhLXJlYWwtdGltZS1hcGktZGF0YS1hcnRyFQsSCEFwaVF1ZXJ5GICAgICAgIAKDA",
        'dataType': "json",
        'success': function (data) {
            analyticsData = data;
        }
    });
    return analyticsData;

    };


 var analyticsData = (function () {
    var analyticsData = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "https://ga-real-time-api-data-art.appspot.com/query?id=ahtzfmdhLXJlYWwtdGltZS1hcGktZGF0YS1hcnRyFQsSCEFwaVF1ZXJ5GICAgICAgIAKDA",
        'dataType': "json",
        'success': function (data) {
            analyticsData = data;
        }
    });
    return analyticsData;
})();


var frag = document.createDocumentFragment();

var updateUsers = function(){

removeUsers();

analyticsData.rows.forEach(function(item) {
  var countryName = item[0];
  var counterUserNumber = item[1];

// for statement
for (var i = item[1]; i > 0; i--) {


  // Creates initial div for each country
  var user = document.createElement('div');
  // Creates table div
  var userContent = document.createElement('div');
  // Creates table div
  var userTitle = document.createElement('span');
  userContent.className = "userContent";
  userTitle.innerText = countryName;
  userTitle.className = "countryName";
  user.appendChild(userContent);
  userContent.appendChild(userTitle);
  user.className = "user";
  frag.appendChild(user);

//end for loop
}

});


document.body.appendChild( frag );

};

updateUsers ();
var updateAll = function(){
updateData();
updateUsers();
}
setInterval(updateAll, 15000);