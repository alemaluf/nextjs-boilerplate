/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
function applyCameraSettings() {
    const arScene = document.querySelector('a-scene');
    if (!arScene) { /* ... */ return; }

    arScene.setAttribute('arjs', `sourceType: webcam; debugUIEnabled: true; facingMode: ${currentFacingMode}; resolution: ${currentResolution};`);
    // ...
    arToolkitSource.init(function onSourceInitialized() {
        // ...
        const videoElement = arToolkitSource.domElement;
        if (videoElement && videoElement.tagName === 'VIDEO') {
            videoElement.style.objectFit = 'cover';
            videoElement.style.width = '100%';
            videoElement.style.height = '100%';
            console.log(`[applyCameraSettings] Aplicado object-fit: ${videoElement.style.objectFit} ao vídeo.`);
        }
        // ...
    });
}