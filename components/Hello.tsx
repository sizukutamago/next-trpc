import { trpc } from "../utils/trpc";

const Hello = () => {
  const hello = trpc.greeting.hello.useQuery({ text: "client" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
};

export default Hello;
