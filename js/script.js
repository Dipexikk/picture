let imageCount = 0;

function showImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    
    if (!imageUrl) {
        alert("Prosím zadej platnou URL obrázku.");
        return;
    }
    document.getElementById('image').src = imageUrl;
    imageCount++;
}