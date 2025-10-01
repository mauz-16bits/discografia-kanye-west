document.addEventListener('DOMContentLoaded', function() {
    const artistsData = {
        kanye: {
            name: "Kanye West  (Ye, DONDA ou ¥$)",
            fullName: "Kanye West ",
            bio: "Kanye Omari West é um rapper, produtor, designer e empresário americano...",
            albums: {
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
                },
            }
        },
        carti: {
            name: "Playboi Carti",
            fullName: "Jordan Terrell Carter",
            bio: "Jordan Terrell Carter é um rapper e produtor americano.",
            albums: {
                1: {
                    title: "Die Lit",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/7dAm8ShwJLFm9SaJ6Yc58O?utm_source=generator",
                    colors: {
                        primary: "#3d3d3d",
                        background: "#a8a8a8",
                        playerBg: "#383838",
                        text: "#E8F4FD"
                    }
                },
                2: {
                    title: "Whole Lotta Rodeo",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/2QRedhP5RmKJiJ1i8VgDGR?utm_source=generator",
                    colors: {
                        primary: "#ff2121",
                        background: "#940000",
                        playerBg: "#590000",
                        text: "#F0F7F0"
                    }
                },
                3: {
                    title: "Baby Boi",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/463QJvF6PcYdEhh9x5CXD9?utm_source=generator",
                    colors: {
                        primary: "#363636",
                        background: "#808080",
                        playerBg: "#363636",
                        text: "#FDF0F3"
                    }
                },
                4: {
                    title: "MUSIC",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/0fSfkmx0tdPqFYkJuNX74a?utm_source=generator",
                    colors: {
                        primary: "#1f1f1f",
                        background: "#808080",
                        playerBg: "#1f1f1f",
                        text: "#E6F3FF"
                    }
                },  
            }
        },
        kendrick: {
            name: "Kendrick Lamar",
            fullName: "Kendrick Lamar",
            bio: "Kendrick Lamar Duckworth é um rapper, compositor e produtor musical americano...",
            albums: {
                1: {
                    title: "Section.80",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/1bkN9nIkkCnXeG4yitVS1J?utm_source=generator",
                    colors: {
                        primary: "#1B4332",
                        background: "#2D6A4F",
                        playerBg: "#1B3A2E",
                        text: "#E8F5E8"
                    }
                },
                2: {
                    title: "good kid, m.A.A.d city",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/6PBZN8cbwkqm1ERj2BGXJ1?utm_source=generator",
                    colors: {
                        primary: "#3D348B",
                        background: "#5046B4",
                        playerBg: "#2A2470",
                        text: "#F0EFFF"
                    }
                },
                3: {
                    title: "To Pimp a Butterfly",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/7ycBtnsMtyVbbwTfJwRjSP?utm_source=generator",
                    colors: {
                        primary: "#FF6B00",
                        background: "#FF8C00",
                        playerBg: "#CC5500",
                        text: "#FFF3E0"
                    }
                },
                4: {
                    title: "DAMN.",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/4eLPsYPBmXABThSJ821sqY?utm_source=generator",
                    colors: {
                        primary: "#8B0000",
                        background: "#A52A2A",
                        playerBg: "#660000",
                        text: "#FFE5E5"
                    }
                },
                5: {
                    title: "Mr. Morale & the Big Steppers",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/79ONNoS4M9tfIA1mYLBYVX?utm_source=generator",
                    colors: {
                        primary: "#4A235A",
                        background: "#6C3483",
                        playerBg: "#3D1E47",
                        text: "#F5EEF8"
                    }
                },
                6: {
                    title: "GNX",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/0hvT3yIEysuuvkK73vgdcW?utm_source=generator",
                    colors: {
                        primary: "#262626",
                        background: "#424242",
                        playerBg: "#8a8686",
                        text: "#F5EEF8"
                    }
                }
            }
        },
        travis: {
            name: "Travis Scott",
            fullName: "Jacques Berman Webster II",
            bio: "Jacques Berman Webster II, conhecido profissionalmente como Travis Scott...",
            albums: {
                1: {
                    title: "Rodeo",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/4PWBTB6NYSKQwfo79I3prg?utm_source=generator",
                    colors: {
                        primary: "#8B4513",
                        background: "#A0522D",
                        playerBg: "#654321",
                        text: "#FDF5E6"
                    }
                },
                2: {
                    title: "Birds in the Trap Sing McKnight",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/42WVQWuf1teDysXiOupIZt?utm_source=generator",
                    colors: {
                        primary: "#1C1C1C",
                        background: "#2F2F2F",
                        playerBg: "#0A0A0A",
                        text: "#E8E8E8"
                    }
                },
                3: {
                    title: "Astroworld",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/41GuZcammIkupMPKH2OJ6I?utm_source=generator",
                    colors: {
                        primary: "#2a6cad",
                        background: "#FF8E8E",
                        playerBg: "#FF4757",
                        text: "#FFF5F5"
                    }
                },
                4: {
                    title: "Utopia",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/18NOKLkZETa4sWwLMIm0UZ?utm_source=generator",
                    colors: {
                        primary: "#000000",
                        background: "#000000",
                        playerBg: "#000000",
                        text: "#F0EFFF"
                    }
                },
                5: {
                    title: "Days Before Rodeo",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/54Y471E7GNBSOXjZtqONId?utm_source=generator",
                    colors: {
                        primary: "#4834D4",
                        background: "#5A4FCF",
                        playerBg: "#3C2F9E",
                        text: "#F0EFFF"
                    }
                }
            }
        },
        future: {
            name: "Future",
            fullName: "Nayvadius DeMun Wilburn",
            bio: "Abel Makkonen Tesfaye, conhecido profissionalmente como The Weeknd...",
            albums: {
                1: {
                    title: "Pluto",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/1yNIBzlvPVBALSPkUMq1ma?utm_source=generator",
                    colors: {
                        primary: "#2C2C54",
                        background: "#40407A",
                        playerBg: "#1E1E3A",
                        text: "#F0F0FF"
                    }
                },
                2: {
                    title: "Honest",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/5rbqupVSYwvEmXBUnFtUf7?utm_source=generator",
                    colors: {
                        primary: "#000000",
                        background: "#a80300",
                        playerBg: "#610200",
                        text: "#fcf5f5"
                    }
                },
                3: {
                    title: "DS2",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/0fUy6IdLHDpGNwavIlhEsl?utm_source=generator",
                    colors: {
                        primary: "#2121a3",
                        background: "#5f158a",
                        playerBg: "#CC7E15",
                        text: "#FFF8E1"
                    }
                },
                4: {
                    title: "High Off Life",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/4bNPOFOzxGhF5jhfIK6lit?utm_source=generator",
                    colors: {
                        primary: "#39363b",
                        background: "#5e5e5e",
                        playerBg: "#CC0000",
                        text: "#ffffff"
                    }
                },
                5: {
                    title: "Pluto x Baby Pluto",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/3aITAVBURujVe8fhI2seeR?utm_source=generator",
                    colors: {
                        primary: "#730000",
                        background: "#662727",
                        playerBg: "#001c45",
                        text: "#E0FFFF"
                    }
                },
                6: {
                    title: "I NEVER LIKED YOU",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/4WgEUAbA3elrKKvTh1jjM3?utm_source=generator",
                    colors: {
                        primary: "#450009",
                        background: "#260307",
                        playerBg: "#59141c",
                        text: "#E0FFFF"
                    }
                },
                7: {
                    title: "Álbum de colaboração com Metro Boomin: WE DON'T TRUST YOU",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/4iqbFIdGOTzXeDtt9owjQn?utm_source=generator",
                    colors: {
                        primary: "#22416b",
                        background: "#7880ab",
                        playerBg: "#610005",
                        text: "#E0FFFF"
                    }
                },
                8: {
                    title: "Álbum de colaboração com Metro Boomin: WE STILL DON'T TRUST YOU",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/3bSNhnaQQXpC639OQ4pMyP?utm_source=generator",
                    colors: {
                        primary: "#363636",
                        background: "#171717",
                        playerBg: "#6b6a6a",
                        text: "#E0FFFF"
                    }
                },
                9: {
                    title: "MIX TAPE PLUTO",
                    spotifyEmbedUrl: "https://open.spotify.com/embed/album/5IcsHifVLGG0emBPlMZacj?utm_source=generator",
                    colors: {
                        primary: "#5100ad",
                        background: "#260052",
                        playerBg: "#212121",
                        text: "#E0FFFF"
                    }
                },
            }
        }
    };

    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const spotifyPlayer = document.querySelector('.spotify-player');
    const tracksTitle = document.querySelector('.tracks-container h2');
    const playerContainer = document.querySelector('.tracks-container');
    const headerTitle = document.querySelector('header h2');
    const bioText = document.querySelector('header p span');
    
    const artistIcons = document.querySelectorAll('.artist-icon');
    const artistToggle = document.querySelector('.artist-toggle');
    const artistSelector = document.querySelector('.artist-selector');

    let currentPosition = 0;
    let currentArtist = 'kanye';
    let albums = [];
    let albumWidth = 0;
    let visibleAlbums = 0;
    let maxPosition = 0;

    function updateCarouselPosition() {
        carousel.style.transform = `translateX(-${currentPosition}px)`;
        if (prevButton && nextButton) {
            prevButton.disabled = currentPosition === 0;
            nextButton.disabled = currentPosition >= maxPosition;
        }
    }

    function showAlbumTracks(albumId) {
        const albumData = artistsData[currentArtist].albums[albumId];
        if (!albumData) return;

        tracksTitle.textContent = `Músicas do ${albumData.title}`;
        spotifyPlayer.innerHTML = `<iframe src="${albumData.spotifyEmbedUrl}" width="100%" height="352" frameborder="0" allowtransparency="true" allow="encrypted-media"> </iframe>`;
        
        document.querySelectorAll('.album').forEach(a => a.classList.remove('selected'));
        document.querySelector(`.album[data-album-id="${albumId}"]`).classList.add('selected');
        
        applyAlbumColors(albumData.colors);
    }

    function applyAlbumColors(colors) {
        document.body.style.backgroundColor = colors.background;
        document.body.style.color = colors.text;
        document.querySelector("header").style.backgroundColor = colors.primary;
        document.querySelector("header").style.color = colors.text;
        playerContainer.style.backgroundColor = colors.playerBg;
        tracksTitle.style.color = colors.text;
        spotifyPlayer.style.backgroundColor = colors.playerBg;
        document.querySelector("footer").style.backgroundColor = colors.background;
        document.querySelector("footer").style.color = colors.text;
        
        if (prevButton && nextButton) {
            prevButton.style.backgroundColor = colors.primary;
            nextButton.style.backgroundColor = colors.primary;
        }
    }

    function loadArtistDiscography(artistId) {
        currentArtist = artistId;
        const artist = artistsData[artistId];
        
        headerTitle.textContent = artist.fullName;
        bioText.textContent = artist.name;
        
        carousel.innerHTML = '';
        
        Object.keys(artist.albums).forEach(albumId => {
            const album = artist.albums[albumId];
            const albumElement = document.createElement('div');
            albumElement.className = 'album';
            albumElement.setAttribute('data-album-id', albumId);
            albumElement.innerHTML = `
                <img src="https://via.placeholder.com/250x250/333/fff?text=${encodeURIComponent(album.title)}" alt="${album.title}">
                <h3>${album.title}</h3>
            `;
            carousel.appendChild(albumElement);
        });
        
        albums = document.querySelectorAll('.album');
        
        if (albums.length > 0) {
            albumWidth = albums[0].offsetWidth + 20;
            visibleAlbums = Math.floor(carousel.parentElement.offsetWidth / albumWidth);
            maxPosition = Math.max(0, (albums.length - visibleAlbums) * albumWidth);
            currentPosition = 0;
            
            updateCarouselPosition();
            
            showAlbumTracks('1');
            
            albums.forEach(album => {
                album.addEventListener('click', () => {
                    const albumId = album.getAttribute('data-album-id');
                    showAlbumTracks(albumId);
                });
            });
        } else {
            spotifyPlayer.innerHTML = '<p>Nenhum álbum disponível para este artista</p>';
        }
    }

    function selectArtist(artistId) {
        artistIcons.forEach(icon => {
            icon.classList.remove('selected');
        });
        
        document.querySelector(`.artist-icon[data-artist-id="${artistId}"]`).classList.add('selected');
        loadArtistDiscography(artistId);
    }

    function toggleArtistIcons() {
        const artistIconsContainer = document.querySelector('.artist-icons');
        artistIconsContainer.style.display = artistIconsContainer.style.display === 'none' ? 'flex' : 'none';
        artistToggle.textContent = artistIconsContainer.style.display === 'none' ? '+' : '-';
    }

    if (prevButton && nextButton) {
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
    }

    artistIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const artistId = icon.getAttribute('data-artist-id');
            selectArtist(artistId);
        });
    });

    artistToggle.addEventListener('click', toggleArtistIcons);

    loadArtistDiscography('kanye');

    window.addEventListener('resize', () => {
        if (albums.length > 0) {
            const newVisibleAlbums = Math.floor(carousel.parentElement.offsetWidth / albumWidth);
            const newMaxPosition = Math.max(0, (albums.length - newVisibleAlbums) * albumWidth);
            
            if (newVisibleAlbums !== visibleAlbums) {
                currentPosition = Math.min(currentPosition, newMaxPosition);
                updateCarouselPosition();
            }
        }
    });
});