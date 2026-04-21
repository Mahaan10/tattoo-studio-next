import { ArtistInfo } from "@/components/schema & types/artist/artist.types";
import useArtist from "../../artist/useArtist";
import { toast } from "react-toastify";
import Table from "@/components/ui/Table";
import Image from "next/image";
import Link from "next/link";
import { PiTrash } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";

interface TattooArtistsRowProps {
  index: number;
  onDelete: () => void;
  onEdit: () => void;
  artist: ArtistInfo;
}

function TattooArtistsRow({
  artist,
  index,
  onEdit,
  onDelete,
}: TattooArtistsRowProps) {
  //   const { toggleCategoryActive, toggleCategoryIsPending } = useArtist();

  /*   const handleActiveToggle = () => {
    toggleCategoryActive(
      {
        artistId: artist?.id,
        active: !artist?.status,
      },
      {
        onSuccess: (artist) => {
          console.log(artist);
          toast.success(
            `دسته بندی ${artist?.name} با موفقیت ${
              artist?.active === true ? "فعال شد." : "غیر فعال شد."
            }`
          );
        },
      }
    );
  }; */

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>
        <Link
          href={`/tattoo-artists/${artist?.slug}`}
          className="btn text-xs mx-auto"
        >
          {artist?.displayName}
        </Link>
      </td>
      <td>
        <Image
          src={artist?.coverUrl}
          alt={artist?.displayName}
          width={200}
          height={200}
          loading="lazy"
          quality={100}
          className="w-10 h-10 object-center mx-auto object-cover rounded-md"
        />
      </td>
      <td>
        <a href={`tel:${artist.phone}`} className="btn text-xs mx-auto">
          {artist.phone}
        </a>
      </td>
      <td>
        <a href={`email:${artist.email}`} className="btn text-xs mx-auto">
          {artist.email}
        </a>
      </td>
      <td>
        Active - Deactive
        {/* <button
          type="button"
          disabled={toggleCategoryIsPending}
          onClick={handleActiveToggle}
          className={`relative w-11 h-6 rounded-full transition-colors ${
            artist.status ? "bg-green-600" : "bg-gray-300"
          } ${toggleCategoryIsPending ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
              artist.status ? "translate-x-5" : ""
            }`}
          />
        </button> */}
      </td>
      <td>
        <a href={`instagram/${artist.handle}`} className="btn text-xs mx-auto">
          @{artist.handle}
        </a>
      </td>
      <td className="flex justify-center items-center gap-x-4">
        <button
          className="flex items-center justify-between w-24 text-xs btn"
          onClick={onEdit}
        >
          <span>Edit</span>
          <CiEdit className="size-5" />
        </button>
        <button
          className="flex items-center justify-between p-2 w-24 cursor-pointer transition-colors duration-400 ease-in-out btn text-xs"
          onClick={onDelete}
        >
          <span>Delete</span>
          <PiTrash className="size-5" />
        </button>
      </td>
    </Table.Row>
  );
}

export default TattooArtistsRow;
