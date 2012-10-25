Ti.include("md5.js");

var win = Ti.UI.currentWindow;

var V_login = Ti.UI.createView({
	top: 0,
	left: 0,
	width: 319,
	height:300,
    borderColor: 'black',
    borderWidth: 2
	
});
var Tf_name = Ti.UI.createTextField({
	hintText: 'Enter Username',
	top: 5,
	left: 5,
	width: 200,
	height: 38
});

var Tf_pw = Ti.UI.createTextField({
	hintText: 'Enter Password',
	passwordMask: true,
	top: 50,
	left: 5,
	width: 200,
	height: 38   		
});

var Btn_login = Ti.UI.createButton({
	title: 'Login',
	left: 5,
	bottom: 5
});

var Btn_register = Ti.UI.createButton({
	title: 'Register',
	bottom: 5,
	right: 5	
});


var label = Ti.UI.createLabel({
	text: Tf_name.height,
	bottom: 5,
	color: 'black'	
});

Titanium.Database.install('test.db', 'db1');
var db = Titanium.Database.open('db1');
db.execute('CREATE TABLE IF NOT EXISTS login(user VARCHAR, password VARCHAR)');
//db.execute('DELETE FROM mytable');
db.close();

Btn_register.addEventListener('click', function(e){
	var user = Tf_name.value;
	var pw = calcMD5(Tf_pw.value);
	
	
	
	register(user,pw);	
});

Btn_login.addEventListener('click', function(e){
	var user = Tf_name.value;
	var pw = Tf_pw.value;
	
	login(user,pw);	
});



function register(user , pw){
var db = Titanium.Database.open('db1');
// db.execute('INSERT INTO login(user , password) VALUES("' + user + ' , ' + pw +'")');db.execute('INSERT INTO login(user , password) VALUES("' + user + '"," ' + pw + '")');
db.close();
alert('Insert Comment succesfull');	
	
};

function login(user, pw){
var db = Titanium.Database.open('db1');
var sel_pw = db.execute('SELECT * FROM login WHERE user = "' + user + '"');
//sel_pw.fieldByName.valueOf(password)	


var ausgabe = sel_pw.fieldByName('password');
db.close();
doChallengeResponse(ausgabe);


//alert(ausgabe);

	
};


function doChallengeResponse(pw_value) {
	var wert_alt = pw_value;
                    
	alert(wert_alt);        
     
};














V_login.add(Tf_name);
V_login.add(Tf_pw);
V_login.add(Btn_login);
V_login.add(Btn_register);

win.add(V_login);
win.add(label);
