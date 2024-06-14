import { auth } from "@/auth";
import { getProductsByUserId, isUserPremium } from "@/lib/server-actions";
import { redirect } from "next/navigation";

const NewProductLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const authenticatedUser = await auth();
  const isPremium = await isUserPremium();
  const products = await getProductsByUserId(authenticatedUser?.user?.id || "");

  if (!isPremium && products.length === 2) {
    redirect("/");
  }

  if (!authenticatedUser) {
    redirect("/");
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default NewProductLayout;
