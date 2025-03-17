import { ticketsPath } from "@/paths";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href={ticketsPath()} className="text-lg font-bold underline">
        Got To Tickets
      </Link>
    </div>
  );
};

export default HomePage;
