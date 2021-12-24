// obtain all tabs
function logTabs(tabs) {

    for(let tab of tabs) {
        let tabBox = makeTabContainer(tab);
        showTabTitle(tabBox, tab);
        
    }
};

function makeTabContainer(tab) {
    let container = document.getElementById('url_container');
    let newTabBox = document.createElement('div');
    container.appendChild(newTabBox);
    return newTabBox;
}

function showTabTitle(tabBox, tab) {
    let newParagraph = document.createElement('p');
    let titleText = shortenTitle(tab.title);
    newParagraph.innerHTML = `${titleText}`;
    tabBox.appendChild(newParagraph);
}

function shortenTitle(title) {
    return title.slice(0,30) + "...";
}

function onError(error) {
    console.log(`Error: ${error}`);
}

let querying = chrome.tabs.query({})
querying.then(logTabs, onError);



