export const metadata = {
  title: "Login",
  description: "Created By Majo",
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),

};

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
