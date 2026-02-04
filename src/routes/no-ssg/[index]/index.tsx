import { component$ } from "@qwik.dev/core";
import { Link } from "@qwik.dev/router";
import { useLocation } from "@qwik.dev/router";

export default component$(() => {
  const location = useLocation();
  const index = location.params['index'];
  return (
    <>
      <h1>No SSG dynamic route component</h1>
      <p>Index: {index}</p>
      <Link href="/">Home</Link>
    </>
  )
})