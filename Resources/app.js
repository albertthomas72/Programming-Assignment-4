// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var win = Titanium.UI.createWindow();
var image = Titanium.UI.createImageView({
	image: "CompositePhoto.jpg",
	top:'35%',
	height: '70%',
	width: '90%'
});
//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Basic Info',
    backgroundColor:'#6699FF'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Basic Info',
    window:win1
});

var label = Titanium.UI.createLabel({
	color:'#003399',
	text:"Marshall Kevin Williams\n\nSenior Business Management Student at the University of Idaho\n\nCell: 208-669-1192\nEmail: mwill2028@gmail.com",
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	top: '5%',
	width:'90%'
});

win1.add(label);
win1.add(image);
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Detailed Info',
    backgroundColor:'#6699FF'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Detailed Info',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#003399',
	text:"Current Employer: University of Idaho Athletic Department\n\nTitle: Vandal Scholarship Fund Intern\n\nCareer Goals: Earn a Master's Degree in Sports Management and pursue a career as a General Manager of a professional sports team.",
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'90%'
});

win2.add(label2);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

// open tab group
tabGroup.open();
