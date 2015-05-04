function Answer (header, author, date, score, textbody) {
	this.header = header;
	this.author = author;
	this.date = date;
	this.textbody = textbody;
	this.score = score;
}
function Question (ind, header, author, date, score, textbody, category, taglist, answers) {
	this.ind = ind;   // "ID"; the index of this Question in questionList
	this.header = header;
	this.author = author;
	this.date = date;
	this.score = score;
	this.textbody = textbody;  
	this.category = category;  // Try to have this match URL?  Easier for hyperlinks.
	this.taglist = taglist;  // List
	this.answers = answers;  // List
}

var categoryMap = {};
categoryMap["Courses"] = "./courses.html";
categoryMap["Application Process"] = "./application-process.html";
categoryMap["Interviews"] = "./interviews.html";
categoryMap["MCAT Exams"] = "./mcat-exams.html";
categoryMap["Medical Schools"] = "./medical-schools.html";
categoryMap["Research"] = "./research.html";

// Map of author names (this.author) to their profile pages.

var questionList = [];
	// Figure out some way to import/populate questions... 
	// for now, there will just be one here.
var a1 = new Answer("Cardiology Class Recommendations", "Alyssa P. Hacker", "4/14/15", 18, 
		"I am a current medical student at Harvard Medical School concentrating " + 
		"in cardiology. I recommend the following classes if MIT offers them: " + 
		"Interventional and Nuclear Cardiology and Cardiovascular Diseases. " + 
		"I graduated from Berkeley so I'm not familiar with MIT course offerings.");
var a2 = new Answer("Class Recommendations", "Ben Bitdiddle", "4/14/15", 15, 
		"I am a current senior at MIT, also interested in cardiology. " +
		"The classes I recommend are Cardiology I, Cardiovascular Systems, " + 
		"Cardiology II (time consuming and rigorous treatment of the material).");
var q1 = new Question(0, "What classes should a pre-med interested in cardiology take?",
		"Bob B. Boss", "4/14/15", 10, "I am a second-year pre-med student at MIT. " + 
		"I have taken Intro to Cardiology and Organic Chemistry. " + 
		"What MIT classes do you recommend?", "Courses", ["cardiology", "classes"],
		[a1, a2]);

a1 = new Answer("Because...", "Ben Bitdiddle", "4/2/15", 110,
	"Med school in general is very expensive. On the bright side, " + 
	"you'll make all that money back once you graduate!");
var q2 = new Question(1, "Why are Harvard/Stanford/Columbia application fees so expensive?", "Carol Snow", 
	"3/31/15", 27, "The prices are just ridiculous...  Why??", "Application Process", 
	["applications", "stanford", "money"], [a1]);

a1 = new Answer("My experience", "Ben Bitdiddle", "9/1/14", 14,
	"Just relax and act professionally.  I recommend bringing a small notebook " + 
	"to jot down notes.");
a2 = new Answer("Really important!", "Alyssa P. Hacker", "8/26/14", 7,
	"You must remember what sort of hours and commitment they expect.  " + 
	"In this area, communication is crucial.");
var q3 = new Question(6, "Interview tips", "Carol Snow", "8/24/14", 32, 
	"I have an interview for a residency I really want to get into!" + 
	"Any tips on how I should behave, what questions I should ask?", "Interviews", 
	["residencies", "interviews"], [a1, a2]);

a1 = new Answer("Really?! Ben?!", "Alyssa P. Hacker", "2/15/15", 444,
	"It entirely depends on what department you're in and what you want to do!");
a2 = new Answer("Stanford", "Eve Night", "2/14/15", 217,
	"Stanford, Great weather, classes, everyone is very smart and chill there.");
a3 = new Answer("Harvard!", "Carol Snow", "2/14/15", 217,
	"Harvard, I prefer the East Coast, and the name recognition is significant.");
var q4 = new Question(2, "Popular opinion: Harvard or Stanford?", "Ben Bitdiddle", 
	"2/14/15", 33, 
	"Just getting a sense of how people feel on this board... which do you " + 
	"prefer, Harvard or Stanford, and why?", "Medical Schools", 
	["harvard", "stanford"], [a1, a2, a3]);

a1 = new Answer("8 hours", "Ben Bitdiddle", "9/14/14", 12,
	"8 hours, I think I'm actually on the low end of the spectrum?");
a2 = new Answer("10 hours", "Alyssa P. Hacker", "9/21/14", 3,
	"10 hours, it depends on how important your research is versus your schoolwork, " + 
	"I've found.  When I take 36 units I spend up to 12 hours a week, when I " + 
	"take 5 classes I spend about 6.");
var q5 = new Question(5, "How much time a week do you spend on research projects?", 
	"Eve Night", "9/14/14", 87, 
	"My third all-nighter at the lab, and I'm starting to think I'm spending " + 
	"too much time here.  How much time does everyone work on research per week?", 
	"Research", ["research"], [a1, a2]);

a1 = new Answer("Deep breaths.", "Ben Bitdiddle", "12/16/14", 8,
	"It'll be fine.  General biology grades on a generous curve, " + 
	"advanced classes are harder");
