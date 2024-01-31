import { MouseEventHandler } from "react";
import { ButtonIconPositionTypes, ButtonVariationsTypes } from "src/@types";
import { Button } from "../Button/Button";
import "./Card.scss";

interface CardProps {
  layout: "horizontal" | "vertical-left" | "vertical-right";
  mediaSource?: string;
  header?: string;
  headerTheme?: "default" | "dark" | "darker" | "light" | "lighter";
  sectionTitle?: string;
  setMediaBanner?: boolean; // only works for horizontal layout
  actionButtonVariation?: ButtonVariationsTypes;
  actionButtonText?: string;
  actionButtonIcon?: React.ReactNode;
  actionButtonIconPosition?: ButtonIconPositionTypes;
  actionButtonOnClick?: MouseEventHandler<HTMLDivElement> &
    MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div className="cdc-react card-wrapper">
      <div className="card-content">
        {props.header && (
          <div className={`card-header theme-${props.headerTheme}`}>
            {props.header}
          </div>
        )}
        <div className={`card-body ${props.layout}`}>
          {props.layout === "horizontal" && !props.setMediaBanner && (
            <div className="card-section-title">{props.sectionTitle}</div>
          )}
          <div
            className={`card-section-media ${
              !props.setMediaBanner ? "" : "media-fill"
            }`}>
            {props.mediaSource && (
              <img src={props.mediaSource} alt={props.sectionTitle} />
            )}
          </div>
          <div className="card-body-content">
            {props.setMediaBanner && (
              <div className="card-section-title">{props.sectionTitle}</div>
            )}
            <div className="card-section-body">{props.children}</div>
            <div className="card-section-footer">
              <Button
                ariaLabel={props.actionButtonText || "action"}
                variation={props.actionButtonVariation}
                icon={props.actionButtonIcon}
                iconPosition={props.actionButtonIconPosition}
                onClick={props.actionButtonOnClick}>
                {props.actionButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
