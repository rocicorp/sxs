import { nanoid } from "nanoid";

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const r = nanoid();
  const { url } = context.query;
  if (typeof url != "string") {
    throw new Error("invalid value for url querystring param");
  }
  const replaced = url.replace(/\$r/g, r);
  return {
    props: {
      url: replaced,
    },
  };
};

export default function Home({ url }: { url: string }) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <iframe
        style={{
          display: "flex",
          border: 0,
          flex: 1,
        }}
        src={url}
      />
      <div style={{ width: "2%" }}></div>
      <iframe
        style={{
          display: "flex",
          border: 0,
          flex: 1,
        }}
        src={url}
      />
    </div>
  );
}
