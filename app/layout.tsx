import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Docs",
};

const banner = (
  <Banner storageKey="some-key">Beta</Banner>
);
const navbar = (
  <Navbar
    logo={<b>Mohanad</b>}
    logoLink={"https://docs.mohanad.cc"}
    projectLink="https://github.com/mohanad8t"
    chatLink="https://discord.gg/"
  />
);
const footer = (
  <Footer>Docs {new Date().getFullYear()} © Mohanad.</Footer>
);

const search = <Search placeholder="Search documentation.."></Search>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          docsRepositoryBase="https://github.com/mohanad8t/docs"
          footer={footer}
          search={search}
          editLink={null}
          feedback={{ content: null }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
