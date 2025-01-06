import Footer from "./footer";

import FrontPage from "./frontpage";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div>
        <FrontPage>{children}</FrontPage>
      </div>
    </>
  );
}
