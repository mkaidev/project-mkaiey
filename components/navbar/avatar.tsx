import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface AvatarProps {
  authenticatedUser?: any;
}

const Avatar: React.FC<AvatarProps> = ({ authenticatedUser }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Image
            src={authenticatedUser.user.image}
            className="rounded-full border h-8 w-8"
            height={50}
            width={50}
            alt="avatar"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 space-y-1 p-2 text-gray-600">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Avatar;
