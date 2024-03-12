import { StarDecoration, SunNote } from "../../components/Figures";

export function BackgroundDecoration() {
  return (
    <>
      <StarDecoration
        style={{
          width: "100",
          height: "136",
          position: "absolute",
          left: "95.50%",
          top: "-55",
          zIndex: "-999",
        }}
      />
      <StarDecoration
        style={{
          position: "absolute",
          left: "-2.58%",
          top: "9.11%",
          zIndex: "-999",
          width: "131",
          height: "116",
        }}
      />
      <SunNote
        style={{
          position: "absolute",
          top: "23%",
          left: "5%",
          zIndex: "-999",
          width: "165",
          height: "220",
        }}
      />
    </>
  );
}
