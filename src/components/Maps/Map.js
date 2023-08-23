import React, { useRef, useEffect } from "react";

function Map({ lat, lng }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const google = window.google;

    new google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom: 12,
      mapTypeId: "roadmap",
      draggableCursor: "default",
      draggingCursor: "pointer",
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
    });
  }, [lat, lng]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
}

export default Map;
