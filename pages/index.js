import Link from "next/link";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <AcctionItems>
        <Header>
          <UberLogo
            src="https://i.ibb.co/84stgjq/uber/technologies-new-20218114.jpg"
            alt="logo"
          />
          <UserProfile>
            <Name>Nayruth Calla</Name>
            <Photo
              src="https://res.cloudinary.com/drcn7ijzl/image/upload/v1648680709/Nayfoto-min_ym4ezh.jpg"
              alt="photo-user"
            />
          </UserProfile>
        </Header>
        <ActionButtons>
          <ActionButton>
            <ActionButtonImage
              src="https://i.ibb.co/cyvcpfF/uberx.png"
              alt="car-img"
            />
            Ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImage
              src="https://i.ibb.co/n776JLm/bike.png"
              alt="car-img"
            />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage
              src="https://i.ibb.co/5RjchBg/uberschedule.png"
              alt="car-img"
            />
            Reserve
          </ActionButton>
        </ActionButtons>
        <Link href="./Search">
          <SearchButton>where to</SearchButton>
        </Link>
      </AcctionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col bg-red-300px h-screen
`;
const AcctionItems = tw.div`
flex-1 p-4
`;
const Header = tw.header`
flex flex-row justify-between items-center
`;
const UberLogo = tw.img`
h-28
`;
const UserProfile = tw.div`
flex items-center
`;
const Name = tw.p`
mr-4 w-20 text-sm
`;
const Photo = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`;
const ActionButtons = tw.div`
flex
`;
const ActionButton = tw.div`
flex bg-gray-200 text-center flex-1 m-1 h-32 items-center justify-center flex-col  rounded-lg transform hover:scale-105 trasition text-xl
`;
const ActionButtonImage = tw.img`
h-3/5
`;
const SearchButton = tw.button`
h-20 w-full bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
