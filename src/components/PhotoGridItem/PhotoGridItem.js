import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  console.log(src);
  const avif1 = src.replace(".jpg", ".avif");
  const avif2 = src.replace(".jpg", "@2x.avif");
  const avif3 = src.replace(".jpg", "@3x.avif");

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image>
          <source
            type={"image/avif"}
            srcSet={avif1 + " 1x," + avif2 + " 2x," + avif3 + " 3x"}
          />
          <img alt={alt} src={src} />
        </Image>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.picture`
  & img {
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-radius: 2px;
    display: block;
    margin-bottom: 8px;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;

  & li:last-of-type {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
