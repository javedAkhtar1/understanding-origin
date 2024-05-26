const a = 524;
const name = 'Javed AKhtar';

function hey() {
    console.log("Heyy!");
}

// when 2 people collaborate, they push and pull the code from a central server
// github is a free gitserver
// gits are commits, github is the source where git is pushed and pulled
// central server is called origin conventionally

// command = use git remote add origin <repository path>
// check origin = git remote origin -v


function newFeature() {
    console.log("This is a new feature");
}

function newFeature2() {
    console.log("This is a new feature");
}

// Merge using CLI
// to merge
// switch back to main branch and run 
// git merge origin/branchname
// git push

// Merge with Github
// CREATE PULL REQUEST
// select branches and create pull request
// then in 'convesations' click merge
// this will only be done on server not locally
// to get changes locally - switch to main then git pull


function newFeature3() {
    console.log("This feature is coming from branch-2");
}

// shortcut
// git branch "feat/first-feat"
// git checkout "feat/first-feat"
// ==> git checkout -b "feat/first-feat" 
// -b works as git branch

// MERGE VS REBASE
// MERGE me sab commits ki ek single commit banake merge krte hai - history lose ho jati h
// REBASE me saare commmits head ke aage add ho jate hai - history maintain rehti h
// mostly merge hi kiya jata h

// REBASING
function c1() {
    console.log("c1");
}
