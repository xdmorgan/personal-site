const fs = require('fs-extra')
const execa = require('execa')
const inquirer = require('inquirer')
const slugify = require('slugify')

const UNSPLASH_BASE_URL = 'https://unsplash.com/s/photos/'

const QUESTIONS = {
  TITLE: { type: 'input', name: 'title' }, // required
  UNSPLASH_QUERY: { type: 'input', name: 'unsplash_query', default: 'hello' }, // optional
  SLUG: { type: 'input', name: 'slug' }, // optional, generated default added inline
  FILE_NAME: { type: 'input', name: 'file_name' }, // optional, generated default added inline
  ASSET_DIR: { type: 'input', name: 'asset_dir' }, // optional, generated default added inline
  CATEGORY: { type: 'input', name: 'category', default: '' }, // optional
  TAGS: { type: 'input', name: 'tags', default: '' }, // optional
  LEDE: { type: 'input', name: 'lede', default: 'Lorem ipsum sit dolor' }, // optional
  THEME_HEADER_COLOR: {
    type: 'input',
    name: 'theme_header_color',
    default: 'rebeccapurple',
  }, // optional
  HEADER_IMAGE_SRC: {
    type: 'input',
    name: 'header_image_src',
    default: 'header.jpg',
  }, // optional, generated default added inline
  HEADER_IMAGE_ALT: { type: 'input', name: 'header_image_alt' }, // optional, generated default added inline
  HEADER_IMAGE_ATTR_TEXT: {
    type: 'input',
    name: 'header_image_attr_text',
    default: 'Photo by PERSON_NAME on Unsplash',
  }, // optional
  HEADER_IMAGE_ATTR_LINK: {
    type: 'input',
    name: 'header_image_attr_link',
    default: 'https://unsplash.com',
  }, // optional
}

async function main() {
  // grab this and use it in one way or another as the default for follow-ups
  const { title } = await inquirer.prompt([QUESTIONS.TITLE])
  // its required
  if (!title) throw new Error('Come on, we need a title')
  // convert to lower case and strip out any none word characters
  const sanitized = [...title.toLowerCase()]
    .filter((s) => /(\w|\s)/.test(s))
    .join('')
  // slugify the ttitle to use as several defaults
  const slugified = slugify(sanitized)
  // open unsplash
  const { unsplash_query } = await inquirer.prompt([QUESTIONS.UNSPLASH_QUERY])
  await execa('open', [UNSPLASH_BASE_URL + slugify(unsplash_query)])
  // second round of questions
  const results = await inquirer.prompt([
    { ...QUESTIONS.SLUG, default: slugified },
    { ...QUESTIONS.FILE_NAME, default: slugified + '.mdx' },
    { ...QUESTIONS.ASSET_DIR, default: slugified },
    QUESTIONS.CATEGORY,
    QUESTIONS.TAGS,
    QUESTIONS.LEDE,
    QUESTIONS.THEME_HEADER_COLOR,
    QUESTIONS.HEADER_IMAGE_SRC,
    { ...QUESTIONS.HEADER_IMAGE_ALT, default: unsplash_query },
    QUESTIONS.HEADER_IMAGE_ATTR_TEXT,
    QUESTIONS.HEADER_IMAGE_ATTR_LINK,
  ])

  const combined = {
    title,
    unsplash_query,
    ...results,
  }
  console.log(combined)
}

main()
