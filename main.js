const modal_biografia = document.getElementById("bio");

function modalBio() {
    modal_biografia.showModal();
}

document.addEventListener('DOMContentLoaded', function() {
    const albumsData = {
        1: { 
            title: "The College Dropout", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/4Uv86qWpGTxf7fU7lG5X6F?utm_source=generator",
            colors: { primary: "#8B4513", background: "#CD853F", playerBg: "#8B4513", text: "#F1FAEE" }
        },
        2: { 
            title: "Late Registration", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/5ll74bqtkcXlKE7wwkMq4g?utm_source=generator",
            colors: { primary: "#8B4513 ", background: "#A0522D", playerBg: "#4F4F4F", text: "#E8F5E9" }
        },
        3: { 
            title: "Graduation", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/4SZko61aMnmgvNhfhgTuD3?utm_source=generator",
            colors: { primary: "#1C1C1C", background: "#BA55D3", playerBg: "    #9932CC", text: "#FFF3E0" }
        },
        4: { 
            title: "808s & Heartbreak", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/3WFTGIO6E3Xh4paEOBY9OU?utm_source=generator",
            colors: { primary: "    #696969", background: "     #363636", playerBg: "    #808080", text: "#F3E5F5" }
        },
        5: { 
            title: "My Beautiful Dark Twisted Fantasy", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/20r762YmB5HeofjMCiPMLv?utm_source=generator",
            colors: { primary: "#1C1C1C", background: "#8B0000", playerBg: "    #DC143C", text: "#E3F2FD" }
        },
        6: { 
            title: "Yeezus", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/7D2NdGvBHIavgLhmcwhluK?utm_source=generator",
            colors: { primary: "#A52A2A", background: "#FFF0F5", playerBg: "#FF6347", text: "#000000" }
        },
        7: { 
            title: "The Life of Pablo", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/7gsWAHLeT0w7es6FofOXk1?utm_source=generator",
            colors: { primary: "#B98346", background: "#AD6425", playerBg: "#E0831F", text: "#E0F7FA" }
        },
        8: { 
            title: "ye", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/2Ek1q2haOnxVqhvVKqMvJe?utm_source=generator",
            colors: { primary: "#8BC34A", background: "#101A0F", playerBg: "#1a2917", text: "#F1F8E9" }
        },
        9: { 
            title: "Jesus is King", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/0FgZKfoU2Br5sHOfvZKTI9?utm_source=generator",
            colors: { primary: "#2566AD", background: "#5294DA", playerBg: "#0C233B", text: "#FFFDE7" }
        },
        10: { 
            title: "Donda", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/5CnpZV3q5BcESefcB3WJmz?utm_source=generator",
            colors: { primary: "#000000", background: "#000000", playerBg: "#000000", text: "#FCE4EC" }
        },
        11: { 
            title: "Donda 2", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/1ZkGNUz1un0b3Z7EsJl3ci?utm_source=generator",
            colors: { primary: "#000000", background: "#000000", playerBg: "#74655D", text: "#FCE4EC" }
        },
        12: { 
            title: "Bully", 
            spotifyEmbedUrl: "https://open.spotify.com/prerelease/4xFs0x8abwU3H9uNRPFRmE?si=0bf742808a1043cd",
            colors: { primary: "#0E0C0B", background: "#A2938B", playerBg: "#CBC3BE", text: "#FFF8E1" }
        },
        13: { 
            title: "Kids See Ghosts", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/6pwuKxMUkNg673KETsXPUV?utm_source=generator",
            colors: { primary: "AB47BC", background: "#0051FF", playerBg: "#FF9D2E", text: "#E0F2F1" }
        },
        14: { 
            title: "Vultures", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/4DOsPwJtokv6HEifZ6t5j6?utm_source=generator",
            colors: { primary: "#000000", background: "#474546", playerBg: "#8A4F16", text: "#F3E5F5" }
        }
    };

    const carousel = document.querySelector('.carousel');
    const albums = document.querySelectorAll('.album');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const spotifyPlayer = document.querySelector('.spotify-player');
    const tracksTitle = document.querySelector('.tracks-container h2');
    const playerContainer = document.querySelector('.tracks-container');

    let currentPosition = 0;
    const albumWidth = albums[0].offsetWidth + 20;
    const visibleAlbums = Math.floor(carousel.parentElement.offsetWidth / albumWidth);
    const maxPosition = Math.max(0, (albums.length - visibleAlbums) * albumWidth);

    function updateCarouselPosition() {
        carousel.style.transform = `translateX(-${currentPosition}px)`;
        
        prevButton.disabled = currentPosition === 0;
        nextButton.disabled = currentPosition >= maxPosition;
    }

    function showAlbumTracks(albumId) {
        const albumData = albumsData[albumId];
        
        tracksTitle.textContent = `Músicas do ${albumData.title}`;
        
        spotifyPlayer.innerHTML = `
            <iframe src="${albumData.spotifyEmbedUrl}" 
                    width="100%" 
                    height="352" 
                    frameborder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media">
            </iframe>
        `;
        
        albums.forEach(a => a.classList.remove('selected'));
        document.querySelector(`.album[data-album-id="${albumId}"]`).classList.add('selected');

        document.body.style.backgroundColor = albumData.colors.background;
        document.body.style.color = albumData.colors.text;

        document.querySelector("header").style.backgroundColor = albumData.colors.primary;
        document.querySelector("header").style.color = albumData.colors.text;

        playerContainer.style.backgroundColor = albumData.colors.playerBg;
        
        tracksTitle.style.color = albumData.colors.text; 

        spotifyPlayer.style.backgroundColor = albumData.colors.playerBg;
        spotifyPlayer.style.borderRadius = "12px";
        spotifyPlayer.style.padding = "15px";
        spotifyPlayer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

        document.querySelector("footer").style.backgroundColor = albumData.colors.background;
        document.querySelector("footer").style.color = albumData.colors.text;

        prevButton.style.backgroundColor = albumData.colors.primary;
        nextButton.style.backgroundColor = albumData.colors.primary;
    }

    prevButton.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition = Math.max(0, currentPosition - albumWidth * visibleAlbums);
            updateCarouselPosition();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPosition < maxPosition) {
            currentPosition = Math.min(maxPosition, currentPosition + albumWidth * visibleAlbums);
            updateCarouselPosition();
        }
    });

    albums.forEach(album => {
        album.addEventListener('click', () => {
            const albumId = album.getAttribute('data-album-id');
            showAlbumTracks(albumId);
        });
    });

    updateCarouselPosition();
    
    if (albums.length > 0) {
        showAlbumTracks(1);
    }

    window.addEventListener('resize', () => {
        const newVisibleAlbums = Math.floor(carousel.parentElement.offsetWidth / albumWidth);
        const newMaxPosition = Math.max(0, (albums.length - newVisibleAlbums) * albumWidth);
        
        if (newVisibleAlbums !== visibleAlbums) {
            currentPosition = Math.min(currentPosition, newMaxPosition);
            updateCarouselPosition();
        }
    });
});