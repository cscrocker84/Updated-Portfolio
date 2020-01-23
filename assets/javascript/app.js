var imageArray = ["assets/images/Trivia.jpg","assets/images/gem.png", "assets/images/HomeScreenShot.jpg", "assets/images/FriendFinder.PNG"];
var nameArray = ["Trivia Game", "Crystal Collector","Lord of the Rings Fan Page", "Friend Finder"];
var descriptionArray = ["A timed trivia game!","A randomized guessing and addition game!", "A simple Lord of the Rings fan page with a backend database.", "A simple program based on a personality test to match you with another user with similar answers."];
var linkArray = ["https://cscrocker84.github.io/Totally-trivial-trivia/","https://cscrocker84.github.io/CrystalCollector/", "https://project2-110519.herokuapp.com/", "https://github.com/cscrocker84/FriendFinder"];
var gitLinkArray= ["https://github.com/cscrocker84/Totally-trivial-trivia","https://github.com/cscrocker84/CrystalCollector", "https://github.com/cscrocker84/Project-2", "https://tranquil-gorge-48801.herokuapp.com/"];


for(var i=0;i<imageArray.length;i++){
    var holderCol = $('<div class="col-sm-4 col-12 extra">')
    var holderCard = $('<div class="card inline h-100" style="width: 18rem;">');
    var holderImg = $('<img src=' + imageArray[i] + ' class="card-img-top" width="286px" height="160px">');    
    var holderBody = $('<div class="card-body">');
    var holderHeading = $('<h5 class="card-title">');
    holderHeading.text(nameArray[i]);
    var holderText = $('<p class="card-text">');
    holderText.text(descriptionArray[i]);
    var linkText = $('<a href=' + linkArray[i] + ' class="btn btn-primary">');
    linkText.text("Link to site.");
    var gitLinkText = $('<a href=' + gitLinkArray[i] + ' class="btn btn-primary">');
    gitLinkText.text("Link to git repository.");

    holderCol.append(holderCard);
    holderCard.append(holderImg);
    holderCard.append(holderBody);
    holderBody.append(holderHeading);
    holderBody.append(holderText);
    holderBody.append(linkText);
    holderBody.append(gitLinkText);

    $("#info-area").append(holderCol);
}