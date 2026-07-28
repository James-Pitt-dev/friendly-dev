import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom website development" },
  ];
}

export default function Home() {

  const now = new Date().toISOString();
  if (typeof window === 'undefined'){
    console.log('Server Render At: ', now)
  } else {
    console.log('Client Hydration At: ', now)
  }
  
  return <>
  <>
    Homepage
  </>
  </>;
}
