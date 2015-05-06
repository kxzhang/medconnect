function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

var currentProfileId = getQueryVariable('postedquestion');
if (currentProfileId) {
    document.getElementById("postedquestionDisplay").style.display="block";
}

function Answer (header, author, date, score, textbody) {
	this.header = header;   // DEPRECATED
	this.author = author;
	this.date = date;
	this.textbody = textbody;
	this.score = score;
}
function Question (ind, header, author, date, score, textbody, category, taglist, answers) {
	this.ind = ind;   // "ID"
	this.header = header;   
	this.author = author;
	this.date = date;
	this.score = score;
	this.textbody = textbody;  
	this.category = category;  // Try to have this match URL?  Easier for hyperlinks.
	this.taglist = taglist;  // List
	this.answers = answers;  // List
}
function User (ind, name, email, showEmail, joinDate, postCount, profilePage) {
    this.ind = ind;   // "ID"
    this.name = name;
    this.email = email
    this.showEmail = showEmail;
    this.joinDate = joinDate;
    this.postCount = postCount;
    this.profilePage = profilePage;
}

var categoryMap = {};
categoryMap["Courses"] = "./courses.html";
categoryMap["Application Process"] = "./application-process.html";
categoryMap["Interviews"] = "./interviews.html";
categoryMap["MCAT Exams"] = "./mcat-exams.html";
categoryMap["Medical Schools"] = "./medical-schools.html";
categoryMap["Research"] = "./research.html";

// Map of author names (this.author) to their profile pages.
var u0 = new User (0, "Bob B. Boss", "bob@boss.com", true, "12/25/12", 1, "./profilePageEdit.html");
var u1 = new User (1, "Alyssa P. Hacker", "alyssa@hacker.com", true, "8/31/10", 6, "./profile1.html");
var u2 = new User (2, "Ben Bitdiddle", "ben@bitdiddle.com", false, "9/3/10", 6, "./profile2.html");
var u3 = new User (3, "Carol Snow", "", false, "10/2/11", 4, "./profile3.html");
var u4 = new User (4, "Eve Night", "eve@yahoo.com", true, "9/12/11", 4, "./profile4.html");
var u5 = new User (5, "Mallory Mallet", "mal@mal.com", true, "8/30/10", 3, "./profile5.html")
var userListing = [u0, u1, u2, u3, u4, u5];

var questionList = [];
	// Figure out some way to import/populate questions... 
	// for now, there will just be one here.
var a1 = new Answer("Cardiology Class Recommendations", 1, "4/14/15", 18, 
		"I am a current medical student at Harvard Medical School concentrating " + 
		"in cardiology. I recommend the following classes if MIT offers them: " + 
		"Interventional and Nuclear Cardiology and Cardiovascular Diseases. " + 
		"I graduated from Berkeley so I'm not familiar with MIT course offerings.");
var a2 = new Answer("Class Recommendations", 2, "4/14/15", 15, 
		"I am a current senior at MIT, also interested in cardiology. " +
		"The classes I recommend are Cardiology I, Cardiovascular Systems, " + 
		"Cardiology II (time consuming and rigorous treatment of the material).");
var q1 = new Question(0, "What classes should a pre-med interested in cardiology take?",
		0, "4/14/15", 10, "I am a second-year pre-med student at MIT. " + 
		"I have taken Intro to Cardiology and Organic Chemistry. " + 
		"What MIT classes do you recommend?", "Courses", ["cardiology", "classes"],
		[a1, a2]);

a1 = new Answer("Because...", 2, "4/2/15", 110,
	"Med school in general is very expensive. On the bright side, " + 
	"you'll make all that money back once you graduate!");
var q2 = new Question(1, "Why are Harvard/Stanford/Columbia application fees so expensive?", 3, 
	"3/31/15", 27, "The prices are just ridiculous...  Why??", "Application Process", 
	["applications", "stanford", "harvard", "money"], [a1]);

a1 = new Answer("My experience", 2, "9/1/14", 14,
	"Just relax and act professionally.  I recommend bringing a small notebook " + 
	"to jot down notes.");
a2 = new Answer("Really important!", 1, "8/26/14", 7,
	"You must remember what sort of hours and commitment they expect.  " + 
	"In this area, communication is crucial.");
