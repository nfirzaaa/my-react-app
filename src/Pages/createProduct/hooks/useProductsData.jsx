import { useCallback } from "react";
import { useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

export const useGetProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      const res = await api.getProducts();
      console.log({ res });
      setData(res.data);
    } catch (err) {
      console.log({ err });
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
      message.open({
        type: "success",
        content: `Berhasil fetch data!`,
      });
    }
  }, []);

  return [isLoading, data, getData];
};
