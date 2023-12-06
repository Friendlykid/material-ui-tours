import CssBaseline from "@mui/material/CssBaseline";
import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 10,
          },
        },
        {
          props: {
            variant: "h6",
          },
          style: {
            fontSize: 14,
          },
        },
      ],
    },
  },
});
export default function TourCard({
  id,
  image,
  name,
  duration,
  price,
  rating,
  numberOfReviews,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Link
          key={id}
          to={`/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Paper
            elevation={isHovered ? 8 : 2}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          >
            <img className="img" src={image} alt={name} />

            <Box paddingX={1}>
              <CssBaseline>
                <Typography variant="subtitle1" component="h2">
                  {name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  marginTop={3}
                >
                  <AccessTimeIcon sx={{ width: 12.5, marginRight: 1 }} />
                  <Typography variant="body2" component="p" marginLeft={0.5}>
                    {duration} Hours
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Rating
                    name="read-only"
                    value={4.5}
                    readOnly
                    precision={0.5}
                    size="small"
                  />
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ fontWeight: "bolder" }}
                    marginLeft={0.5}
                  >
                    {rating}
                  </Typography>
                  <Typography variant="body3" marginLeft={1.5}>
                    {numberOfReviews} reviews
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" component="h3" marginTop={0}>
                    From C ${price}{" "}
                  </Typography>
                </Box>
              </CssBaseline>
            </Box>
          </Paper>
        </Link>
      </ThemeProvider>
    </Grid>
  );
}

TourCard.props = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.number,
  price: PropTypes.number,
  rating: PropTypes.number,
  numberOfReviews: PropTypes.number,
};
