import Link from "next/link";

const Submit = () => {
  return (
    <div>
      <Link href={"/new-product"} className="text-[#38d7ff]">
        Submit
      </Link>
    </div>
  );
};

export default Submit;
