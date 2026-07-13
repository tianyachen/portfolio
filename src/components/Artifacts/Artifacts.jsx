import React, { useState } from "react";
import artifacts from "../../data/artifacts.json";
import styles from "./Artifacts.module.css";

const Artifacts = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className={styles.container} id="artifacts">
      <h2 className={styles.title}>Artifacts</h2>
      <p className={styles.subtitle}>
        A curated collection of structured technical documents, blueprints, and
        systems design artifacts.
      </p>

      <div className={styles.artifactsList}>
        {artifacts.map((artifact, index) => {
          const isExpanded = !!expandedCards[index];
          return (
            <div
              key={index}
              className={`${styles.artifactCard} ${isExpanded ? styles.expanded : ""}`}
            >
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.titleWrapper}>
                  <a
                    href="https://tianyachatbot.pythonanywhere.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.artifactTitleLink}
                    title="View Original Document"
                  >
                    {artifact.title} <span className={styles.linkIcon}>↗</span>
                  </a>
                  <p className={styles.introduction}>{artifact.introduction}</p>
                </div>
                <div className={styles.tools}>
                  {artifact.tools.map((tool, idx) => (
                    <span key={idx} className={styles.toolBadge}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Main short description (Always visible) */}
              <p className={styles.shortDescription}>{artifact.description}</p>

              {/* Expandable Section */}
              <div
                className={`${styles.expandedContent} ${isExpanded ? styles.show : ""}`}
              >
                <div className={styles.gridContainer}>
                  {/* Strategic Scope Section */}
                  <div className={styles.infoSection}>
                    <h4 className={styles.sectionHeading}>Strategic Scope</h4>

                    <div className={styles.dataField}>
                      <span className={styles.fieldLabel}>Objective</span>
                      <p className={styles.fieldText}>{artifact.objective}</p>
                    </div>

                    <div className={styles.dataField}>
                      <span className={styles.fieldLabel}>
                        Process & Methodology
                      </span>
                      <p className={styles.fieldText}>{artifact.process}</p>
                    </div>
                  </div>

                  {/* Impact & Alignment Section */}
                  <div className={styles.infoSection}>
                    <h4 className={styles.sectionHeading}>
                      Impact & Alignment
                    </h4>

                    <div className={styles.dataField}>
                      <span className={styles.fieldLabel}>
                        Value Proposition
                      </span>
                      <p className={styles.fieldText}>
                        {artifact.valueProposition}
                      </p>
                    </div>

                    <div className={styles.dataField}>
                      <span className={styles.fieldLabel}>Unique Value</span>
                      <p className={styles.fieldText}>{artifact.uniqueValue}</p>
                    </div>

                    <div className={styles.dataField}>
                      <span className={styles.fieldLabel}>
                        Professional Relevance
                      </span>
                      <p className={styles.fieldText}>{artifact.relevance}</p>
                    </div>
                  </div>
                </div>

                {/* References (Full Width at Bottom of expanded section) */}
                {artifact.references && (
                  <div className={styles.referencesSection}>
                    <span className={styles.fieldLabel}>
                      References & Standards
                    </span>
                    <p className={styles.referencesText}>
                      {artifact.references}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Toggle Button */}
              <button
                className={styles.toggleButton}
                onClick={() => toggleExpand(index)}
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <>
                    <span>Hide Details</span>
                    <span className={styles.arrowIcon}>▲</span>
                  </>
                ) : (
                  <>
                    <span>View Case Details</span>
                    <span className={styles.arrowIcon}>▼</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Artifacts;
