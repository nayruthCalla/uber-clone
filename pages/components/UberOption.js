import tw from "tailwind-styled-components";

const UberOption = ({ imgUrl, service, time, price }) => {
  return (
    <Wrapper>
      <ContainerItems>
        <IconCar src={imgUrl} alt="iconCar" />
        <ContainerText>
          <Text>{service}</Text>
          <ArrivalTimeText>{time}</ArrivalTimeText>
        </ContainerText>
      </ContainerItems>
      <Text>{price}</Text>
    </Wrapper>
  );
};

export default UberOption;

const Wrapper = tw.article`
flex justify-between items-center p-4
`;
const ContainerItems = tw.div`
flex gap-2.5 justify-center items-center
`;
const ContainerText = tw.div``;
const IconCar = tw.img`
w-16 h-16
`;
const ArrivalTimeText = tw.p`
text-xs text-sky-600
`;
const Text = tw.p`
font-bold text-xl
`;
