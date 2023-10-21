import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import fundAPI from "@/api/fundAPI.js";

function useGetInfiniteFundInfoQuery({ keyword, sortType }) {
  return useInfiniteQuery(
    [API.FUND.GET_LIST, keyword, sortType],
    async ({ pageParam = 0 }) => {
      return fundAPI.getFundInfoList({
        pageIndex: pageParam,
        keyword: keyword,
        sortType: sortType,
      });
    },
    {
      getNextPageParam: lastPage => {
        return lastPage.config.params.pageIndex + 1;
      },
    },
  );
}

export default useGetInfiniteFundInfoQuery;
