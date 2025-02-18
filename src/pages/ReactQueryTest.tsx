import { useQuery } from "@tanstack/react-query";

export function ReactQueryTest() {
  const { isPending, error, isFetching, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/repos/TanStack/query');
      const data = await response.json();
      console.log(data);
      return data;
    }
  })
  
  if (isPending) return <p>Loading...</p>;
  if (error) return <p>{`Error! An error has occured: ${error}`}</p>

  return (
    <div>
      <h1>Default branch: {data.default_branch}</h1>
      <p><strong>Forks: </strong>{data.forks_count}</p>
      <p><strong>Subscribers: </strong>{data.subscribers_count}</p>


      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  );
}