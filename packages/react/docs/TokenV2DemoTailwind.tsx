/* lint runs before build so json does not exist */

import { useState } from 'react'
import { Button, Icon } from '@charcoal-ui/react'

const categories = ['Illustration', 'Comic', 'Novel', '3D', 'Shopping']
const artworks = Array.from({ length: 3 }, (_, id) => ({
  id,
  title: 'Title',
  thumbnail: `https://loremflickr.com/150/100/animals?random=${id}`,
  description: 'Description',
}))

export default function TokenV2Tailwind() {
  const [selected, setSelected] = useState(categories[0])
  return (
    <section className="grid max-w-fit gap-[24px]">
      <nav>
        <div aria-label="Categories" role="tablist">
          {categories.map((category) => (
            <a
              className={`text-text-tertiary hover:text-text-tertiary-hover active:text-text-tertiary-press text-body px-30 border-t-l cursor-pointer border-[0px] border-solid py-[13px] font-bold ${
                category === selected
                  ? 'border-border-selected text-text'
                  : 'border-[transparent]'
              }`}
              id={`category-${category}`}
              role="tab"
              aria-selected={category === selected}
              aria-controls={`panel-${category}`}
              key={category}
              onClick={() => {
                setSelected(category)
              }}
            >
              {category}
            </a>
          ))}
        </div>
      </nav>
      <h2 className="text-text-secondary text-heading-xs m-0">
        Works from users you follow
      </h2>
      <div
        className="grid [grid-template-areas:'UserInfo_._ShowAll''ArtworkList_ArtworkList_ArtworkList']"
        id={`panel-${selected}`}
        role="tabpanel"
        aria-labelledby={`category-${selected}`}
      >
        <div className="grid grid-flow-col items-center justify-start gap-20 [grid-area:UserInfo]">
          <a
            className="rounded-oval text-icon hover:text-icon-hover active:text-icon-press bg-container-secondary hover:bg-container-hover active:bg-container-press grid h-[40px] w-[40px] cursor-pointer place-items-center"
            aria-label="UserIcon"
          >
            <Icon name="24/FaceEdit" />
          </a>
          <span className="text-text text-caption-m font-bold">UserName</span>
          <Button variant="Primary" size="S">
            Follow
          </Button>
        </div>
        <a className="text-text-tertiary hover:text-text-hover active:text-text-press text-caption-m cursor-pointer content-center text-right [grid-area:ShowAll]">
          Show all
        </a>
        <ul
          key={selected}
          className="grid max-w-[424px] list-none grid-cols-3 gap-20 p-0 [grid-area:ArtworkList]"
        >
          {artworks.map((a) => (
            <li key={a.id}>
              <article className="grid gap-10">
                <img
                  className="rounded-m aspect-[3/2] w-[100%]"
                  src={a.thumbnail}
                  alt={a.title}
                />
                <h3 className="text-text text-caption-m m-0">{a.title}</h3>
                <p className="text-text-tertiary text-caption-s m-0">
                  {a.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
