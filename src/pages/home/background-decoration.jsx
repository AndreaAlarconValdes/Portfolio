import {
  TopStar,
  LeftStar,
  SunNote,
  BottomStar,
} from "../../components/Figures";
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
        }}
      />

      {!isMobile && (
        <LeftStar
          style={{
            position: "absolute",
            left: "0",
            top: "8%",
            zIndex: "-999",
            width: "90",
            
          }}
        />
      )}
      {isMobile ? (
        <SunNote
          color="#F3ABCB"
          style={{
            position: "absolute",
            top: "8%",
            left: "8%",
            zIndex: "-999",
            width: "110",
            
          }}
        />
      ) : (
        <SunNote
          color="#F3ABCB"
          style={{
            position: "absolute",
            top: "20%",
            left: "13%",
            zIndex: "-999",
            width: "165",
            
          }}
        />
      )}
    </>
  );
}
/* Vector */
