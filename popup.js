// obtain all tabs
function logTabs(tabs) {

    for(let tab of tabs) {
        if (tab.title != "New Tab") {
           let tabBox = makeTabContainer(tab);
            makeTabTitle(tabBox, tab);
            makeCopyButton(tabBox,tab); 
        }
    }
};

function makeTabContainer(tab) {
    let container = document.getElementById('url_container');
    let newTabBox = document.createElement('div');
    container.appendChild(newTabBox);
    newTabBox.classList.add("tab_container");
    return newTabBox;
}

function makeTabTitle(tabBox, tab) {
    let newParagraph = document.createElement('p');
    let titleText = shortenTitle(tab.title);
    newParagraph.innerHTML = `${titleText}`;
    tabBox.appendChild(newParagraph);
}

function makeCopyButton(tabBox,tab) {
    let newCopyButton = document.createElement('button');
    newCopyButton.innerHTML = '<img src="https://img.icons8.com/ios/50/000000/clipboard.png"/>';
    newCopyButton.classList.add('copy_button');
    tabBox.appendChild(newCopyButton);
    let tabURL = tab.url;
    newCopyButton.addEventListener('click', function() { copyURL(tabURL); });
}

function copyURL(urlText) {
    navigator.clipboard.writeText(`${urlText}`);
}

function styleTabContainer(tabBox) {
    tabBox.classList.add("tab_container");
    
}

function shortenTitle(title) {
    return title.slice(0,20) + "...";
}

function onError(error) {
    console.log(`Error: ${error}`);
}

let querying = chrome.tabs.query({})
querying.then(logTabs, onError);



