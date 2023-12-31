import React from "react";
import Head from "next/head";
import Notes from "@/components/notes/Notes";

const notes = () => {
  return (
    <div>
      <Head>
        <title>React Hooks Tutorial</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Notes />
        </div>
      </main>
    </div>
  );
};

export default notes;
