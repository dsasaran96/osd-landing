import { slug } from "github-slugger";
import { marked } from "marked";

// slugify
export const slugify = (content) => {
  if (!content) return null;

  return slug(content);
};

// markdownify
export const markdownify = (content, tag, className) => {
  if (!content) return null;

  // Ensure content is a string
  const strContent = String(content);

  // Replace newline characters with HTML tag for a line break
  const contentWithLineBreaks = strContent.replace(/\\n/g, "<br />");

  const Tag = tag;
  return tag ? (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{
        __html:
          tag === "div"
            ? marked(contentWithLineBreaks)
            : marked.parseInline(contentWithLineBreaks),
      }}
    />
  ) : (
    <span
      className={className}
      dangerouslySetInnerHTML={{
        __html: marked.parseInline(contentWithLineBreaks),
      }}
    />
  );
};

// humanize
export const humanize = (content) => {
  if (!content) return null;

  return content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

// plainify
export const plainify = (content) => {
  if (!content) return null;

  const mdParsed = marked.parseInline(String(content));
  const filterBrackets = mdParsed.replace(/<\/?[^>]+(>|$)/gm, "");
  // const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterBrackets);
  return stripHTML;
};

// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities) => {
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};