var q3 = new Question(6, "Interview tips", 3, "8/24/14", 32, 
	"I have an interview for a residency I really want to get into!" + 
	"Any tips on how I should behave, what questions I should ask?", "Interviews", 
	["residencies", "interviews"], [a1, a2]);

a1 = new Answer("Really?! Ben?!", 1, "2/15/15", 444,
	"It entirely depends on what department you're in and what you want to do!");
a2 = new Answer("Stanford", 4, "2/14/15", 217,
	"Stanford, Great weather, classes, everyone is very smart and chill there.");
a3 = new Answer("Harvard!", 3, "2/14/15", 217,
	"Harvard, I prefer the East Coast, and the name recognition is significant.");
var q4 = new Question(2, "Popular opinion: Harvard or Stanford?", 2, 
	"2/14/15", 33, 
	"Just getting a sense of how people feel on this board... which do you " + 
	"prefer, Harvard or Stanford, and why?", "Medical Schools", 
	["harvard", "stanford"], [a1, a2, a3]);

a1 = new Answer("8 hours", 2, "9/14/14", 12,
	"8 hours, I think I'm actually on the low end of the spectrum?");
a2 = new Answer("10 hours", 1, "9/21/14", 3,
	"10 hours, it depends on how important your research is versus your schoolwork, " + 
	"I've found.  When I take 36 units I spend up to 12 hours a week, when I " + 
	"take 5 classes I spend about 6.");
var q5 = new Question(5, "How much time a week do you spend on research projects?", 
	4, "9/14/14", 87, 
	"My third all-nighter at the lab, and I'm starting to think I'm spending " + 
	"too much time here.  How much time does everyone work on research per week?", 
	"Research", ["research"], [a1, a2]);

a1 = new Answer("Deep breaths.", 2, "12/16/14", 8,
	"It'll be fine.  General biology grades on a generous curve, " + 
	"advanced classes are harder");
var q6 = new Question(3, "General Cardiology grading curve", 
	3, "12/16/14", 2, 
	"What is the grading curve like for general cardiology?  I did really badly " + 
	"on my final (I'm only confident in about half my answers!) so I was wondering.", 
	"Courses", ["cardiology", "classes", "grading"], [a1]);

a1 = new Answer("Yes.", 1, "11/1/14", 105,
	"Yes.  If you're squeamish, I suggest talking to the professor.");
var q7 = new Question(4, "Cardiology = dissection?", 
	4, "10/31/14", 20, 
	"Do we have to dissect hearts in cardiology?  All that blood...", 
	"Courses", ["cardiology", "dissections"], [a1]);

a1 = new Answer("", 1, "1/1/13", 100, 
	"There's already an older question concerning this matter... look it up.");
var q8 = new Question(7, "Plz Help!!!", 4, "1/1/13", -3, 
	"What is the MCATs?  Plz help",
	"MCAT Exams", ["mcat-exams"], [a1]);

a1 = new Answer("", 1, "12/30/12", 97, "Well, there are no late sign ups. " + 
	"Your only option is to wait until the next exam, which is at " + 
	"most 2 months away.");
a2 = new Answer("", 3, "12/31/12", 0, "Maybe talk to your advisor?");
var q9 = new Question(8, "MCAT Help", 2, "12/25/12", 126,
	"I ate too much last night, went to sleep and forgot to sign up for the " + 
	"MCAT exams, and the deadline was last night 11:59 PM.  What should I do?", 
	"MCAT Exams", ["mcat-exams", "lateness"], [a1, a2]);

a1 = new Answer("", 3, "12/28/12", 1, "From reputation alone, I think Columbia " + 
	"is better?  Plus you get to stay in NYC, and John Hopkins just can't " + 
	"compare to that in my opinion.  I don't know much about cardiology though.");
a2 = new Answer("", 5, "12/31/12", 0, "lol harvard rules");
var q10 = new Question(9, "Columbia or John Hopkins?", 2, "12/23/12", 8,
	"While preparing for the MCAT exams, I was wondering - which medical school " + 
	"would be better for a cardiology student, Columbia or John Hopkins?",
	"Medical Schools", ["columbia", "john-hopkins", "cardiology"], [a1, a2]);

