import { TopStar, LeftStar, SunNote, BottomStar } from "../../components/Figures";
import { useIsMobile } from "../../hooks/use-is-mobile";

export function BackgroundDecoration() {
  const isMobile = useIsMobile();

  return (
    <>
        <TopStar
          style={{
            width: "100",
            height: "136",
            position: "absolute",
            right: "0",
            top: "0",
            zIndex: "-999",
          }}
        />
     
      {!isMobile && (
        <LeftStar
          style={{
            position: "absolute",
            left: "0",
            top: "8%",
            zIndex: "-999",
            width: "130",
            height: "115",
          }}
        />
      )}
      {isMobile ? (
        <SunNote
          style={{
            position: "absolute",
            top: "8%",
            left: "8%",
            zIndex: "-999",
            width: "110",
            height: "220",
          }}
        />
      ) : (
        <SunNote
          style={{
            position: "absolute",
            top: "20%",
            left: "13%",
            zIndex: "-999",
            width: "165",
            height: "220",
          }}
        />
      )}

    </>
  );
}
/* Vector */

