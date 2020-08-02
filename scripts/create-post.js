const path = require('path')
const fs = require('fs-extra')
const execa = require('execa')
const inquirer = require('inquirer')
const slugify = require('slugify')

const UNSPLASH_BASE_URL = 'https://unsplash.com/s/photos/'
const LOCAL_BLOG_BASE_URL = 'http://localhost:8000/blog/'
const [NOW_DATE] = new Date().toISOString().split('T')
const DEST_DIR = path.join(__dirname, '../src/content/posts')

const INITIAL_CONTENTS = {
  Blank: ``,
  Roundup: `
Into blurb

## Top Highlight

![A static future](./weekly-roundup-2020-04-18/a-static-future.jpg)

Highlight block description

## Articles

- **[Link](#everything):** Synopsis

## Releases

- **[Link](#everything):** Synopsis

## Sources

- **[Link](#everything):** Source name

<highlight>

**Thanks for reading!** For future updates, get the latest by subscribing my blog's RSS feed or hmu on Twitter (links in footer). If you find a problem, feel free to open up a PR or create an issue on GitHub (link in sidebar).

</highlight>
`,
}

const QUESTIONS = {
  title: { type: 'input', name: 'title' }, // required
  unsplash_query: { type: 'input', name: 'unsplash_query', default: 'hello' }, // optional
  slug: { type: 'input', name: 'slug' }, // optional, generated default added inline
  file_name: { type: 'input', name: 'file_name' }, // optional, generated default added inline
  asset_dir: { type: 'input', name: 'asset_dir' }, // optional, generated default added inline
  publish_date: { type: 'input', name: 'publish_date', default: NOW_DATE }, // optional
  publish_status: { type: 'input', name: 'publish_status', default: 'draft' }, // optional
  category: {
    type: 'list',
    name: 'category',
    choices: ['Tutorials', 'Resources', 'Roundups', 'Other'],
  },
  tags: { type: 'input', name: 'tags', default: '' }, // optional
  lede: { type: 'input', name: 'lede', default: 'Lorem ipsum sit dolor' }, // optional
  theme_header_color: {
    type: 'input',
    name: 'theme_header_color',
    default: 'rebeccapurple',
  }, // optional
  header_image_src: {
    type: 'input',
    name: 'header_image_src',
    default: 'header.jpg',
  }, // optional, generated default added inline
  header_image_alt: { type: 'input', name: 'header_image_alt' }, // optional, generated default added inline
  header_image_attr_text: {
    type: 'input',
    name: 'header_image_attr_text',
    default: 'Photo by PERSON_NAME on Unsplash',
  }, // optional
  header_image_attr_link: {
    type: 'input',
    name: 'header_image_attr_link',
    default: 'https://unsplash.com',
  }, // optional
  initial_content: {
    type: 'list',
    name: 'initial_content',
    choices: Object.keys(INITIAL_CONTENTS),
  },
}

const getTemplateFrontmatter = (data) => `---
title: '${data.title}'
date: ${data.publish_date}
category: '${data.category}'
status: '${data.publish_status}'
tags: '${data.tags}'
lede: '${data.lede}'
theme:
  header: '${data.theme_header_color}'
image:
  src: './${data.asset_dir}/${data.header_image_src}'
  alt: '${data.header_image_alt}'
  attribution:
    text: '${data.header_image_attr_text}'
    link: '${data.header_image_attr_link}'
---`

const getTemplateContent = ({ initial_content }) =>
  INITIAL_CONTENTS[initial_content]

async function main() {
  // grab this and use it in one way or another as the default for follow-ups
  const { title } = await inquirer.prompt([QUESTIONS.title])
  // its required
  if (!title) throw new Error('Come on, we need a title')
  // convert to lower case and strip out any none word characters
  const sanitized = [...title.toLowerCase()]
    .filter((s) => /(\w|\s)/.test(s))
    .join('')
  // slugify the ttitle to use as several defaults
  const slugified = slugify(sanitized)
  // open unsplash
  const { unsplash_query } = await inquirer.prompt([QUESTIONS.unsplash_query])
  await execa('open', [UNSPLASH_BASE_URL + slugify(unsplash_query)])
  // second round of questions
  const { slug } = await inquirer.prompt([
    { ...QUESTIONS.slug, default: slugified },
  ])
  // ask remainder of questions
  const results = await inquirer.prompt([
    { ...QUESTIONS.file_name, default: slug + '.mdx' },
    { ...QUESTIONS.asset_dir, default: slug },
    QUESTIONS.publish_date,
    QUESTIONS.publish_status,
    QUESTIONS.category,
    QUESTIONS.tags,
    QUESTIONS.lede,
    QUESTIONS.theme_header_color,
    QUESTIONS.header_image_src,
    { ...QUESTIONS.header_image_alt, default: unsplash_query },
    QUESTIONS.header_image_attr_text,
    QUESTIONS.header_image_attr_link,
    QUESTIONS.initial_content,
  ])
  // recombine into an object with keys that match QUESTIONS
  const answers = {
    title,
    unsplash_query,
    ...results,
  }
  // get content sections with combined answers
  const sections = [
    getTemplateFrontmatter(answers),
    getTemplateContent(answers),
  ]
  // write post mdx file
  await fs.writeFile(
    path.join(DEST_DIR, answers.file_name),
    sections.join('\n')
  )
  await fs.ensureDir(path.join(DEST_DIR, answers.asset_dir))
  // this kinda sucks but it prevents an undefined childImageSharp error
  // otherwise, you'd need to pick, optimize, and save the unsplash image
  // before continuing. Might be cool to answer the image question with
  // a URL then do all that automatically (plus attribution) :thinking_face:
  await fs.copyFile(
    path.join(DEST_DIR, 'mailchimp-api-interests/header.jpg'),
    path.join(DEST_DIR, answers.asset_dir, answers.header_image_src)
  )
  // open browser to newly created post
  await execa('open', [LOCAL_BLOG_BASE_URL + answers.slug])
}

main()
