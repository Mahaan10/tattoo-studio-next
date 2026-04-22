"use client";

import { useState } from "react";
import useArtist from "../../artist/useArtist";
import { ArtistInfo } from "@/components/schema & types/artist/artist.types";
import Table from "@/components/ui/Table";
import Modal from "@/components/ui/Modal";
import TattooArtistsRow from "./TattooArtistsRow";
import TattooArtistsForm from "./TattooArtistsForm";

function TattooArtistsTable() {
  const { allArtists, allArtistsIsError, allArtistsIsLoading } = useArtist();

  const [artistToEdit, setArtistToEdit] = useState<ArtistInfo | null>(null);

  console.log("artistToEdit =>", artistToEdit);
  console.log("allArtists =>", allArtists);

  if (allArtistsIsLoading) return null;

  return (
    <>
      {allArtists?.length === 0 ? (
        <p className="">No Artist defined yet</p>
      ) : (
        <>
          <Table>
            <Table.Header>
              <th className="py-2">#</th>
              <th>Name</th>
              <th>Avatar</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Status</th>
              <th>Instagram</th>
              <th>Operation</th>
            </Table.Header>
            <Table.Body>
              {allArtists.map((artist, index) => (
                <TattooArtistsRow
                  key={artist.id}
                  artist={artist}
                  //index={(currentPage - 1) * 6 + index}
                  index={index}
                  onEdit={() => setArtistToEdit(artist)}
                />
              ))}
            </Table.Body>
          </Table>
          {/* <div className="flex justify-center mt-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                />
              </div> */}
        </>
      )}
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

export default TattooArtistsTable;
