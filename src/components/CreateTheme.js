import { createTheme } from "@material-ui/core";
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const dangerColor = "#ff006e";
const successColor = "#0dc952";
export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
      red: `${dangerColor}`,
      green: `${successColor}`,
    },
  },
});
