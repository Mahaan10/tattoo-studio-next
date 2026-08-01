"use client";

import formattedDate, {
  formatBudgetRange,
  formatEuro,
} from "@/components/utils/formatter";
import useBooking from "../../booking/useBooking";
import { ReactNode, useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { CiEdit } from "react-icons/ci";
import Modal from "@/components/ui/Modal";
import UpdateBookingStatusForm from "./UpdateBookingStatusForm";
import StatusBadge from "@/components/templates/admin/StatusBadge";
import { toast } from "react-toastify";
import BlurImage from "@/components/templates/skeleton/BlurImage";
import { bookingStatusStyles } from "@/components/templates/admin/booking/bookingStatusStyles";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { BookingType } from "@/components/schema & types/booking/booking-appointment.types";
import { paymentStatusStyles } from "@/components/templates/admin/booking/paymentStatusStyles";
import { bookingSourceLabels } from "./booking.constants";
import {
  paymentMethodMap,
  paymentSourceMap,
} from "../payment/payment.constants";
import BookingDetailsSkeleton from "@/components/templates/skeleton/skeletons/booking/BookingDetailsSkeleton";

export const bookingTypeLabels: Record<BookingType, string> = {
  CONSULTATION: "Consultation",
  APPOINTMENT: "Appointment",
  COVER_UP: "Cover Up",
};

function BookingDetails() {
  const t = useTranslations("admin.bookings.details");
  const { singleBooking, singleBookingIsLoading, singleBookingIsError } =
    useBooking();
  const [index, setIndex] = useState<number>(-1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { client, uploads } = singleBooking || {};
  console.log("singleBooking =>", singleBooking);
  const tattooSession = singleBooking?.tattooSessions?.[0];
  useEffect(() => {
    if (singleBookingIsError) {
      toast.error(t("loadError"));
    }
  }, [singleBookingIsError, t]);

  if (singleBookingIsLoading) {
    return <BookingDetailsSkeleton />;
  }

  if (singleBookingIsError) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p>{t("loadError")}</p>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 md:p-6">
        {/* HEADER */}

        <div className="mb-8">
          {/* Back button */}
          <Link
            href="/admin/booking"
            className="inline-flex items-center gap-2 text-sm text-snow/60 hover:text-snow transition-colors"
          >
            <BsArrowLeft className="size-4" />
            {t("backToBookings")}
          </Link>

          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight">
                  {client?.firstName} {client?.lastName}
                </h1>

                {singleBooking?.status && (
                  <StatusBadge
                    status={singleBooking.status}
                    styles={bookingStatusStyles}
                  />
                )}
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-5 text-sm text-snow/50">
                <span>
                  Created
                  <span className="ml-2 text-snow tracking-widest">
                    {formattedDate(singleBooking?.createdAt)}
                  </span>
                </span>
              </div>
            </div>

            {!["CANCELLED", "COMPLETED", "CONSULT_NO_SHOW"].includes(
              singleBooking?.status ?? "",
            ) && (
              <button
                onClick={() => setIsOpen(true)}
                className="btn flex items-center gap-2"
              >
                <CiEdit className="size-5" />
                {t("updateStatus")}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Summary Card */}
            <Card title="Booking Summary">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <SummaryItem
                  label="Booking Type"
                  value={
                    singleBooking &&
                    bookingTypeLabels[singleBooking.bookingType]
                  }
                />

                <SummaryItem
                  label="Agreed Price"
                  value={formatEuro(singleBooking?.agreedPriceCents)}
                />

                <SummaryItem
                  label="Paid"
                  value={formatEuro(singleBooking?.paidCents)}
                />

                <SummaryItem
                  label="Remaining"
                  value={formatEuro(singleBooking?.remainingCents)}
                />
              </div>
            </Card>

            {/* CLIENT CARD */}
            <Card title="Client">
              <Info
                label="Name"
                value={`${client?.firstName} ${client?.lastName}`}
              />

              <Info label="Email" value={client?.email} />

              <Info label="Phone" value={client?.phone} />

              <Info
                label="Booking Source"
                value={
                  singleBooking && bookingSourceLabels[singleBooking.source]
                }
              />
            </Card>

            {/* BOOKING META */}
            <Card title={t("bookingInfo")}>
              <Info
                label={t("status")}
                value={
                  singleBooking?.status && (
                    <StatusBadge
                      status={singleBooking.status}
                      styles={bookingStatusStyles}
                    />
                  )
                }
              />

              <Info
                label={t("consultDate")}
                value={formattedDate(singleBooking?.consultDate)}
              />

              <Info
                label={t("budget")}
                value={formatBudgetRange(singleBooking?.budgetRange)}
              />

              {singleBooking?.approvedAt && (
                <Info
                  label="Approved At"
                  value={formattedDate(singleBooking.approvedAt)}
                />
              )}

              {singleBooking?.completedAt && (
                <Info
                  label="Completed At"
                  value={formattedDate(singleBooking.completedAt)}
                />
              )}

              {singleBooking?.cancelledAt && (
                <Info
                  label="Cancelled At"
                  value={formattedDate(singleBooking.cancelledAt)}
                />
              )}
            </Card>

            {/* Tattoo Scheduled */}
            {tattooSession && (
              <Card title="Tattoo Schedule">
                <Info
                  label="Scheduled Date"
                  value={formattedDate(tattooSession.scheduledDate)}
                />

                <Info label="Artist" value={tattooSession.artist.displayName} />

                <Info
                  label="Agreed Price"
                  value={formatEuro(singleBooking?.agreedPriceCents)}
                />

                <Info
                  label="Paid"
                  value={formatEuro(singleBooking?.paidCents)}
                />

                <Info
                  label="Remaining"
                  value={formatEuro(singleBooking?.remainingCents)}
                />

                <Info
                  label="Payment Status"
                  value={
                    singleBooking?.fullyPaid ? "✅ Paid" : "⏳ Outstanding"
                  }
                />

                <TextBlock
                  label="Estimated Duration"
                  value={tattooSession.durationNote}
                />

                {tattooSession.notes && (
                  <TextBlock label="Notes" value={tattooSession.notes} />
                )}
              </Card>
            )}

            {/* LONG TEXT FIELDS */}
            <Card title={t("tattooDetails")}>
              <TextBlock
                label={t("placement")}
                value={singleBooking?.placement}
              />
              <TextBlock
                label={t("description")}
                value={singleBooking?.description}
              />
            </Card>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-onyx shadow-sm rounded-2xl p-5">
            <h2 className="text-lg font-medium mb-4">{t("referenceImages")}</h2>

            {uploads && uploads.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {uploads.map((img, i) => (
                    <button
                      key={img.id}
                      onClick={() => setIndex(i)}
                      className="relative w-full aspect-3/4 overflow-hidden rounded-lg border border-snow/50 shadow shadow-alabaster/20"
                    >
                      <BlurImage
                        src={img.secureUrl}
                        alt={`Reference image ${i + 1}`}
                        fill
                        preload
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </button>
                  ))}
                </div>

                {/* Lightbox */}
                <Lightbox
                  open={index >= 0}
                  close={() => setIndex(-1)}
                  slides={uploads.map((img) => ({
                    src: img.secureUrl,
                  }))}
                  plugins={[Zoom]}
                  className="cursor-zoom-in"
                />
              </>
            ) : (
              <p className="text-sm text-snow/50">{t("noImages")}</p>
            )}

            <Card title="Payment History">
              {singleBooking?.payments.length ? (
                <div className="space-y-4">
                  {singleBooking.payments.map((payment) => (
                    <div
                      key={payment.id}
                      className="rounded-xl bg-carbon-black p-4"
                    >
                      <div className="flex justify-between">
                        <h3 className="font-semibold">
                          {formatEuro(payment.grossCents)}
                        </h3>

                        <StatusBadge
                          status={payment.status}
                          styles={paymentStatusStyles}
                        />
                      </div>

                      <div className="mt-2 text-sm text-snow/60 space-y-1">
                        <p>Method: {paymentMethodMap[payment.method]}</p>
                        <p>Source: {paymentSourceMap[payment.source]}</p>
                        <p>{formattedDate(payment.paidAt)}</p>

                        {payment.note && <p>{payment.note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No payments yet.</p>
              )}
            </Card>
          </div>
        </div>
      </div>

      {isOpen && singleBooking && (
        <Modal onClose={() => setIsOpen(false)} title={t("updateStatus")}>
          <UpdateBookingStatusForm
            booking={singleBooking}
            onClose={() => setIsOpen(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default BookingDetails;

/* ---------- UI COMPONENTS ---------- */

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-onyx shadow-sm rounded-2xl p-5">
      <h2 className="text-md font-semibold mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Info({ label, value }: { label: ReactNode; value: ReactNode }) {
  return (
    <div className="flex justify-between text-sm border-b pb-1 border-snow/20">
      <span className="text-snow/50">{label}</span>
      <span className="font-medium text-right">{value || "-"}</span>
    </div>
  );
}

function TextBlock({ label, value }: { label: ReactNode; value?: ReactNode }) {
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

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-snow/10 bg-carbon-black p-4">
      <p className="text-xs uppercase tracking-wider text-snow/40 truncate">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold wrap-break-word">
        {value ?? "-"}
      </p>
    </div>
  );
}
