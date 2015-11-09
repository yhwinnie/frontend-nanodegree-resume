
//replacing strings on the browser

var bio = {
	"name" : "Winnie Wen ",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "415-939-1162",
		"email": "winniewenw@gmail.com",
		"github": "yhwinnie",
		"twitter": "wwinniew",
		"location": "Berkeley"
	},
	"WelcomeMessage": "Welcome to my page!",
	"skills": ["Python", "C", "Java", "Programming", "iOS development in Swift", "Computer Security", "Artificial Intelligence", "MIPS"],
	"bioPic": "images/IMG_6472.jpg"
};


//Adding new properties to the same object

var work = {
	"jobs": [
	{
	"employer": "Quickly",
	"title": "Barista",
	"location": "Berkeley", 
	"dates": "2013",
	"description": "Make and serve drinks"
	}
	]
}

var education = {
	
    "schools": [
        {
            "name": "Mission High School", 
			"location": "San Francisco, CA",
			"degree": "High School Diploma",
			"majors": "None",
			"dates": "May 2012",
			"url": "https://mhs-sfusd-ca.schoolloop.com"
		},
		{
			"name": "UC Berkeley", 
			"location": "Berkeley",
			"degree": "Bachelor Degree",
			"majors": "Computer Science, Dutch",
			"dates": "December 2016",
			"url": "http://www.berkeley.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": "January 2016",
			"url": "www.udacity.com"

		}
	]
    
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
 	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedTwitter= HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append([formattedbioPic]);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
	$("#header").append([formattedMessage]);

}

bio.display();




work.display = function() {
	$("#header").append(HTMLskillsStart);
	for (skill = 0; skill < bio.skills.length; ++skill) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;


		//append to the last of the class 
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();


$(document).click(function(loc) {
  	var x = loc.pageX;
  	var y = loc.pageY;

  	logClicks(x, y);
});



var projects = {
	"projects": [ 

	{
	"title": "Personal Website",
	"dates": "2015",
	"description": "A personal website created with the Udacity course.",
	"images": ["images/page.jpg", "images/page.jpg"]	
	}
	]
};
console.log(projects);

//Encapsulate
projects.display = function() {
	for (project = 0; project < projects.projects.length; ++project) {
		console.log(project);
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		
		for (image = 0; image < projects.projects[project].images.length; ++image) {
			var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImages);

		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);

education.display = function() {
	for (school = 0; school < education.schools.length; ++school) {
		$("#education").append(HTMLschoolStart);
		var formattedNames = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

		$(".education-entry:last").append(formattedNames);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedDegree);

	}
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedUrl);
	}
}

education.display();





