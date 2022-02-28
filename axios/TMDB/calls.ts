import themoviedb from "./instance";

export const getShows: Function = async (url:string, amount:number, options?:string) => {
  const response = await themoviedb.get(`${url}?api_key=${process.env.API_KEY}${options || ''}`)
  return response.data.results.slice(0, amount);
};

