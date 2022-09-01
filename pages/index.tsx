import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  Container,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Amazing Store</title>
        <meta name="description" content="My amazing store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <main>
          <Typography variant="h2">AmazingStore.com</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <Link href="/products?category=1">
              <Card
                variant="outlined"
                sx={{
                  width: "24%",
                  marginBottom: "2%",
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="/assets/img/161396-laptops-review-hands-on-macbook-air-review-image1-v2jzcb3rqd.jpg"
                />
                <CardHeader title="Electronics" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    The best Electronics for the best prices!
                  </Typography>
                </CardContent>
              </Card>
            </Link>
            <Link href="/products?category=2">
              <Card
                variant="outlined"
                sx={{ width: "24%", marginBottom: "2%", cursor: "pointer" }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="/assets/img/3382916_Sessel-TOM-Lederlook-Schoko_xxl.jpg"
                />
                <CardHeader title="Furniture" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    The best Furniture for the best prices!
                  </Typography>
                </CardContent>
              </Card>
            </Link>
            <Link href="/products?category=3">
              <Card
                variant="outlined"
                sx={{ width: "24%", marginBottom: "2%", cursor: "pointer" }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="/assets/img/8004207_3.jpg"
                />
                <CardHeader title="Rubik's Cubes" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    The best Rubik&apos;s Cubes for the best prices!
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Box>
        </main>
      </Container>
    </>
  );
};

export default Home;
