const modal_biografia = document.getElementById("bio");

function modalBio() {
    modal_biografia.showModal();
}

document.addEventListener('DOMContentLoaded', function() {
    const albumsData = {
        1: { 
            title: "Álbum Um", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/4Uv86qWpGTxf7fU7lG5X6F?utm_source=generator" 
        },
        2: { 
            title: "Álbum Dois", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/5ll74bqtkcXlKE7wwkMq4g?utm_source=generator" 
        },
        3: { 
            title: "Álbum Três", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/4SZko61aMnmgvNhfhgTuD3?utm_source=generator" 
        },
        4: { 
            title: "Álbum Quatro", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/3WFTGIO6E3Xh4paEOBY9OU?utm_source=generator" 
        },
        5: { 
            title: "Álbum Cinco", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/20r762YmB5HeofjMCiPMLv?utm_source=generator" 
        },
        6: { 
            title: "Álbum Seis", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/7D2NdGvBHIavgLhmcwhluK?utm_source=generator" 
        },
        7: { 
            title: "Álbum Sete", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/7gsWAHLeT0w7es6FofOXk1?utm_source=generator" 
        },
        8: { 
            title: "Álbum Oito", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/2Ek1q2haOnxVqhvVKqMvJe?utm_source=generator" 
        },
        9: { 
            title: "Álbum Nove", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/0FgZKfoU2Br5sHOfvZKTI9?utm_source=generator" 
        },
        10: { 
            title: "Álbum Dez", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/5CnpZV3q5BcESefcB3WJmz?utm_source=generator" 
        },
        11: { 
            title: "Álbum Onze", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/1ZkGNUz1un0b3Z7EsJl3ci?utm_source=generator" 
        },
        12: { 
            title: "Álbum Doze", 
            spotifyEmbedUrl: "https://open.spotify.com/prerelease/4xFs0x8abwU3H9uNRPFRmE?si=0bf742808a1043cd" 
        },
        13: { 
            title: "Álbum Treze", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/6pwuKxMUkNg673KETsXPUV?utm_source=generator" 
        },
        14: { 
            title: "Álbum Quatorze", 
            spotifyEmbedUrl: "https://open.spotify.com/embed/album/4DOsPwJtokv6HEifZ6t5j6?utm_source=generator" 
        }
    };

 const carousel = document.querySelector('.carousel');
    const albums = document.querySelectorAll('.album');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const spotifyPlayer = document.querySelector('.spotify-player');
    const tracksTitle = document.querySelector('.tracks-container h2');

    /* tá passando, arrumo depois */

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
})