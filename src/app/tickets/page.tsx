import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h1>{ticket.title}</h1>
          <Link
            href={ticketPath(String(ticket.id))}
            className="text-sm underline"
          >
            View Ticket
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
