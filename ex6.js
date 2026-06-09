//This should have a function that takes a GitHub username
//and outputs their repo with the most forks.

//https://api.github.com/


function showEx6Solution() {
  
  // first i fetch the input value from input field
  const ex6Input = document.getElementById("ex6-input").value;

  console.log("Fetching top forked repo for user:", ex6Input);
  // then i call the main solve function with input
  const answer = solve(ex6Input);

  // showing result in console for debugging
  console.log(answer);


  // then i display result in output paragraph
  document.getElementById("ex6-output").innerText = answer;
}


async function getTopForkedRepo(username) {
  // fetch repos from GitHub API
  const response = await fetch(`https://api.github.com/users/${username}/repos`);

  // convert response to JSON
  const repos = await response.json();

  // safety check (empty or invalid user)
  if (!Array.isArray(repos) || repos.length === 0) {
    return "No repositories found";
  }

  // assume first repo is max initially
  let topRepo = repos[0];

  // loop through all repos
  for (let repo of repos) {
    // compare forks count
    if (repo.forks_count > topRepo.forks_count) {
      topRepo = repo;
    }
  }

  // return result
  return {
    name: topRepo.name,
    forks: topRepo.forks_count
  };
}

// example usage
getTopForkedRepo("facebook").then(console.log);