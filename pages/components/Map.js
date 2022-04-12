import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmF5cnV0aGNhbGxhIiwiYSI6ImNsMWUxdWl3NTAzY3czbHFrdnd5ZDkwNzAifQ.FiV_LMWHFnuvGyqjxXDQdw";

const Map = ({ pickupCoordinates, dropoffCoordinates }) => {
  useEffect(() => {
    const Map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph", // style URL
      center: [-99.29011, 39.39172], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });

    if (pickupCoordinates) {
      addToMap(Map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(Map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      Map.fitBounds([pickupCoordinates, dropoffCoordinates], {
        padding: 60,
      });
    }
  }, [pickupCoordinates, dropoffCoordinates]);
  const addToMap = (map, coordinates) => {
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);

    // Create a default Marker, colored black, rotated 45 degrees.
    // const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 })
    // .setLngLat([12.65147, 55.608166])
    // .addTo(map);
  };
  return <Wrapper id="map" />;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
