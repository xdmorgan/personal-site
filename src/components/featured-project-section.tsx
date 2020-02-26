import React from 'react'
import cx from 'classnames'
import { Button } from '.'
import styles from './featured-project-section.module.scss'

export function FeaturedProjectSection() {
  return (
    <section>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.grid__image}>
            <div
              className="bg-eucalyptus position-relative md:h-fill"
              style={{ zIndex: 2 }}
            />
          </div>
          <div
            className={cx(
              styles.grid__content,
              'py-4x md:pt-8x md:pb-10x md:pr-2x lg:pt-12x lg:pr-8x lg:pb-16x'
            )}
          >
            <h2 className="my-0">
              <div className="h6 mb-2x md:mb-4x">
                Featured Project <span className="sr-only">: </span>
              </div>
              <div className="h1 mb-3x md:mb-4x">
                Design For Business Impact
              </div>
            </h2>
            <p className="para mt-0 mb-3x md:mb-4x pb-1x">
              The Gatsby, Contentful, and Netlify JAMstack triumvirate powers
              this, my second project for Designer Fund. The site was
              highlighted on Muz.li and integrates with Mailchimp via Netlify
              Functions.
            </p>
            <Button to="//designerfund.com/business-impact">View Site</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
