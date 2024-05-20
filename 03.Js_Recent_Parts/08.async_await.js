// async and await (es-2017)

async function main() {
  var user = await fetchUser();
  var [archivedOrders, currentOrders] = await Promise.all([
    fetchArchivedUser(user.id),
    fetchCurrentUser(user.id),
  ]);
}

// exercise
function getFile(file) {
  return new Promise(function (resolve) {
    fakeAjax(file, resolve);
  });
}

async function loadFiles(files) {
  var prs = files.map(getFile);

  for (let pr of prs) {
    console.log(await pr);
  }
}

loadFiles(["file1", "file2", "file3"]);

// problems

// await only promises
// scheduling (starvation)
// external cancelation

// async generators with yield
// async* yield await

async function* fetchUrls(urls) {
  for (let url of urls) {
    let resp = await fetch(url);
    if (resp.status === 200) {
      let text = await resp.text();
      yield text.toUpperCase();
    } else {
      yield undefined;
    }
  }
}
