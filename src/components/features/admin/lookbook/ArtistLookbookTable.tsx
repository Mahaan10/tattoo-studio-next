"use client";

import { ArtistInfo } from "@/components/schema & types/artist/artist.types";
import Table from "@/components/ui/Table";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import ArtistLookbookRow from "./ArtistLookbookRow";
import TattooArtistsForm from "../tattoo-artists/TattooArtistsForm";

interface ArtistLookbookTableProps {
    artistData: ArtistInfo | null
}

function ArtistLookbookTable({artistData}: ArtistLookbookTableProps) {

  const [artistToEdit, setArtistToEdit] = useState<ArtistInfo | null>(null);

  console.log("artistToEdit =>", artistToEdit);
  console.log("allArtists =>", artistData);


  return (
    <>
      {artistData?.works?.length === 0 ? (
        <p className="">No Lookbook defined yet</p>
      ) : (
        <>
          <Table>
            <Table.Header>
              <th className="py-2">#</th>
              <th>Title</th>
              <th>Tattoo</th>
              <th>Tags</th>
            </Table.Header>
            <Table.Body>
              {artistData?.works.map((work, index) => (
                <ArtistLookbookRow
                  key={work.id}
                  work={work}
                  //index={(currentPage - 1) * 6 + index}
                  index={index}
                  onEdit={() => setArtistToEdit(artistData)}
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
    </>
  );
}

export default ArtistLookbookTable;
