import Head from "next/head";
import React from "react";

export const Seo = ({
  title,
  description,
  url,
  shareImg,
  //   preventIndexing,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="descriptions" content={description} key="descriptions" />
      <meta property="og:url" content={`https://www.lacabinagt.com${url}`} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      {/* <meta property="og:imge" content={shareImg} key="og:image" /> */}
      <link rel="canonical" href={`https://www.lacabinagt.com${url}`} />
    </Head>
  );
};
