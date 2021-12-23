// obtain all tabs
function logTabs(tabs) {

    for(let tab of tabs) {
        let container = document.getElementById("url_container");
        let newParagraph = document.createElement("p");
        newParagraph.innerHTML = `${tab.url}`;
        container.appendChild(newParagraph);
    }
};

function onError(error) {
    console.log(`Error: ${error}`);
}

let querying = chrome.tabs.query({})
querying.then(logTabs, onError);



