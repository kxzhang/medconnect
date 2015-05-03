function Answer (header, author, date, score, textbody) {
	this.header = header;
	this.author = author;
	this.date = date;
	this.textbody = textbody;
	this.score = score;
}
function Question (header, author, date, score, textbody, category, taglist, answers) {
	this.header = header;
	this.author = author;
	this.date = date;
	this.score = score;
	this.textbody = textbody;  
	this.category = category;  // Try to have this match URL?  Easier for hyperlinks.
	this.taglist = taglist;  // List
	this.answers = answers;  // List
}
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
var q1 = new Question("What classes should a pre-med interested in cardiology take?",
		"Bob B. Boss", "4/14/15", 10, "I am a second-year pre-med student at MIT. " + 
		"I have taken Intro to Cardiology and Organic Chemistry. " + 
		"What MIT classes do you recommend?", "courses", ["cardiology", "classes"],
		[a1, a2]);
a1 = new Answer("Cardiology Class Recommendations", "Alyssa P. Hacker", "4/14/15", 18, 
		"I am a current medical student at Harvard Medical School concentrating " + 
		"in cardiology. I recommend the following classes if MIT offers them: " + 
		"Interventional and Nuclear Cardiology and Cardiovascular Diseases. " + 
		"I graduated from Berkeley so I'm not familiar with MIT course offerings.");
a2 = new Answer("Class Recommendations", "Ben Bitdiddle", "4/14/15", 15, 
		"I am a current senior at MIT, also interested in cardiology. " +
		"The classes I recommend are Cardiology I, Cardiovascular Systems, " + 
		"Cardiology II (time consuming and rigorous treatment of the material).");
var q2 = new Question("What classes should a pre-med interested in cardiology take?",
		"Bob B. Boss", "4/14/15", 10, "I am a second-year pre-med student at MIT. " + 
		"I have taken Intro to Cardiology and Organic Chemistry. " + 
		"What MIT classes do you recommend?", "courses", ["cardiology", "classes"],
		[a1, a2]);
questionList = [q1, q2];

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
		var taglist = question.taglist;
		return taglist.indexOf(searchtag) > -1;
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
    	post.appendChild(document.createTextNode(" on 4/1/2015"));
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
    	post.appendChild(document.createTextNode(" on 4/1/2015"));
    	qSummary.appendChild(post);
    	panel.appendChild(qSummary);
    	document.getElementById("questionListDisplay").appendChild(panel);
	}
}

searchQuestions("hi");
filterCategory(questionList, "world");
filterTags(questionList, "prince");
//writeQuestions(questionList);
//alert("hi");