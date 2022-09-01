import Router from "next/router";
import { Header } from "../components/header";
import Head from "next/head";
import { Box, Button, Container, Typography } from "@mui/material";
import { getCookie } from "cookies-next";
import jwt, { JwtPayload } from "jsonwebtoken";
import { GetServerSideProps } from "next";

type DashboardProps = {
  userName: string;
  isAdmin: boolean;
};

export const getServerSideProps: GetServerSideProps<DashboardProps> = async ({
  req,
}) => {
  const token = getCookie("x-app-user", { req });

  if (!token) {
    return {
      redirect: {
        destination: "/login",
      },
      props: {
        userName: "",
        isAdmin: false,
      },
    };
  }

  const decoded = jwt.decode(token.toString()) as JwtPayload;

  return {
    props: {
      userName: `${decoded.data.firstName} ${decoded.data.lastName}`,
      isAdmin: decoded.data.isAdmin,
    },
  };
};

const Page = ({ userName, isAdmin }: DashboardProps) => {
  const logout = async () => {
    await fetch("/api/auth/logout");
    Router.reload();
  };

  return (
    <>
      <Head>
        <title>Dashboard - MAS</title>
        <meta name="description" content="My amazing store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <Typography variant="h2">Restricted Area</Typography>
        <Typography variant="h4">Welcome {userName}!</Typography>
        {isAdmin && (
          <Box>
            <iframe
              src="https://giphy.com/embed/3o84sq21TxDH6PyYms"
              width="480"
              height="208"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Box>
        )}
        <Button onClick={logout} variant="contained">
          logout
        </Button>
      </Container>
    </>
  );
};

export default Page;
