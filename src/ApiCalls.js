export const fetchData = () => {
  return fetch("https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json")
      .then(res => res.json())
      .catch(err => err);
}
