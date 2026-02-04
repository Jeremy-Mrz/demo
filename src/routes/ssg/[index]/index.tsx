import { component$ } from "@qwik.dev/core";
import { Link, useLocation } from "@qwik.dev/router";
import { dynamicIds } from "~/routes";

export default component$(() => {
  const location = useLocation();
  const index = location.params['index'];
  return (
    <>
      <h1>SSG dynamic route component</h1>
      <p>Index: {index}</p>
      <Link href="/">Home</Link>
    </>
  )
})

export const onStaticGenerate = async () => ({
  params: Object.keys(dynamicIds).map((id) => ({ id })),
});