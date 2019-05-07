function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(
      'https://api.github.com/repos/' + repo + '/forks',
      {method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => console.log(res));
  }

function showResults(json) {
  const url = json.html_url;
  const link = '<a href="' + url + '" target="_blank">' + url + '</a>';
  document.getElementById('results').innerHTML = link;
  console.log(json);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
