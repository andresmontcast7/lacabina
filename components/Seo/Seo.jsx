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
      <meta property="og:url" content={`https://strapi-production-935c.up.railway.app${url}`} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      {/* <meta property="og:imge" content={shareImg} key="og:image" /> */}
      <link rel="canonical" href={`https://strapi-production-935c.up.railway.app${url}`} />
      {/* {preventIndexing && (
        <>
          <meta name="robots" content='noindex'/>
          <meta name="googlebot" content="noindex" key="descriptions" />
        </>
      )}  */}
    </Head>
  );
};
