"use client";

import { useState } from "react";
import useArtist from "../../artist/useArtist";
import ArtistLookbookTable from "./ArtistLookbookTable";
import { ArtistInfo } from "@/components/schema & types/artist/artist.types";
import { CiEdit } from "react-icons/ci";
import Modal from "@/components/ui/Modal";
import TattooArtistsForm from "../tattoo-artists/TattooArtistsForm";
import { toast } from "react-toastify";
import DotsLoader from "@/components/ui/DotsLoader";

function ArtistLookbookContainer() {
  const { artistData, singleArtistIsLoading, singleArtistIsError } =
    useArtist();
  const [artistToEdit, setArtistToEdit] = useState<ArtistInfo | null>(null);

  if (singleArtistIsError) {
    toast.error("Failed to load artist's works");
    return (
      <div className="container">
        <p className="text-red-500">Failed to load artist's works</p>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="md:text-xl sm:max-md:text-base text-sm font-bold">
            {singleArtistIsLoading ? (
              <>
                Loading artist <DotsLoader />
              </>
            ) : (
              `${artistData?.displayName}'s Lookbook`
            )}
          </h1>
          <div className="flex items-center">
            {singleArtistIsLoading ? (
              <div className="w-15 h-8 border animate-pulse border-snow/10" />
            ) : (
              <button
                className="btn flex gap-x-2 text-sm"
                onClick={() => setArtistToEdit(artistData)}
              >
                <span>Edit Artist</span>
                <CiEdit className="size-5" />
              </button>
            )}
          </div>
        </div>
        <div className="w-full h-[0.5px] my-10 bg-snow/30"></div>
        <ArtistLookbookTable
          artistData={artistData}
          isLoading={singleArtistIsLoading}
        />
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
