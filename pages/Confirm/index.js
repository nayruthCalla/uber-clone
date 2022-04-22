/* eslint-disable @next/next/link-passhref */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import UberOption from "../components/UberOption";
import { FaArrowLeft } from "react-icons/fa";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getPickupCoordinates = (pickup) => {
    // const pickup = "Santa Monica";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
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
          access_token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
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
      <Link href="/Search">
        <BackButton>
          <FaArrowLeft />
        </BackButton>
      </Link>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <UberOption
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <ConfirmbuttonContainer>Confirm UberX</ConfirmbuttonContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex flex-col h-screen
`;

const ConfirmbuttonContainer = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`;
const ButtonContainer = tw.div`
borde-t-2 `;
const BackButton = tw.button`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer text-2xl  p-1 
`;
