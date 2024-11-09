const gallerySection = document.getElementById('gallery'); 
const largeImage = document.getElementById('Large');
const figCaption = document.getElementById('caption'); 
//function to create the gallery
function buildGallery(albums) {
    albums.forEach(album => { //for each album in the array of albums
        const albumDiv = document.createElement('div'); //create a new div element
        albumDiv.classList.add('album'); //class name album
        // Create album title
        const title = document.createElement('h2');
        title.textContent = album.title; // set the text content of the title to the album title
        albumDiv.appendChild(title); //append the title(h2) to the album div
        // Create thumbnails for this album
        const thumbnailContainer = document.createElement('ul'); //create a new ul element
        thumbnailContainer.classList.add('thumbnails'); //class name thumbnails
        album.images.forEach(image => { //for each image in a album
            const listItem = document.createElement('li'); //create a new li element
            const imgElement = document.createElement('img'); //create a new img element
            imgElement.src = image.src; //set the imgElement(img)  source to the image source
            imgElement.alt = image.alt; // Use alt text from the data
            imgElement.width = 240; //width of the thumbnails image 
            imgElement.height = 160; //width of the thumbnails image 
            // Event listener to update large image and caption
            imgElement.addEventListener('click', () => {
                largeImage.src = image.src.replace('small', 'large'); // replace the source of the image of the figure
                largeImage.style.width = '1200px';  // Set the width through style
                largeImage.style.height = '800px';  // Set the height through style
                largeImage.alt = image.alt; // Update the alt text
                figCaption.textContent = image.alt || 'No description available'; // Update the caption text
            });
            listItem.appendChild(imgElement); //inserting the imgElement into the list item 
            thumbnailContainer.appendChild(listItem); //inserting the list item into the thumbnail container
        });
        albumDiv.appendChild(thumbnailContainer); //inserting the thumbnail container into the album div
        gallerySection.appendChild(albumDiv); //inserting the album div into the gallery section
    });
}


// Example imageAlbums
const imageAlbums = [
    { 
        title: 'Flowers Views', 
        images: [
            { src: 'images/white-small.jpg', alt: 'White Flowers' },
            { src: 'images/pink-small.jpg', alt: 'Pink Flowers' },
            { src: 'images/purple-small.jpg', alt: 'Purple Flowers' },
            { src: 'images/yellow-small.jpg', alt: 'Yellow Flowers' },
            { src: 'images/red-small.jpg', alt: 'Red Flowers' }
        ] 
    },
    { 
        title: 'Cityscapes', 
        images: [
            { src: 'images/snapshot.jpg', alt: 'City Snapshot' },
            { src: 'images/see.jpg', alt: 'Hill View in the City' }
        ] 
    },
    { 
        title: 'nature views', 
        images: [
            { src: 'images/nature.jpg', alt: 'nature' },
            { src: 'images/hill.jpg', alt: 'sea' }
        ] 
    },
    { 
        title: 'random vibes', 
        images: [
            { src: 'images/tiger.jpg', alt: 'Beach' },
            { src: 'images/sunflower.jpg', alt: 'sunflower' }
        ] 
    }
];


// Build the gallery
buildGallery(imageAlbums);
