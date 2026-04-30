"use client";

import formattedDate, { formatBudgetRange } from "@/components/utils/formatter";
import useBooking from "../../booking/useBooking";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

function BookingDetails() {
  const { singleBooking, singleBookingIsLoading } = useBooking();
  const [index, setIndex] = useState<number>(-1)

  if (singleBookingIsLoading) return null;

  const { client, uploads } = singleBooking || {};
  console.log("singleBooking =>", singleBooking)
  return (
    <div className="p-4 md:p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-semibold">
          {client?.firstName} {client?.lastName}
        </h1>
        <p className="text-sm text-snow/50">Booking overview</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* CLIENT CARD */}
          <Card title="Client">
            <Info
              label="Name"
              value={`${client?.firstName} ${client?.lastName}`}
            />
            <Info label="Email" value={client?.email} />
            <Info label="Phone" value={client?.phone} />
          </Card>

          {/* BOOKING META */}
          <Card title="Booking Info">
            <Info label="Status" value={singleBooking?.status} />
            <Info
              label="Budget"
              value={formatBudgetRange(singleBooking?.budgetRange)}
            />
            <Info
              label="Consult Date"
              value={formattedDate(singleBooking?.consultDate)}
            />
          </Card>

          {/* LONG TEXT FIELDS */}
          <Card title="Tattoo Details">
            <TextBlock label="Placement" value={singleBooking?.placement} />
            <TextBlock label="Description" value={singleBooking?.description} />
          </Card>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-onyx shadow-sm rounded-2xl p-5">
          <h2 className="text-lg font-medium mb-4">Reference Images</h2>

          {uploads && uploads.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {uploads.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setIndex(i)}
                    className="relative w-full aspect-3/4 overflow-hidden rounded-lg border border-snow/50 shadow shadow-alabaster/20"
                  >
                    <Image
                      src={img.secureUrl}
                      alt="reference"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                ))}
              </div>

              {/* Lightbox */}
              <Lightbox open={index >= 0} close={() => setIndex(-1)} slides={uploads.map((img) => ({
                src: img.secureUrl
              }))} plugins={[Zoom]} className="cursor-zoom-in"/>
            </>
          ) : (
            <p className="text-sm text-snow/50">No images uploaded</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;

/* ---------- UI COMPONENTS ---------- */

function Card({ title, children }: any) {
  return (
    <div className="bg-onyx shadow-sm rounded-2xl p-5">
      <h2 className="text-md font-semibold mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Info({ label, value }: any) {
  return (
    <div className="flex justify-between text-sm border-b pb-1 border-snow/20">
      <span className="text-snow/50">{label}</span>
      <span className="font-medium text-right">{value || "-"}</span>
    </div>
  );
}

function TextBlock({ label, value }: any) {
  if (!value) return null;

  return (
    <div>
      <p className="text-sm text-snow/50 mb-1">{label}</p>
      <div className="text-sm bg-carbon-black rounded-xl p-3 leading-relaxed whitespace-pre-wrap">
        {value}
      </div>
    </div>
  );
}