a1 = new Answer("", 2, "12/18/12", 30, "I'd take chemistry - 5.112 in particular.  " + 
	"Though it's more difficult, it really helps you in later, more advanced " + 
	"pre-med classes, and integrates physics in really well.");
var q11 = new Question(10, "GIR Question", 4, "12/18/12", 50, "Which chemistry " + 
	"GIR would you recommend, material science (course 3) or standard " + 
	"chemistry (course 5)?  Please give a reason.", "Courses", 
	["classes", "chemistry", "material-science", "girs"], [a1]);

a1 = new Answer("", 1, "12/17/12", 3, "Looking at the official website will " + 
	"give a much better answer than I could, but it's a test sort of like the " + 
	"SATs, except for medical schools.  Don't worry about it yet.");
var q12 = new Question(11, "What are the MCATs?", 3, "12/16/12", 1, "I know " + 
	"this is a stupid question, but what are the MCAT exams?  I keep on hearing " + 
	"about them.", "MCAT Exams", ["mcat-exams"], [a1]);

a1 = new Answer("", 2, "12/8/12", 12, "I would recommend thinking about it " + 
	"towards the second half of your sophomore year, then really focusing on it " + 
	"your junior year.  You should apply in the second half of your junior year.");
a2 = new Answer("", 3, "12/2/12", 1, "I have the same question!  Could somebody " + 
	"answer please?");
var q13 = new Question(12, "When to apply?", 4, "12/1/12", 6, "When should I " + 
	"start the medical school application process?  Assuming that I know for sure " + 
	"I'm going into pre-med.", "Application Process", ["applications", "worries"],
	[a1, a2]);

a1 = new Answer("", 2, "12/8/12", 12, "I would recommend thinking about it " + 
	"towards the second half of your sophomore year, then really focusing on it " + 
	"your junior year.  You should apply in the second half of your junior year.");
a2 = new Answer("", 5, "12/6/12", 2, "As soon as possible");
var q13 = new Question(12, "When to apply?", 4, "12/1/12", 6, "When should I " + 
	"start the medical school application process?  Assuming that I know for sure " + 
	"I'm going into pre-med.", "Application Process", ["applications", "worries"],
	[a1, a2]);

a1 = new Answer("", 1, "11/30/12", 8, "It varies from school to schoo, but " + 
	"in general you need 2-3 letters.  The more specific, the better.");
var q14 = new Question(13, "How many recommendation letters do I need?", 3, 
	"11/28/12", 20, "For college I only needed two letters, so how many " + 
	"do I need for medical school?", "Application Process", 
	["applications", "recommendations", "letters"], [a1]);

a1 = new Answer("", 4, "11/23/12", 12, "I'd say that it's more technical " + 
	"than the average medical school. It contains more med-engineering courses.");
var q15 = new Question(14, "Is the HST program very technical?", 3, 
	"11/22/12", 5, "I love the technical side of pre-med so a friend recommended the " + 
	"HST program to me; anyone know how it is compared to the average program?", 
	"Medical Schools", ["harvard", "hst"], [a1]);

a1 = new Answer("", 3, "11/21/12", 15, "Even though it sounds cheesy, " + 
	"I really like goint to the mock interviews the department puts on for us!  " + 
	"They're stress-free but still helpful.");
a2 = new Answer("", 2, "11/21/12", 13, "Keeping calm and being myself, with the " + 
	"power of six interviewing practice books behind me.");
var q16 = new Question(15, "Interview-related question for everyone...", 1, 
	"11/21/12", 26, "As the interviewing season begins, what are everyone's " + 
	"favorite tips or pieces of advice for the interviewee?", "Interviews", 
	["interviews"], [a1, a2]);

a1 = new Answer("", 1, "11/20/12", 17, "You should wear something business casual.");
var q17 = new Question(16, "What should the dress code be?", 3, "11/20/12", 16, 
	"I want to look serious but not overdressed.  If the school doesn't specify, " + 
	"what should I wear to an interview?", "Interviews", ["interviews", "dress"], [a1]);

a1 = new Answer("", 1, "11/17/12", 27, "Relax, you're only in your first year here!  " + 
	"Spend some time checking out the different student activities, or try doing a " + 
	"UROP in a different department.");
