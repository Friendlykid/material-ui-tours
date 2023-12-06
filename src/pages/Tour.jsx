import { Box, Container, Typography } from "@mui/material";
import ImageCollage from "../components/ImageCollage.jsx";
import Accordions from "../components/Accordions.jsx";
import FixedBottomNavigation from "../components/FixedBottomNavigation.jsx";
import { useParams } from "react-router-dom";
import { data } from "../data.js";

export default function Tour() {
  const { id } = useParams();
  const tour = data[0].tours
    .concat(data[1].tours)
    .find((tour) => JSON.stringify(tour.id) === id);

  if (!tour) {
    return (
      <Container>
        <Typography variant="h4" sx={{ textAlign: "center", marginTop: 10 }}>
          Tour not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        {tour.name}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src={tour.image} alt="las vegas" height={325} width={500} />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          architecto consequatur consequuntur est impedit molestias natus nemo
          odit perferendis tempore. Animi beatae cumque distinctio enim eos
          exercitationem expedita ipsam ipsum molestiae nam, nisi officiis
          perspiciatis suscipit ullam ut, vero voluptatibus!
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <Accordions
          name={tour.name}
          numberOfReviews={tour.numberOfReviews}
          duration={tour.duration}
          rating={tour.rating}
          price={tour.price}
        />
      </Box>
      <FixedBottomNavigation />
    </Container>
  );
}
