
import express  from 'express'
import bodyParser  from "body-parser";

var app2 = express()
app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({extended: true}))
var server = app2.listen(3001, console.log('server is running on port 4000'))

//get
app2.get('/api/get', (req, res) => {
   
var sa1,sa2,sa3,sa4,sa5,sa6,sa7,sa8,sa9;

// Call the API
fetch('https://cottoapi.com/api.php?game=sagame&tablename=E01').then(function (response) {
	if (response.ok) {
		return response.text();
	} else {
		return Promise.reject(response);
	}
}).then(function (data1) {

	// Store the post data to a variable
	sa1 = data1;

	// Fetch another API
	return fetch('https://cottoapi.com/api.php?game=sagame&tablename=E02' );

}).then(function (response) {
	if (response.ok) {
		return response.text();
	} else {
		return Promise.reject(response);
	}
}).then(function (data2) {
	sa2 = data2;
    return  fetch('https://cottoapi.com/api.php?game=sagame&tablename=E03' );
}).then(function (response) {
	if (response.ok) {
		return response.text();
	} else {
		return Promise.reject(response);
	}
}).then(function (data3) {

	// Store the post data to a variable
	sa3 = data3;

	// Fetch another API
	return fetch('https://cottoapi.com/api.php?game=sagame&tablename=E04' );

}).then(function (response) {
	if (response.ok) {
		return response.text();
	} else {
		return Promise.reject(response);
	}
}).then(function (data4) {
	sa4 = data4;
    return  fetch('https://cottoapi.com/api.php?game=sagame&tablename=E05' );
}).then(function (response) {
	if (response.ok) {
		return response.text();
	} else {
		return Promise.reject(response);
	}
}).then(function (data5) {

	// Store the post data to a variable
	sa5 = data5;

	// Fetch another API
	return fetch('https://cottoapi.com/api.php?game=sagame&tablename=E06' );

}).then(function (response) {
	if (response.ok) {
		return response.text();
	} else {
		return Promise.reject(response);
	}
}).then(function (data6) {
	sa6 = data6;
    return  fetch('https://cottoapi.com/api.php?game=sagame&tablename=E07' );
}).then(function (response) {
	if (response.ok) {
		return response.text();
	} else {
		return Promise.reject(response);
	}
}).then(function (data7) {

	// Store the post data to a variable
	sa7 = data7;

	// Fetch another API
	return fetch('https://cottoapi.com/api.php?game=sagame&tablename=E08' );

}).then(function (response) {
	if (response.ok) {
		return response.text();
	} else {
		return Promise.reject(response);
	}
}).then(function (data8) {
	sa8 = data8;
    return  fetch('https://cottoapi.com/api.php?game=sagame&tablename=E09' );
}).then(function (response) {
	if (response.ok) {
		return response.text();
	} else {
		return Promise.reject(response);
	}
}).then(function (data9) {
	sa9 = data9;
    return  fetch('https://cottoapi.com/api.php?game=sagame&tablename=E010' );
}).then(function (response) {
	if (response.ok) {
		return response.text();
	} else {
		return Promise.reject(response);
	}
}).then(function (sa10) {
	console.log(sa1);
    console.log(sa2);
    console.log(sa3);

    
  return res.json({"status":"200","data":[{"room_id":"1","room_name":"E01","records":sa1},
  {"room_id":"2","room_name":"E02","records":sa2},
  {"room_id":"3","room_name":"E03","records":sa3},
  {"room_id":"4","room_name":"E04","records":sa4},
  {"room_id":"5","room_name":"E05","records":sa5},
  {"room_id":"6","room_name":"E06","records":sa6},
  {"room_id":"7","room_name":"E07","records":sa7},
  {"room_id":"8","room_name":"E08","records":sa8},
  {"room_id":"9","room_name":"E09","records":sa9},
  {"room_id":"10","room_name":"E10","records":sa10}

]})
   
})

});

