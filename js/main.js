// Getting Elements From Dom
const CurrentImg = document.querySelector('.current')
const images = document.querySelectorAll('.images > img');

const CurrentOpacity = 0.5;

images[0].style.opacity = CurrentOpacity;

// Looping Though Each Image & Make them Clickable 
images.forEach(image => {
   
    // Defining Functions 
    const galleryPreview = (e) => {
        // Change Source 
        CurrentImg.src = e.target.src

        // Resetting Active Image 
        images.forEach(resetImg => resetImg.style.opacity = 1)
        setTimeout(() => {
            CurrentImg.classList.remove('fade-in');
        }, 300);

        // Adding Effects 
        e.target.style.opacity = CurrentOpacity;
        CurrentImg.classList.add('fade-in')
    };

    // Event Listeners & Executing FUnctions
    image.addEventListener('click', galleryPreview);
});
