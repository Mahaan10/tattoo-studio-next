"use client";

import { useState } from "react";
import useArtist from "../../artist/useArtist";
import ArtistLookbookTable from "./ArtistLookbookTable";
import { ArtistInfo } from "@/components/schema & types/artist/artist.types";
import { CiEdit } from "react-icons/ci";
import Modal from "@/components/ui/Modal";
import TattooArtistsForm from "../tattoo-artists/TattooArtistsForm";

function ArtistLookbookContainer() {
  const { artistData, singleArtistIsLoading, singleArtistIsError } =
    useArtist();
    const [artistToEdit, setArtistToEdit] = useState<ArtistInfo | null>(null);
  console.log("artistData =>", artistData);
  console.log("artistToEdit =>", artistToEdit);
  if (singleArtistIsLoading) return null;
  return (
   <>
    <div className="container">
      <div className="flex items-center justify-between">
        <h1 className="md:text-xl sm:max-md:text-base text-sm font-bold">
          {`${artistData?.displayName}'s Lookbook`}
        </h1>
        <div className="flex items-center">
          <button
            className="btn flex gap-x-2 text-sm"
            onClick={() => setArtistToEdit(artistData)}
          >
            <span>Edit Artist</span>
            <CiEdit className="size-5" />
          </button>
        </div>
      </div>
      <div className="w-full h-[0.5px] my-10 bg-snow/30"></div>
      <ArtistLookbookTable artistData={artistData}/>
    </div>
    {/* Edit Course */}
    {artistToEdit && (
        <Modal
          title={`Edit ${artistToEdit.displayName}`}
          onClose={() => setArtistToEdit(null)}
        >
          <TattooArtistsForm
            artistToEdit={artistToEdit}
            onClose={() => setArtistToEdit(null)}
          />
        </Modal>
      )}
    </>
  );
}

export default ArtistLookbookContainer;
