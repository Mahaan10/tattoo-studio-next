import { ArtistWork } from "@/components/schema & types/artist/artist.types";
import Table from "@/components/ui/Table";
import Image from "next/image";

interface ArtistLookbookRowProps {
  index: number;
  onEdit: () => void;
  work: ArtistWork;
}

function ArtistLookbookRow({ work, index, onEdit }: ArtistLookbookRowProps) {
  console.log("work =>", work);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{work.title}</td>
      <td>
        <div className="relative w-10 h-10 mx-auto">
          <Image
            src={work?.coverUrl}
            alt={work.title}
            fill
            priority
            className="object-center mx-auto object-cover rounded-md border border-snow/50 grayscale"
          />
        </div>
      </td>
      <td>
        {work.tags.map((workTag, index) => (
          <span key={index} className="px-2 py-1 bg-snow/10 rounded">
            #{workTag}
          </span>
        ))}
      </td>
    </Table.Row>
  );
}

export default ArtistLookbookRow;
