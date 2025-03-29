import { LucideCircleAlert } from "lucide-react";
import { cloneElement, ReactElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: ReactElement<{ className: string }>; // Specify the type of the icon prop
  button?: React.ReactNode;
};

const Placeholder = ({
  label,
  icon = <LucideCircleAlert />,
  button = null,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 sefl-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, { className: "w-16 h-16 text-muted-foreground" })}
      <h2 className="text-lg text-center">{label}</h2>
      {button}
    </div>
  );
};

export { Placeholder };
