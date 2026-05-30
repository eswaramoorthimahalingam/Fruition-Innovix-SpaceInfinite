import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  const isInternalLink = link.startsWith("#") || link.startsWith("/");

  return (
    <Link
      href={link}
      target={isInternalLink ? undefined : "_blank"}
      rel={isInternalLink ? undefined : "noreferrer noopener"}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001480]"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
        style={{ width: "100%", height: "auto" }}
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};
