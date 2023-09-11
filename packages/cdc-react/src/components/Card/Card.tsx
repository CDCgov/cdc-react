import { ButtonIconPositionTypes, ButtonVariationsTypes } from "src/@types";
import { Button } from "../Button/Button";
import "./Card.scss";
interface CardProps {
  cardLayout: "horizontal" | "vertical-left" | "vertical-right";
  showTitleTop?: boolean;
  cardAction: string;
  cardMediaSource?: string;
  cardHeader?: string;
  cardSectionTitle?: string;
  actionButtonVariation?: ButtonVariationsTypes;
  actionButtonText?: string;
  actionButtonIcon?: React.ReactNode;
  actionButtonIconPosition?: ButtonIconPositionTypes;
  children: React.ReactNode;
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
            <div className="card-section-text">{props.children}</div>
            <div className="card-section-footer">
              <Button
                ariaLabel={props.actionButtonText || "action"}
                variation={props.actionButtonVariation}
                icon={props.actionButtonIcon}
                iconPosition={props.actionButtonIconPosition}>
                {props.actionButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
