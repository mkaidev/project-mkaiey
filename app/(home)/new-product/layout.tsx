import { auth } from "@/auth";
import Navbar from "@/components/navbar/navbar";
import { getNotifications, getProductsByUserId } from "@/lib/server-actions";
import { redirect } from "next/navigation";

const NewProductLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const authenticatedUser = await auth();
  // const notifications = await getNotifications();

  // const products = await getProductsByUserId(authenticatedUser?.user?.id || "");

  if (!authenticatedUser) {
    redirect("/");
  }

  return (
    <html suppressHydrationWarning={true} lang="en">
      <body>
        <Navbar
          authenticatedUser={authenticatedUser}
          // products={products}
          // notifications={notifications}
        />

        {children}
      </body>
    </html>
  );
};

export default NewProductLayout;
