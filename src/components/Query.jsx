import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};
const Query = () => {
  let query = useQuery();
  return (
    <div className="details">{`Employee ${query.get("id")} named ${query.get(
      "name"
    )} works as ${query.get("designation")}`}</div>
  );
};

export default Query;
