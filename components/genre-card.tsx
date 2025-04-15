
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface GenreCardProps {
  title: string;
  image: string;
  bookCount: number;
  slug: string;
}

const GenreCard = ({ title, image, bookCount, slug }: GenreCardProps) => {
  return (
    <Link href={`/genre/${slug}`}>
      <Card className="overflow-hidden h-full group">
        <div className="relative h-64">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-white font-serif text-xl font-medium mb-1">{title}</h3>
            <p className="text-white/75 text-sm">{bookCount} Books</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default GenreCard;