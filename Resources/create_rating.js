var win = Titanium.UI.currentWindow;

var view = Titanium.UI.createView({
	top: 50,
	height: 200,
 	width: win.width,
 	// borderColor: 'black',
 	// borderWidth: 2,
 	// borderRadius: 4,	
});

var view_hoch = view.height - 12;
var view_breit = view.width - 1;

var textArea= Titanium.UI.createTextArea({
	
	height: view_hoch,
	width: view_breit,
	top: 10,
	hintText: 'Write Comment...'
	
	// borderWidth: 2,
	// borderColor: 'black'
	//visible: 'false'
});


var send_button = Titanium.UI.createButton({
	title: 'Send',
	bottom: 80,
	right: 10	
});

var show_button = Titanium.UI.createButton({
	title: 'Show',
	bottom: 5,
	right: 10	
});

show_button.addEventListener('click', function(e){
	
	var db = Titanium.Database.open('db1');
	var select = db.execute('SELECT * FROM mytable');
	db.close();
	
	
	var testTextArea = Titanium.UI.createTextArea({
	height: 100,
	width: 200,
	color: 'black',
	bottom: 30,
	left: 5,
	editable: false
		
	});
	//testTextArea.valueOf(select.fieldByName('comment'));
			
	testTextArea.value = select.fieldByName('comment');
		
	
	win.add(testTextArea);
			
});




send_button.addEventListener('click', function(e){
	
	insertComment(textArea.value.toString());
	
	textArea.value = '';
	
	
});


Titanium.Database.install('test.db', 'db1');
var db = Titanium.Database.open('db1');
db.execute('CREATE TABLE IF NOT EXISTS mytable(comment VARCHAR)');
//db.execute('DELETE FROM mytable');
db.close();



function insertComment(comment){
	var db = Titanium.Database.open('db1');
	db.execute('INSERT INTO MYTABLE VALUES("' + comment + '")');
	db.close();
	alert('Insert Comment succesfull');
	
};









view.add(textArea);
win.add(view);
win.add(send_button);
win.add(show_button);

var abstand = 36;
var rating = 1;


var star_1 = Ti.UI.createImageView({
//var star_1 = Titanium.UI.createImageView({
	top: 2,
	left: 2,
	animate: 'true',
	image: '/star_on.png',
	
	
	
});


var star_2 = Titanium.UI.createImageView({
	top: star_1.top,
	left: star_1.left + abstand,
	animate: 'true',
	image: '/star_off.png',
	
	
	
});


var star_3 = Titanium.UI.createImageView({
	top: star_1.top,
	left: star_2.left + abstand,
	animate: 'true',
	image: '/star_off.png',
	
	
	
});

var star_4 = Titanium.UI.createImageView({
	top: star_1.top,
	left: star_3.left + abstand,
	animate: 'true',
	image: '/star_off.png',
	
	
	
});

var star_5 = Titanium.UI.createImageView({
	top: star_1.top,
	left: star_4.left + abstand,
	animate: 'true',
	image: '/star_off.png',
	
	
	
});

var rating_label = Titanium.UI.createLabel({
	top: star_1.top,
	left: star_5.left + ( 2*abstand),
	text: rating,
	color: 'black',
	width: 5	
});


win.add(star_1);
win.add(star_2);
win.add(star_3);
win.add(star_4);
win.add(star_5);

win.add(rating_label);


function set_rating(rate){
	rating_label.text = rate;
};


star_1.addEventListener('click', function(e){
	star_2.image = '/star_off.png';
	star_3.image = '/star_off.png';
	star_4.image = '/star_off.png';
	star_5.image = '/star_off.png';
	rating = 1;
	set_rating(rating);
});



star_2.addEventListener('click', function(e){
	star_2.image = '/star_on.png';
	star_3.image = '/star_off.png';
	star_4.image = '/star_off.png';
	star_5.image = '/star_off.png';
	rating = 2;
	set_rating(rating);	
});

star_3.addEventListener('click', function(e){
	star_2.image = '/star_on.png';
	star_3.image = '/star_on.png';
	star_4.image = '/star_off.png';
	star_5.image = '/star_off.png';
	rating = 3;
	set_rating(rating);	
});

star_4.addEventListener('click', function(e){
	star_2.image = '/star_on.png';
	star_3.image = '/star_on.png';
	star_4.image = '/star_on.png';
	star_5.image = '/star_off.png';
	rating = 4;
	set_rating(rating);	
});

star_5.addEventListener('click', function(e){
	star_2.image = '/star_on.png';
	star_3.image = '/star_on.png';
	star_4.image = '/star_on.png';
	star_5.image = '/star_on.png';
	rating = 5;
	set_rating(rating);
});