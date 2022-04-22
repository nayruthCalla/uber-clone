import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const UberOption = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState();

  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0]?.duration / 100);
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  // console.log(rideDuration);

  return (
    <AcctionOptions>
      <Title>Choose a ride, or swipe up for more</Title>
      {carList.map(({ imgUrl, service, multiplier }, index) => (
        <Wrapper key={index}>
          <ContainerItems>
            <IconCar src={imgUrl} alt="iconCar" />
            <ContainerText>
              <Text>{service}</Text>
              <ArrivalTimeText>5 min away</ArrivalTimeText>
            </ContainerText>
          </ContainerItems>
          <Text>{"$" + (rideDuration * multiplier).toFixed(2)}</Text>
        </Wrapper>
      ))}
    </AcctionOptions>
  );
};

export default UberOption;

const AcctionOptions = tw.div`
flex-1 overflow-y-scroll
`;
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`;

const Wrapper = tw.article`
flex justify-between items-center p-4 hover:bg-gray-200
`;
const ContainerItems = tw.div`
flex gap-2.5 justify-center items-center
`;
const ContainerText = tw.div``;
const IconCar = tw.img`
w-16 h-16 object-contain
`;
const ArrivalTimeText = tw.p`
text-xs text-sky-600
`;
const Text = tw.p`
font-bold text-xl
`;
