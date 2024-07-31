// Existing code for sidebar toggle
document.querySelector('.sidebar-toggle').addEventListener('click', () => {
  document.body.classList.toggle('sidebar-open');
});

// Add your code for dynamically injecting artist and album items
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const signUpButton = document.querySelector('.sign-up');
    const logInButton = document.querySelector('.log-in');
    
    // Toggle sidebar for mobile devices
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('sidebar-open');
    });
  
    // Sign up button click event
    signUpButton.addEventListener('click', function() {
      window.location.href = 'sign-up.html'; // Navigate to sign-up page
    });
    // Log in button click event
    logInButton.addEventListener('click', function() {
      window.location.href = 'log-in.html'; // Navigate to log-in page
    });
    
  
    // Simulate loading data for artists and albums
    function loadArtists() {
      const artists = [
        { name: 'HipHop Tamizha', role: 'Artist', img: 'images/HipHopTamizha.jpeg' },
        { name: 'Arijit Singh', role: 'Artist', img: 'images/Arjith Singh.jpeg' },
        { name: 'A.R. Rahman', role: 'Artist', img: 'images/ARR.jpeg' },
        { name: 'Harris Jayaraj', role: 'Artist', img: 'images/Harris Jayaraj.webp' },
        { name: 'Anirudh Ravichander', role: 'Artist', img: 'images/Ani.jpeg' },
        { name: 'Taylor Swift', role: 'Artist', img: 'images/Taylor Swift.jpeg' }
      ];
  
      const artistList = document.querySelector('.artist-list');
      artistList.innerHTML = '';
  
      artists.forEach(artist => {
        const artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');
        artistDiv.innerHTML = `
          <img src="${artist.img}" alt="${artist.name}">
          <p>${artist.name}</p>
          <span>${artist.role}</span>
        `;
        artistList.appendChild(artistDiv);
      });
    }
  
    function loadAlbums() {
      const albums = [
        { name: 'Aashiqui', img: 'images/Aashiqui.jpg' },
        { name: 'Lover', img: 'images/lover.jpg' },
        { name: 'Love Yourself:Answer', img: 'images/LYans.jpeg' },
        { name: 'Aavesham', img: 'images/aavesham.jpg' },
        { name: 'Yeh Jawaani Hai Deewani', img: 'images/yjhd.jpg' },
        { name: 'Vaaranam Aayiram', img: 'images/vaaranam aayiram.jpg' }
      ];
  
      const albumList = document.querySelector('.album-list');
      albumList.innerHTML = '';
  
      albums.forEach(album => {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        albumDiv.innerHTML = `
          <img src="${album.img}" alt="${album.name}">
          <p>${album.name}</p>
          <span>Album</span>
        `;
        albumList.appendChild(albumDiv);
      });
    }
  
    // Load artists and albums data
    loadArtists();
    loadAlbums();
});
