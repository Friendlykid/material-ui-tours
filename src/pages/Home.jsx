import { data } from "../data.js";
import { Container, Grid, Typography } from "@mui/material";
import TourCard from "../components/TourCard.jsx";
import PropTypes from "prop-types";

export default function Home({ foundTours }) {
  if (foundTours.length === 0) {
    return (
      <Container>
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          marginTop="20vh"
        >
          {" "}
          No Tours were found :(
        </Typography>
      </Container>
    );
  }
  return (
    <>
      {data.map((location) => {
        return (
          <Container sx={{ marginTop: "10px" }} key={location.id}>
            <Typography variant="h3" marginBottom={3}>
              {location.name}
            </Typography>
            <Grid container spacing={3}>
              {location.tours.map(
                (tour) =>
                  foundTours.find(
                    (searchedTour) => searchedTour.id === tour.id,
                  ) && <TourCard {...tour} key={tour.id} />,
              )}
            </Grid>
          </Container>
        );
      })}
    </>
  );
}
Home.props = {
  foundTours: PropTypes.array,
};
