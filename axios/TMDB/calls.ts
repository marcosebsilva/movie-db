import themoviedb from "./instance";

export const getMoviesByUrl: Function = async (url:string, amount:number) => {
  const response = await themoviedb.get(`${url}?api_key=${process.env.API_KEY}`)
  return response.data.results.slice(0, amount);
};
