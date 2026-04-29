"use client";

import Table from "@/components/ui/Table";
import useBooking from "../../booking/useBooking";
import BookingRow from "./BookingRow";

function BookingTable() {
  const { bookings, bookingIsLoading, bookingIsError } = useBooking();

  //   const [artistToEdit, setArtistToEdit] = useState<ArtistInfo | null>(null);

  //   console.log("artistToEdit =>", artistToEdit);
  console.log("bookings =>", bookings);

  if (bookingIsLoading) return null;

  return (
    <>
      {bookings?.length === 0 ? (
        <p className="">No Booking sets yet</p>
      ) : (
        <>
          <Table>
            <Table.Header>
              <th className="py-2">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Budget Range</th>
              <th>Consult Date</th>
              <th>Details</th>
              <th>Operation</th>
            </Table.Header>
            <Table.Body>
              {bookings.map((booking, index) => (
                <BookingRow
                  key={booking.id}
                  booking={booking}
                  //index={(currentPage - 1) * 6 + index}
                  index={index}
                  onEdit={() => console.log("Edit")}
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
      {/* {artistToEdit && (
        <Modal
          title={`Edit ${artistToEdit.displayName}`}
          onClose={() => setArtistToEdit(null)}
        >
          <TattooArtistsForm
            artistToEdit={artistToEdit}
            onClose={() => setArtistToEdit(null)}
          />
        </Modal>
      )} */}
    </>
  );
}

export default BookingTable;
