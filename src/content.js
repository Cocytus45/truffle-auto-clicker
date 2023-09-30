console.log('Truffle Auto Clicker Loaded')

// this function contains a nonsensical amount of if statements but I'm too lazy
// to separate it out and it works :P
function searchForPointsButton() {
    console.debug('searchingForPointsButton() function called')
    try {
        let allElements = document.querySelectorAll('*');
        let specificString = 'ROUTES-CHANNEL-POINTS-PAGE-TSX-BUNDLE';

        allElements.forEach(element => {
            if (element.nodeName.toLowerCase().includes(specificString.toLowerCase())) {
                console.debug(element.nodeName);
                let complexIdElement = document.querySelector(element.nodeName);
                if (complexIdElement) {
                    let outerShadowRoot = complexIdElement.shadowRoot;
                    if (outerShadowRoot && outerShadowRoot.querySelector('div.c-channel-points.collapsed div.inner div.claim div')) {
                        let innerShadowRoot = outerShadowRoot.querySelector('div.c-channel-points.collapsed div.inner div.claim div').shadowRoot;
                        if (innerShadowRoot && innerShadowRoot.querySelector('div.image')) {
                            let elementInsideInnerShadowRoot = innerShadowRoot.querySelector('div.image');
                            if (elementInsideInnerShadowRoot) {
                                elementInsideInnerShadowRoot.click();
                            } else {
                                console.debug('Element inside inner shadow root is null.');
                            }
                        } else {
                            console.debug('Inner shadow root or inner element not found.');
                        }
                    } else {
                        console.debug('Outer shadow root containing button element not found.');
                    }
                } else {
                    console.debug('ComplexIdElement not found.');
                }
            }
        });
    } catch (error) {
        // If it reaches here idk wth happened
        console.error(error);
    }
}

setInterval(searchForPointsButton, 5000);