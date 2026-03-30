import React from "react";
import "./index.scss";
import content from "../../data/content/decommissionBanner.json";


export const DecommissionBanner = () => {
  return (
    <div className="decommission-notification-container">
      <div className="gp2gp-width-container">
        <section
          className="nhsuk-card nhsuk-card--care nhsuk-card--care--non-urgent decommission-notification"
          role="region"
          aria-label="Decommission Warning"
        >
          <div className="nhsuk-card__header nhsuk-card__header--care">
            <h2 className="nhsuk-card__title nhsuk-card__title--care">
              Important
            </h2>
          </div>
          <div className="nhsuk-card__content">
            <p className="nhsuk-body nhsuk-u-margin-bottom-0">
              {content.text}
              <br />
              <a
                href="https://www.support.digitalservices.nhs.uk/csm?id=sc_cat_item&sys_id=05fe81459793be90dd80f2df9153affb&sysparm_category=7aace8fc97177a90dd80f2df9153af9b"
                className="decommission-banner-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                NHS National IT Customer Support Portal - raise a ticket
              </a>
            </p>
          </div>
        </section>
      </div>{" "}
    </div>
  );
};