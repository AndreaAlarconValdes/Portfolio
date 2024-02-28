import { Title } from "../../components/Title";
import { WaveFooter } from "../../components/Blobs";

export function Introduction (){
    return (
      <section className="intro-container">
        <Title color="#D0AAD1">
        <h3>
          LET ME <span className="yellow"> INTRODUCE </span> MYSELF
        </h3>
      </Title>
      <WaveFooter color='#d9f5ff'/>
      </section>
    )
}