var q6 = new Question(3, "General Cardiology grading curve", 
	"Carol Snow", "12/16/14", 2, 
	"What is the grading curve like for general cardiology?  I did really badly " + 
	"on my final (I'm only confident in about half my answers!) so I was wondering.", 
	"Courses", ["cardiology", "classes", "grading"], [a1]);

a1 = new Answer("Yes.", "Alyssa P. Hacker", "11/1/14", 105,
	"Yes.  If you're squeamish, I suggest talking to the professor.");
var q7 = new Question(4, "Cardiology = dissection?", 
	"Eve Night", "10/31/14", 20, 
	"Do we have to dissect hearts in cardiology?  All that blood...", 
	"Courses", ["cardiology", "dissections"], [a1]);

a1 = new Answer("", "Alyssa P. Hacker", "1/1/13", 0, 
	"Look it up on the Internet.");
var q8 = new Question(7, "Plz Help!!!", "Eve Night", "1/1/13", -3, 
	"What is the MCATs?  Plz help",
	"MCAT Exams", ["mcat exams"], [a1]);

// Latest to earliest
questionList = [q1, q2, q4, q6, q7, q5, q3, q8];

function searchQuestions (keyword) {
	// General keyword search through question titles and tags.
	return questionList.filter(function(question) {
		var tags = [];
		for (var i = 0; i < question.taglist.length; i++) {
			tags.push(question.taglist[i].toLowerCase());
		}
		var key = keyword.toLowerCase();
		return question.header.toLowerCase().indexOf(key) > -1 || tags.indexOf(key) > -1;
	});
}

function filterCategory (qList, category) {
		// Search for questions with matching categories.
	return qList.filter(function(question) {
		return question.category === category;
	});
}

function filterTags (qList, searchtag) {
	// Search for questions with this tag in their taglist.  
	return qList.filter(function(question) {
		var tags = [];
		alert(question.taglist);
		for (var i = 0; i < question.taglist.length; i++) {
			tags.push(question.taglist[i].toLowerCase());
		}
		var key = searchtag.toLowerCase();
		return tags.indexOf(key) > -1;
	});
}

function writeQuestions (qList) {
	var arrayLength = qList.length;
	for (var i = 0; i < arrayLength; i++) {
    	var q = qList[i];
    	//Do something
    	var panel = document.createElement("div");
    	panel.className = "panel-body";

    	var scorebox = document.createElement("div");
    	scorebox.className = "scoreBox";
    	var scoreNum = document.createElement("span");
    	scoreNum.className = "score";
    	scoreNum.innerHTML = q.score;
    	scorebox.appendChild(scoreNum);
    	panel.appendChild(scorebox);

    	var qSummary = document.createElement("div");
    	qSummary.className = "questionSummary";
    	var qTitle = document.createElement("div");
    	var qLink = document.createElement("a");
    	qLink.setAttribute('href',"./questionPage.html?quest=" + i);
    	qTitle.className = "questionTitle";
    	qTitle.appendChild(document.createTextNode(q.header));
    	qLink.appendChild(qTitle);
    	qSummary.appendChild(qLink);
    	var post = document.createElement("div");
    	post.className = "postData";
    	post.appendChild(document.createTextNode("Posted by "));
    	var author = document.createElement("span");
    	author.className = "userName";
    	author.innerHTML = q.author;
    	post.appendChild(author);
    	post.appendChild(document.createTextNode(" on " + q.date));
    	qSummary.appendChild(post);
    	panel.appendChild(qSummary);
    	document.getElementById("questionListDisplay").appendChild(panel);
	}
}

// Function for displaying search results.
function writeSearchQuestions (qList) {
	var arrayLength = qList.length;
	for (var i = 0; i < arrayLength; i++) {
    	var q = qList[i];
    	//Do something
    	var panel = document.createElement("div");
    	panel.className = "panel-body";

    	var scorebox = document.createElement("div");
    	scorebox.className = "scoreBox";
    	var scoreNum = document.createElement("span");
    	scoreNum.className = "score";
    	scoreNum.innerHTML = q.score;
    	scorebox.appendChild(scoreNum);
    	panel.appendChild(scorebox);

    	var qSummary = document.createElement("div");
    	qSummary.className = "questionSummary";
    	var qTitle = document.createElement("div");
    	var qLink = document.createElement("a");
    	qLink.setAttribute('href',"./questionPage.html?quest=" + i);
    	qTitle.className = "questionTitle";
    	qTitle.appendChild(document.createTextNode(q.header));
    	qLink.appendChild(qTitle);
    	qSummary.appendChild(qLink);
    	var post = document.createElement("div");
    	post.className = "postData";
    	post.appendChild(document.createTextNode("Posted by "));
    	var author = document.createElement("span");
    	author.className = "userName";
    	author.innerHTML = q.author;
    	post.appendChild(author);
    	post.appendChild(document.createTextNode(" on " + q.date));
    	qSummary.appendChild(post);
    	panel.appendChild(qSummary);
    	document.getElementById("questionListDisplay").appendChild(panel);
	}
}

function clearQuestions() {
	var myNode = document.getElementById("questionListDisplay");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
}

searchQuestions("hi");
filterCategory(questionList, "world");
//filterTags(questionList, "prince");
//writeQuestions(questionList);
//alert("hi");