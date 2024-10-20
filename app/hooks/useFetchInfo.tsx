import { useEffect, useState } from "react";
import { Info } from "../types/types.config";

const useFetchInfo = () => {
  const [info, setInfo] = useState<Info>({
    resume_link: "",
    profile_pic: "",
    education: [],
    experience: [],
    projects: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMsg = async () => {
      try {
        const res = await fetch("/api/info", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const data: Info = await res.json();
          setInfo(data);
          setLoading(false);
        } else {
          throw new Error("There was an error loading the content")
        }
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error(error);
      }
    };
    fetchMsg();
  }, []);

  return { info: info, loading: loading, error: error }
};

export default useFetchInfo;
