"use client";

import { ArtistInfo } from "@/components/schema & types/artist/artist.types";
import Table from "@/components/ui/Table";
import ArtistLookbookRow from "./ArtistLookbookRow";

interface ArtistLookbookTableProps {
  artistData: ArtistInfo | null;
  isLoading?: boolean;
}

function ArtistLookbookTable({
  artistData,
  isLoading,
}: ArtistLookbookTableProps) {
  return (
    <>
      <Table>
        <Table.Header>
          <th className="py-2">#</th>
          <th>Title</th>
          <th>Tattoo</th>
          <th>Tags</th>
        </Table.Header>
        <Table.Body>
          {isLoading ? (
            [...Array(6)].map((_, i) => (
              <Table.Row key={i}>
                <td colSpan={9}>
                  <div className="h-10 bg-snow/10 animate-pulse rounded" />
                </td>
              </Table.Row>
            ))
          ) : artistData?.works?.length === 0 ? (
            <Table.Row>
              <td colSpan={4} className="py-4">
                No Lookbook defined yet
              </td>
            </Table.Row>
          ) : (
            artistData?.works.map((work, index) => (
              <ArtistLookbookRow
                key={work.id}
                work={work}
                //index={(currentPage - 1) * 6 + index}
                index={index}
              />
            ))
          )}
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
  );
}

export default ArtistLookbookTable;
