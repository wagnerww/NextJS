import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import withAnalytics from "../src/hocs/withAnalytics";

const Title = styled.h1`
  font-size: 1.2em;
  color: #069;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/logo.jpg" alt="" width="100" />
    <Title>Home</Title>
    <Link href="/user">
      <a>Usuários</a>
    </Link>
  </div>
);

export default Home;
