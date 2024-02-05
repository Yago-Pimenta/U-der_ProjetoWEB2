function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -22.0123945165707,
            lng: -47.89088139262415
        },
        zoom: 15,
        mapId: '1184b740a9285bf2',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    })

    // Nome
    // Latitude
    // Longitude
    // URL da Image
    // Escala Largura
    // Escala Altura
    // const markers = [
    //     [
    //         "Chovendo",
    //         -22.008797914529687,
    //         -47.89395144610156,
    //         "rain-icon.png",
    //         50,
    //         50
    //     ]
    // ];

    // for(let i = 0; i < markers.length; i++){
    //     const currMarker = markers[i];
    //     const marker = new google.maps.Marker({
    //         position: {
    //             lat: currMarker[1],
    //             lng: currMarker[2]
    //         },
    //         map,
    //         title: currMarker[0],
    //         icon: {
    //             url: currMarker[3],
    //             scaledSize: new google.maps.Size (currMarker[4], currMarker[5])
    //         },
    //         animation: google.maps.Animation.DROP
    //       });
        
    //       const infowindow = new google.maps.InfoWindow({
    //         content: currMarker[0],
    //       })
    
    //       marker.addListener("click", () => {
    //         infowindow.open(map, marker);
    //       })
    // }
    const markers = [
        {
            state: "Chovendo",
            lat: -22.008797914529687,
            lng: -47.89395144610156,
            imageURL: "img/rain-icon.png",
            image_width: 50,
            image_height: 50,
            description: "Tá caindo um pé d\'água!"
        },
        {
            state: "Ventando",
            lat: -22.005017757155436,
            lng: -47.88154912756783,
            imageURL: "img/wind-icon.png",
            image_width: 50,
            image_height: 50,
            description: "Mó tufão!"
        },
        {
            state: "Falta de luz!",
            lat: -22.008996403694454,
            lng: -47.87914555282747,
            imageURL: "img/no-light-icon.png",
            image_width: 50,
            image_height: 50,
            description: "Tô no breu!"
        }
    ];

    for(let i = 0; i < markers.length; i++){
        const currMarker = markers[i];
        const marker = new google.maps.Marker({
            position: {
                lat: currMarker["lat"],
                lng: currMarker["lng"]
            },
            map,
            title: currMarker["state"],
            icon: {
                url: currMarker["imageURL"],
                scaledSize: new google.maps.Size (currMarker["image_width"], currMarker["image_height"])
            },
            animation: google.maps.Animation.DROP
          });
        
          const infowindow = new google.maps.InfoWindow({
            content: currMarker["description"],
          })
    
          marker.addListener("click", () => {
            infowindow.open(map, marker);
          })
    }
}

