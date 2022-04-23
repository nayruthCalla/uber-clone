import { useState, useEffect } from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Home() {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
        router.push('/Login');
      }
    });
  }, []);

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
            <Name>{user && user.displayName}</Name>
            <Photo
              src={user && user.photoURL}
              alt="photo-user"
              onClick={() => signOut(auth)}
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
h-24
`;
const UserProfile = tw.div`
flex items-center gap-2.5
`;
const Name = tw.p`
text-sm
`;
const Photo = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`;
const ActionButtons = tw.div`
flex
`;
const ActionButton = tw.div`
flex bg-gray-200 text-center flex-1 m-1 h-32 items-center justify-center flex-col  rounded-lg transform hover:scale-105 trasition text-xl
`;
const ActionButtonImage = tw.img`
h-3/5 object-contain
`;
const SearchButton = tw.button`
h-20 w-full bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
