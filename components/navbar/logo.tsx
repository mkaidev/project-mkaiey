import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="md:hidden">
        <Image
          src={"/logo/small-logo.png"}
          alt="logo"
          width={40}
          height={40}
          className="p-1"
          priority
        />
      </Link>

      <Link href={"/"} className="hidden md:block">
        <Image
          src={"/logo/logo.png"}
          alt="logo"
          width={100}
          height={100}
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
    </div>
  );
};

export default Logo;
