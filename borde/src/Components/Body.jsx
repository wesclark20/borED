import Events from "./Events";
import Stack from "react-bootstrap/Stack";

function Body() {
  return (
    <Stack gap={4} className="col-md-9 mx-auto">
      <Events />
    </Stack>
  );
}

export default Body;
