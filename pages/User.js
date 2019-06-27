import React from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

import withAnalytics from "../src/hocs/withAnalytics";

// import { Container } from './styles';

const User = ({ users }) => (
  <div>
    <Head>
      <title>Usuário</title>
    </Head>
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.login}
          <Link href={`/user/${user.login}`}>
            <a>Acessar</a>
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </div>
);

export default User;

User.getInitialProps = async () => {
  const response = await axios.get(
    "http://api.github.com/orgs/rocketseat/members"
  );

  console.log("resp", response.data);

  return { users: response.data };
};
