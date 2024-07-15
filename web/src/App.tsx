import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import MainCard from "./components/mainCard";
import { useMainStore } from "./store/main";
import { JSONResponse } from "./types/api";
import { HomeResponse } from "./types/response_types";

function App() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const response = await axios.get<JSONResponse<HomeResponse>>(
        "http://localhost:8080/"
      );
      return response.data.content!.home;
    },
  });

  const { count } = useMainStore();

  if (isPending) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error: {error}</>;
  }

  return (
    <MainCard>
      {data} : {count}
    </MainCard>
  );
}

export default App;
