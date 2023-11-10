import celebrityAPI from "@/api/celebrityAPI";
import API from "@/constants/API.js";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

function useSimpleCelebInfoQuery() {
  return useQuery(
    [API.CELEBRITY.LIST],
    async () => {
      return await celebrityAPI.getSimpleCelebInfoList({});
    },
    {
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    },
  );
}

export default useSimpleCelebInfoQuery;
