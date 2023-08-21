//Create an image element. When the image is fully loaded, display an alert saying "Image loaded!" (Event: load).

document.getElementById("pic").addEventListener('load', (event) => {
    alert("Image loaded!");
})