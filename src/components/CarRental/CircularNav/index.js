import { useNavigate } from "react-router-dom";
import { LocalActivitySharp } from "@material-ui/icons";
import { DirectionsCar } from "@material-ui/icons";
import MapIcon from "@material-ui/icons/Map";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import "./style.css";

export const CircularNav = () => {
  const navigate = useNavigate();
  return (
    <div
      className="circular-nav"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "20px",
        top: "50%",
        left: "20px",
        position: "fixed",
      }}
    >
      <CircleMenu
        startAngle={-45}
        rotationAngle={180}
        itemSize={2}
        radius={4}
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => navigate("/cars")}
          tooltip="Rental Cars"
          tooltipPlacement={TooltipPlacement.Right}
        >
          <DirectionsCar />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => navigate("/activities")}
          tooltip="Activities"
          tooltipPlacement={TooltipPlacement.Right}
        >
          <LocalActivitySharp />
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
};
