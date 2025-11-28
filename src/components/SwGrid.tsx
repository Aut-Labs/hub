import { Container, Grid } from "@mui/material";
import { pxToRem } from "@utils/text-size";

const SwGrid = ({ left, right, maxWidth = "lg" }) => {
  return (
    <Container
      maxWidth={maxWidth as any}
      sx={{ width: "100%", flexGrow: 1, boxSizing: "border-box" }}
    >
      <Grid
        container
        justifyContent="space-between"
        rowSpacing={1}
        sx={{ gridGap: pxToRem(20), height: "100%" }}
      >
        <Grid
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1
          }}
        >
          {left}
        </Grid>
        <Grid
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1
          }}
        >
          {right}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SwGrid;
