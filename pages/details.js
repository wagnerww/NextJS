import React from "react";
import axios from "axios";

// import { Container } from './styles';

const Details = ({ user }) => (
  <div>
    <h1>{user.login}</h1>
    <img src={user.avatar_url} width="100" />
  </div>
);

Details.getInitialProps = async ({ query }) => {
  const response = await axios.get(`http://api.github.com/users/${query.user}`);
  return { user: response.data };
};

export default Details;
