import { TopStar, LeftStar, Sun } from "../../components/icons";
import { useIsMobile } from "../../hooks/use-is-mobile";

export function BackgroundDecoration() {
  const isMobile = useIsMobile();

  return (
    <>
      <TopStar
        style={{
          width: "100",
          position: "absolute",
          right: "0",
          top: "0",
          zIndex: "-999",
          filter: "drop-shadow(8px 8px 0px rgba(0, 0, 0, 0.25))",
        }}
      />

      {!isMobile && (
        <LeftStar
          style={{
            position: "absolute",
            left: "0",
            top: "8%",
            zIndex: "-999",
            width: "70",
            filter: "drop-shadow(6px 6px 0px rgba(0, 0, 0, 0.25))",
          }}
        />
      )}
      {isMobile ? (
        <Sun
          color="#F3ABCB"
          style={{
            position: "absolute",
            top: "10%",
            left: "8%",
            zIndex: "-999",
            width: "110",
            filter: "drop-shadow(0px 16px 0px rgba(0, 0, 0, 0.25))",
          }}
        />
      ) : (
        <Sun
          color="#F3ABCB"
          style={{
            position: "absolute",
            top: "20%",
            left: "13%",
            zIndex: "-999",
            width: "155",
            filter: "drop-shadow(0px 16px 0px rgba(0, 0, 0, 0.25))",
          }}
        />
      )}
    </>
  );
}

