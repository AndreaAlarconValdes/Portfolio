import './index.css'

import { Greetings } from "./Greetings";
import { Introduction } from "./Introduction";
import { Blob } from "../../components/Blobs";

export function Home() {
  return (
    <main className='home-root'>
      <Greetings />
      <Introduction />
      <Blob color="#d9f5ff" width="400px" />

    </main>
  );
}
