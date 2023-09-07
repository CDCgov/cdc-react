import { Button } from "../Button/Button";
import "./Card.scss";

interface CardProps {
  cardLayout: "horizontal" | "vertical-left" | "vertical-right";
  showTitleTop?: boolean; // only works for horizontal layout
  cardSectionText?: string;
  cardAction: string; // cannot be optional according to the design system
  cardMediaSource?: string;
  cardHeader?: string;
  cardSectionTitle?: string;
}

export const Card = (props: CardProps) => {
  return (
    <div className="card-wrapper">
      <div className="card-content">
        {props.cardHeader && (
          <div className="card-header">{props.cardHeader}</div>
        )}
        <div className={`card-body ${props.cardLayout}`}>
          {props.cardLayout === "horizontal" && props.showTitleTop && (
            <div className="card-section-title">{props.cardSectionTitle}</div>
          )}

          <div
            className={`card-section-media ${
              props.showTitleTop ? "" : "media-fill"
            }`}>
            {props.cardMediaSource && (
              <img src={props.cardMediaSource} alt={props.cardSectionTitle} />
            )}
          </div>

          <div className="card-body-content">
            {!props.showTitleTop && (
              <div className="card-section-title">{props.cardSectionTitle}</div>
            )}
            <div className="card-section-text">
              <span>{props.cardSectionText}</span>
            </div>
            <div className="card-section-footer">
              <Button ariaLabel="action">Action</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
