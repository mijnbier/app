import { useContext } from "react";

import { SnackBarContext } from "../Contexts/SnackBarProvider";

const useSnackBars = () => useContext(SnackBarContext);

export default useSnackBars;
