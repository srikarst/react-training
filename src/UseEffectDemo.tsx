import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function UseEffectDemo() {
  const [page, setPage] = useState("1");
  const [data, setData] = useState("");
  const isMountedRef = useRef(false);
  const [someNumber, setSomeNumber] = useState(0);
  useEffect(() => {
    let source = axios.CancelToken.source();
    axios(`https://reqres.in/api/users?page=${page}`, {
      cancelToken: source.token,
    })
      .then((json) => {
        isMountedRef.current = true;
        if (isMountedRef.current) setSomeNumber((someNumber) => someNumber + 1);
        if (isMountedRef.current) setData(JSON.stringify(json.data));
      })
      .catch((json) => {
        if (isMountedRef.current) setData("Error while fetching data.");
      });
    return () => {
      isMountedRef.current = false;
      source.cancel();
    };
  }, [page]);

  return (
    <div>
      <input
        type={"number"}
        value={page}
        onChange={(e) => setPage(e.target.value)}
      />
      {data}
      {someNumber}
    </div>
  );
}
