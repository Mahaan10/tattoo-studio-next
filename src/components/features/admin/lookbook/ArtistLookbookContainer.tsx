"use client";

import useArtist from "../../artist/useArtist";

function ArtistLookbookContainer() {
  const { artistData, singleArtistIsLoading, singleArtistIsError } =
    useArtist();

  console.log("artistData =>", artistData);

  if (singleArtistIsLoading) return null;
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <h1 className="md:text-xl sm:max-md:text-base text-sm font-bold">
          {`${artistData?.displayName}'s Lookbook`}
        </h1>
      </div>
      <div className="w-full h-[0.5px] my-10 bg-snow/30"></div>
      {/* <TattooArtistsTable /> */}
    </div>
  );
}

export default ArtistLookbookContainer;
