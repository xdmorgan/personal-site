import React from 'react'
import cx from 'classnames'
import Image from 'gatsby-image'
import { Button } from '.'
import styles from './featured-project-section.module.scss'

export function FeaturedProjectSection({
  imageSrc,
  imageAlt,
  title,
  description,
  url,
  cta = 'View Site',
}: {
  imageSrc: any
  imageAlt: string
  title: string
  description: string
  url: string
  cta?: string
}) {
  return (
    <section>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.grid__image}>
            <Image
              fluid={imageSrc.fluid}
              alt={imageAlt}
              className="h-fill position-relative"
              style={{ zIndex: 2 }}
            />
          </div>
          <div
            className={cx(
              styles.grid__content,
              'pb-4x md:pt-8x md:pb-10x md:pr-2x lg:pt-12x lg:pr-8x lg:pb-16x'
            )}
          >
            <h2 className="my-0">
              <div className="h6 mb-2x md:mb-4x">
                Featured Project <span className="sr-only">: </span>
              </div>
              <div className="h1 mb-3x md:mb-4x">{title}</div>
            </h2>
            <p className="para mt-0 mb-3x md:mb-4x pb-1x">{description}</p>
            <Button href={url}>{cta}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
