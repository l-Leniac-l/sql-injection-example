import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { GetServerSideProps, NextPage } from "next";
import { Header } from "../components/header";
import { ProductList } from "../components/productList";
import { mapProducts, MysqlProduct } from "../services/mappers/mapProduct";
import { Product } from "../services/models/product";
import { executeQuery } from "../utils/db";

type ProductsPageProps = {
  products: Product[];
  category: string;
  error?: {
    code: string;
  };
};

export const getServerSideProps: GetServerSideProps<ProductsPageProps> = async (
  ctx
) => {
  const { category } = ctx.query;

  if (!category) {
    return {
      redirect: {
        statusCode: 307,
        destination: "/products?category=1",
      },
    };
  }

  const query = `SELECT 
  p.id, p.name, p.image_url, p.price,
  c.id as category_id, c.name as category_name
  FROM products p
  LEFT JOIN categories c
  ON p.category_id = c.id
  WHERE p.category_id='${category}' AND p.available=1 
  `;

  const result = await executeQuery<MysqlProduct[]>({ query });

  if ("error" in result) {
    return {
      props: {
        products: [],
        category: "",
        error: JSON.parse(JSON.stringify(result.error)),
      },
    };
  }

  const category_name = result.length ? result[0].category_name : null;

  if (!category_name) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category: category_name,
      products: mapProducts(result),
    },
  };
};

const ProductsPage: NextPage<ProductsPageProps> = ({
  category,
  products,
  error,
}) => {
  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <>
          <Typography variant="h2">{category}</Typography>
          <ProductList products={products} />
          {error && (
            <Typography variant="caption" color="red">
              {error.code}
            </Typography>
          )}
        </>
      </Container>
    </>
  );
};

export default ProductsPage;
