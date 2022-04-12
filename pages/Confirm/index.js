import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import UberOption from "../components/UberOption";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    // const pickup = "Santa Monica";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibmF5cnV0aGNhbGxhIiwiYSI6ImNsMWUxdWl3NTAzY3czbHFrdnd5ZDkwNzAifQ.FiV_LMWHFnuvGyqjxXDQdw",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    // const dropoff = "Los Angeles";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibmF5cnV0aGNhbGxhIiwiYSI6ImNsMWUxdWl3NTAzY3czbHFrdnd5ZDkwNzAifQ.FiV_LMWHFnuvGyqjxXDQdw",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <AcctionOptions>
        <Title>Choose a ride, or swipe up for more</Title>
        <UberOption
          imgUrl="https://i.ibb.co/cyvcpfF/uberx.png"
          service="UberX"
          time="5 min away"
          price="$20.20"
        />
      </AcctionOptions>
      <ConfirmbuttonContainer>Confirm UberX</ConfirmbuttonContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex flex-col h-screen
`;
const AcctionOptions = tw.div`
flex-1
`;
const ConfirmbuttonContainer = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`;
const Title = tw.div`
text-gray-500 text-center text-xs
`;