var q18 = new Question(17, "No one wants to hire freshmen!", 5, "11/3/12", 8,
	"Help!  I'm a freshman and I can't get a UROP at Broadhead!  What should I do??",
	"Research", ["research", "urops", "broadhead"], [a1]);

a1 = new Answer("", 2, "10/31/12", 11, "Yes; there's a template link under " + 
	"'Resources' on the main UROP page.");
a2 = new Answer("", 1, "10/30/12", 10, "There should be plenty of templates " + 
	"available on the Internet; I remember writing my first one using one I " + 
	"found with Google search.");
var q19 = new Question(18, "Help with Writing Proposals", 3, "10/30/12", 51,
	"I've never written a research proposal before; does anyone have any handy " + 
	"templates or resources?", "Research", ["research", "proposals", "writing"], [a1, a2]);


// Latest to earliest
questionList = [q1, q2, q4, q6, q7, q5, q3, q8, q9, q10, 
q11, q12, q13, q14, q15, q16, q17, q18, q19];

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
		//alert(question.taglist);
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
    	var scoreNum = document.createElement("div");
    	scoreNum.className = "score";
    	scoreNum.innerHTML = q.score;
    	scorebox.appendChild(scoreNum);
    	panel.appendChild(scorebox);
        
    	var qSummary = document.createElement("div");
    	qSummary.className = "questionSummary";
    	var qTitle = document.createElement("div");
    	
        var qLink = document.createElement("a");
    	qLink.setAttribute('href', "./questionPage.html?quest=" + q.ind);
    	qTitle.className = "questionTitle";
    	qTitle.appendChild(document.createTextNode(q.header));
    	qLink.appendChild(qTitle);

    	qSummary.appendChild(qLink);
    	var post = document.createElement("div");
    	post.className = "postData";
    	post.appendChild(document.createTextNode("Posted by "));
    	
        var author = document.createElement("span");

        var authorLink = document.createElement("a");
        authorLink.setAttribute('href', userListing[q.author].profilePage);
        author.className = "userName";
        author.innerHTML = userListing[q.author].name;
        authorLink.appendChild(author);
        


    	post.appendChild(authorLink);
    	post.appendChild(document.createTextNode(" on " + q.date));
    	qSummary.appendChild(post);
    	panel.appendChild(qSummary);

        var panelHolder = document.createElement("div");
        panelHolder.className = "panel panel-default";
        panelHolder.appendChild(panel);
    	document.getElementById("questionListDisplay").appendChild(panelHolder);
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
    	var scoreNum = document.createElement("div");
    	scoreNum.className = "score";
    	scoreNum.innerHTML = q.score;
    	scorebox.appendChild(scoreNum);
    	panel.appendChild(scorebox);

    	var qSummary = document.createElement("div");
    	qSummary.className = "questionSummary";
    	var qTitle = document.createElement("div");
    	var qLink = document.createElement("a");
        qLink.setAttribute('href', "./questionPage.html?quest=" + q.ind);
    	qTitle.className = "questionTitle";
    	qTitle.appendChild(document.createTextNode(q.header));
    	qLink.appendChild(qTitle);
    	qSummary.appendChild(qLink);
    	var post = document.createElement("div");
    	post.className = "postData";
    	post.appendChild(document.createTextNode("Posted by "));
        
        var author = document.createElement("span");

        var authorLink = document.createElement("a");
        authorLink.setAttribute('href', userListing[q.author].profilePage);
        author.className = "userName";
        author.innerHTML = userListing[q.author].name;
        authorLink.appendChild(author);
        


        post.appendChild(authorLink);

        post.appendChild(document.createTextNode(" on " + q.date));
    	qSummary.appendChild(post);
    	panel.appendChild(qSummary);

    	var panelHolder = document.createElement("div");
        panelHolder.className = "panel panel-default";
        panelHolder.appendChild(panel);
        document.getElementById("questionListDisplay").appendChild(panelHolder);
	}
}

function clearQuestions() {
	var myNode = document.getElementById("questionListDisplay");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
}

//searchQuestions("hi");
//filterCategory(questionList, "world");
//filterTags(questionList, "prince");
//writeQuestions(questionList);
//alert("hi");