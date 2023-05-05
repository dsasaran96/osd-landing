import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "./Baseof";

import { motion } from "framer-motion";

const PostSingle = ({ frontmatter, content, mdxContent }) => {
  let { description, title, image } = frontmatter;
  description = description ? description : content.slice(0, 120);

  return (
    <Base title={title} description={description}>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5 }}
      >
        <section className="section">
          <div className="container">
            <div className="row">
              <article className="col-12 mx-auto text-center md:col-8">
                {image && (
                  <Image
                    src={image}
                    height="500"
                    width="1000"
                    alt={title}
                    priority={true}
                    layout="responsive"
                    className="rounded-lg"
                  />
                )}
                {markdownify(title, "h1", "h2 mb-6 mt-6 text-left")}

                <div className="content mb-16 text-left">
                  <MDXRemote {...mdxContent} components={shortcodes} />
                </div>
              </article>
            </div>
          </div>
        </section>
      </motion.div>
    </Base>
  );
};

export default PostSingle;
