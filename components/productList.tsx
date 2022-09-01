import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
} from "@mui/material";
import { Product } from "../services/models/product";

type ProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          variant="outlined"
          sx={{ width: "24%", marginBottom: "2%" }}
        >
          <CardMedia
            component="img"
            height="200"
            image={`/assets/img/${product.imageUrl}`}
          />
          <CardHeader title={product.name} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.price &&
                product.price.toLocaleString("de-De", {
                  style: "currency",
                  currency: "EUR",
                })}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
