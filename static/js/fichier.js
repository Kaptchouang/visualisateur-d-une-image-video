// const card = document.querySelector('.card');

//  card.addEventListener('click', () => {
//    window.location.href = 'viewer.html';
//  });





function gererMediaTeleversement() {
  
  const elementFichier = document.getElementById("fileUpload");
  const container=document.getElementById("panocontainer");
  
  const fichierSelectionne = elementFichier.files[0];

  if (!fichierSelectionne) {
    console.error("Aucun fichier sélectionné.");
    return;
  }

  const lecteur = new FileReader();
  lecteur.onload = (evenement) => {
    const typeFichier = fichierSelectionne.type;
    const url = evenement.target.result;
    

    if (url.startsWith("data:image/")) {
      container.innerHTML=""
      const newDiv = document.createElement("div");
      newDiv.id = 'panorama';
  
      // Replace the content of the old div with the new empty div
      container.appendChild(newDiv)
      // Afficher l'image avec Pannellum
      pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": url,
        "autoLoad": true

    } )
    } else if (url.startsWith("data:video/")) {
     
      container.innerHTML= ""
      console.log(url)
      const videoHtml=`<video id="panorama" class="video-js vjs-default-skin vjs-big-play-centered"
      controls preload="none" style="width:100%;height:400px;"
       crossorigin="anonymous">
      <source src=${url}  type=${typeFichier}/>
        
    
        <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to
            a web browser that <a href="http://videojs.com/html5-video-support/"
            target="_blank">supports HTML5 video</a>
        </p>
    </video>`
      
 
       container.innerHTML= videoHtml
      // Afficher la vidéo avec video.js
      video.js("panorama");
       
    } else {
      console.error("Format de fichier non pris en charge. Veuillez sélectionner une image ou une vidéo.");
    }
  };

  lecteur.readAsDataURL(fichierSelectionne);
}


// function loadMedia() {
//   const file = document.getElementById("fileUpload").files[0];
//   if (!file) return;

//   const reader = new FileReader();
//   reader.onload = (event) => {
//     const fileType = file.type;
//     const url = event.target.result;

//     if (fileType.startsWith("image/")) {
//       // Afficher l'image
//       const panorama = pannellum.viewer('image-container', {
//         "type": "equirectangular",
//         "panorama": url
//       });
//     } else if (fileType.startsWith("video/")) {
//       // Afficher la vidéo
//       videojs('panorama', {
//         plugins: {
//           pannellum: {}
//         },
//         loadedmetadata: function(event) {
//           panorama = pannellum.viewer('container', {
//             "type": "equirectangular",
//             "panorama": null,
//             "autoRotate": -1
//           });
//         },
//         sources: [{
//           src: url,
//           type: fileType
//         }]
//       });
//     }
//   };
//   reader.readAsDataURL(file);
// }







// function loadVideo() {
//   // Récupérer le fichier vidéo sélectionné
//   const videoFile = document.getElementById('videoUpload').files[0];

//   // Vérifier si le fichier est une vidéo 360°
//   if (!is360Video(videoFile)) {
//     alert("Veuillez sélectionner une vidéo 360°.");
//     return;
//   }

//   // Créer une URL de source pour la vidéo
//   const videoURL = URL.createObjectURL(videoFile);

//   // Créer un lecteur vidéo et l'ajouter à la page
//   const videoPlayer = new pannellum.Viewer({
//     container: '#video-container',
//     type: 'video',
//     video: videoURL,
//     autoLoad: true,
//   });

//   // Démarrer la lecture de la vidéo
//   videoPlayer.play();
// }

// function is360Video(file) {
//   // Vérifier l'en-tête du fichier pour la métadonnée "projection"
//   // ... code pour vérifier l'en-tête et retourner true si la vidéo est 360° ...
// }




// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8">
//     <title>Pannellum Video Demo</title>
//     <link rel="stylesheet" href="https://cdn.pannellum.org/2.5/pannellum.css"/>
//     <script type="text/javascript" src="https://cdn.pannellum.org/2.5/pannellum.js"></script>

//     <link href="https://vjs.zencdn.net/7.1.0/video-js.css" rel="stylesheet"
//       type="text/css">
//     <script src="https://vjs.zencdn.net/7.1.0/video.js"></script>
//     <script src="/js/videojs-pannellum-plugin.js"></script>
// </head>
// <body>

// <video id="panorama" class="video-js vjs-default-skin vjs-big-play-centered"
//   controls preload="none" style="width:100%;height:400px;"
//   poster="/images/video/jfk-poster.jpg" crossorigin="anonymous">
//     <source src="/images/video/jfk.webm" type="video/webm"/>
//     <source src="/images/video/jfk.mp4" type="video/mp4"/>
//     <p class="vjs-no-js">
//         To view this video please enable JavaScript, and consider upgrading to
//         a web browser that <a href="http://videojs.com/html5-video-support/"
//         target="_blank">supports HTML5 video</a>
//     </p>
// </video>

// <script>
// videojs('panorama', {
//     plugins: {
//         pannellum: {}
//     }
// });
// </script>

// </body>
// </html>





// const pannellum = new Pannellum.Viewer('panorama', {
//   autoLoad: true,
//   haov: 360,
//   vaov: 180,
// });

// const inputElement = document.getElementById('image-upload');

// inputElement.addEventListener('change', (event) => {
//   const file = event.target.files[0];
//   const formData = new FormData();
//   formData.append('image', file);

//   fetch('/upload', {
//     method: 'POST',
//     body: formData,
//   }).then((response) => {
//     if (response.ok) {
//       // Le téléchargement a réussi.
//       // Mettre à jour l'image du panorama avec la nouvelle image téléchargée.
//       pannellum.loadScene(response.url);
//     } else {
//       // Le téléchargement a échoué.
//       // Afficher un message d'erreur à l'utilisateur.
//     }
//   });
// });
