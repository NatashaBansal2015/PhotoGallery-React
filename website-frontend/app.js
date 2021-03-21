const API_BASE = "http://localhost:3000"


function getUrl(endpoint){
    return API_BASE + '/0' + endpoint
}

function presentPhotos(photos){
    photos.forEach(element => {
        let image = document.createElement('img');
        image.src = photo.url;
        
        document.getElementById('photos-section').appendChild(image);
        
    });
    

}

function fetchPhotos() {
    fetch(getUrl('photos'))
        .then(response => response.json())
        .then(photos => presentPhotos(photos));

}

document.getElementById('loadPhotos').addEventListener('click',function(){
    fetchPhotos();
});