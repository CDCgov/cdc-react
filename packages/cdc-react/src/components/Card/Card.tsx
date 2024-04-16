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

export const Card = ({
  layout,
  mediaSource,
  header,
  headerTheme,
  sectionTitle,
  setMediaBanner,
  actionButtonVariation,
  actionButtonText,
  actionButtonIcon,
  actionButtonIconPosition,
  actionButtonOnClick,
  children,
  className,
}: CardProps & JSX.IntrinsicElements["div"]) => {
  const classList = ["card-content"];
  if (className) classList.push(className);
  const classes = classList.join(" ");

  return (
    <div className="cdc-react card-wrapper">
      <div className={classes}>
        {header && (
          <div className={`card-header theme-${headerTheme}`}>{header}</div>
        )}
        <div className={`card-body ${layout}`}>
          {layout === "horizontal" && !setMediaBanner && (
            <div className="card-section-title">{sectionTitle}</div>
          )}
          <div
            className={`card-section-media ${
              !setMediaBanner ? "" : "media-fill"
            }`}>
            {mediaSource && <img src={mediaSource} alt={sectionTitle} />}
          </div>
          <div className="card-body-content">
            {setMediaBanner && (
              <div className="card-section-title">{sectionTitle}</div>
            )}
            <div className="card-section-body">{children}</div>
            <div className="card-section-footer">
              <Button
                ariaLabel={actionButtonText || "action"}
                variation={actionButtonVariation}
                icon={actionButtonIcon}
                iconPosition={actionButtonIconPosition}
                onClick={actionButtonOnClick}>
                {actionButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
