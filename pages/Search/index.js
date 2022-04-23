// /* eslint-disable @next/next/link-passhref */
import { useState } from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { FaArrowLeft, FaSquareFull, FaCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Search = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  return (
    <Wrapper>
      <SearchContainer>
        <Link href="/">
          <BackButton>
            <FaArrowLeft />
          </BackButton>
        </Link>
        <InputsContainer>
          <FromToIcons>
            <IconContext.Provider
              value={{ color: 'rgb(156 163 175 / var(--tw-bg-opacity))' }}
            >
              <FaCircle />
            </IconContext.Provider>
            <Line />
            <FaSquareFull />
          </FromToIcons>
          <FromToItems>
            <Input
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <Input
              placeholder="Where in?"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
            />
          </FromToItems>
          <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
        </InputsContainer>
      </SearchContainer>
      <PlacesConatiner>
        <StarIcon src="https://img.icons8.com/ios/50/ffffff/star--v1.png" />
        <Text>Saved Places</Text>
      </PlacesConatiner>
      <ConfirmButtonCont>
        <Link
          href={{
            pathname: './Confirm',
            query: {
              pickup: pickup,
              dropoff: dropoff,
            },
          }}
        >
          <ConfirmButton>Confirm Locations</ConfirmButton>
        </Link>
      </ConfirmButtonCont>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`;
const SearchContainer = tw.div`
bg-white p-4
`;
const BackButton = tw.button`
py-4 text-2xl
`;
const InputsContainer = tw.div`
flex flex-row gap-2.5 justify-center items-center
`;
const FromToItems = tw.div`
flex flex-col gap-2.5 justify-center items-center
`;
const FromToIcons = tw(FromToItems)`
py-2 text-xs gap-1
`;
const Line = tw.div`
w-0.5 bg-gray-400 h-9
`;
const Input = tw.input`
bg-gray-200 my-2 rounded-2 p-2 outline-none border-none w-full
`;
// const AddButton = tw.button`

// `;
const PlusIcon = tw.img`
h-10 w-10 bg-gray-200 rounded-full
`;
const StarIcon = tw.img`
bg-gray-400 h-10 w-10 rounded-full p-2
`;
const PlacesConatiner = tw.div`
bg-white p-2 mt-2.5 flex flex-row items-center gap-2.5
`;
const Text = tw.p``;

const ConfirmButtonCont = tw(PlacesConatiner)`
bg-gray-200
`;
const ConfirmButton = tw.button`
bg-black text-white p-2 w-full
`;
