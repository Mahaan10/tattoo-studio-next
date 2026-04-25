import { ArtistWork } from "@/components/schema & types/artist/artist.types";
import Table from "@/components/ui/Table";
import Image from "next/image";



interface ArtistLookbookRowProps {
  index: number;
  onEdit: () => void;
  work: ArtistWork;
}

function ArtistLookbookRow({ work, index, onEdit }: ArtistLookbookRowProps) {
console.log("work =>", work)
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>
        {work.title}
      </td>
      <td>
        <Image
          src={work?.coverUrl}
          alt={work.title}
          width={200}
          height={200}
          loading="lazy"
          quality={100}
          className="w-10 h-10 object-center mx-auto object-cover rounded-md border border-snow/50 grayscale"
        />
      </td>
      <td>
        {work.tags.map((workTag, index) => (
            <span key={index}>{workTag}</span>
        ))}
      </td>
    </Table.Row>
  );
}

export default ArtistLookbookRow;
