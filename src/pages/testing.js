import React from "react";
import Head from "next/head";
import Test from "@/components/testing/Test";

const testing = () => {
  return (
    <div>
      <Head>
        <title>Practice Components</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div>
            Practice: useState | useEffect | <strong>useContext</strong> |
            useReducer
          </div>
          <Test />
        </div>
      </main>
    </div>
  );
};

export default testing;