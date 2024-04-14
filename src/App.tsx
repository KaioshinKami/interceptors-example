import * as axios from "axios";
import {useEffect} from "react";

function App() {

  useEffect(() => {
    const axiosInst = axios.create();


    axiosInst.interceptors.request.use((config) => {

      return config;
    }, (e) => {
      return Promise.reject(e);
    });

    axiosInst.interceptors.response.use((response) => {

      return response;
    }, (e) => {
      return Promise.reject(e);
    });

    fetchDataEpisode(axiosInst);

    return () => {
      axiosInst.interceptors.request.eject();
      axiosInst.interceptors.response.eject();
    };
  }, []);

  const fetchDataEpisode = async (axiosInst) => {
    try {
      const response = await axiosInst.get('https://rickandmortyapi.com/api/episode')
      setEpisodes(response.data.results)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
    </>
  )
}

export default App
