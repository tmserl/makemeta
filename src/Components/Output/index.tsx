import { motion } from 'framer-motion';
import './Output.css';

function Output({ data }: { data: any }) {
  let clipboardContent =
    (data.title ? `<title>${data.title}</title>\n` : '') +
    (data.title ? `<meta name="title" content="${data.title}" />\n` : '') +
    (data.description
      ? `<meta name="description" content="${data.description}" />\n\n`
      : '') +
    (data.title ||
    data.description ||
    data.url ||
    data.twitter ||
    data.image ||
    data.alt
      ? `<!-- Twitter Meta Tags -->\n`
      : '') +
    (data.image
      ? `<meta name="twitter:card" content="summary_large_image" />\n`
      : '') +
    (data.title
      ? `<meta name="twitter:title" content="${data.title}" />\n`
      : '') +
    (data.twitter
      ? `<meta name="twitter:site" content="${
          (data.twitter.charAt(0) === '@' ? '' : '@') + data.twitter
        }" />\n`
      : '') +
    (data.twitter
      ? `<meta name="twitter:creator" content="${
          (data.twitter.charAt(0) === '@' ? '' : '@') + data.twitter
        }" />\n`
      : '') +
    (data.description
      ? `<meta name="twitter:description" content="${data.description}" />\n`
      : '') +
    (data.image
      ? `<meta name="twitter:image" content="${data.image}" />\n`
      : '') +
    (data.alt
      ? `<meta name="twitter:image:alt" content="${data.alt}" />\n`
      : '') +
    (data.url ? `<meta name="twitter:url" content="${data.url}" />\n` : '') +
    (data.title || data.description || data.twitter || data.image || data.alt
      ? `\n<!-- Open Graph Meta Tags -->\n<meta property="og:type" content="website" />\n`
      : '') +
    (data.title
      ? `<meta property="og:title" content="${data.title}" />\n`
      : '') +
    (data.description
      ? `<meta property="og:description" content="${data.description}" />\n`
      : '') +
    (data.url ? `<meta property="og:url" content="${data.url}" />\n` : '') +
    (data.image
      ? `<meta property="og:image" content="${data.image}" />\n`
      : '') +
    (data.alt
      ? `<meta property="og:image:alt" content="${data.alt}" />\n`
      : '') +
    (data.title ? `\n<!-- Facebook Meta Tags -->\n` : '') +
    (data.title
      ? `<meta property="og:site_name" content="${data.title}" />\n`
      : '') +
    `\n<!-- Meta Tags generated using https://makemeta.app -->
    `;

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
      viewport={{ once: true }}
      className="output wrapper-sm"
    >
      <p className="ta-da">Ta-da!</p>
      {!data.title &&
        !data.description &&
        !data.twitter &&
        !data.url &&
        !data.image &&
        !data.alt && (
          <div className="loading">
            <p className="comment">Preparing Meta Tag Generation...</p>
          </div>
        )}

      {data.title && (
        <div className="title">
          <p>{`<title>${data.title}</title>`}</p>
          <p>{`<meta name="title" content="${data.title}" />`}</p>
          {data.description && (
            <p>{`<meta name="description" content="${data.description}" />`}</p>
          )}
        </div>
      )}
      <br />

      {/* Twitter Tags */}
      <div className="twitter-tags">
        {(data.title ||
          data.description ||
          data.twitter ||
          data.image ||
          data.alt) && (
          <p className="comment">{`<!-- Twitter Meta Tags -->`}</p>
        )}
        {data.image && (
          <p>{`<meta name="twitter:card" content="summary_large_image" />`}</p>
        )}
        {/* Twitter - Title */}
        {data.title && (
          <p>{`<meta name="twitter:title" content="${data.title}" />`}</p>
        )}
        {/* Twitter - Site  */}
        {data.twitter && (
          <p>
            &lt;meta name="twitter:site" content="
            {
              // Checks whether '@' has been inputted and adds it if neccasary
              data.twitter.charAt(0) === '@' ? '' : '@'
            }
            {data.twitter}" /&gt;
          </p>
        )}
        {/* Twitter - Creator */}
        {data.twitter && (
          <p>
            &lt;meta name="twitter:creator" content="
            {
              // Checks whether '@' has been inputted and adds it if neccasary
              data.twitter.charAt(0) === '@' ? '' : '@'
            }
            {data.twitter}" /&gt;
          </p>
        )}
        {/* Twitter - Description */}
        {data.description && (
          <p>
            {`<meta name="twitter:description" content="${data.description}" />`}
          </p>
        )}
        {/* Twitter - Image */}
        {data.image && (
          <p>{`<meta name="twitter:image" content="${data.image}" />`}</p>
        )}
        {/* Twitter - Image Alt */}
        {data.alt && (
          <p>{`<meta name="twitter:image:alt" content="${data.alt}" />`}</p>
        )}
        {/* Twitter - URL */}
        {data.url && (
          <p>{`<meta name="twitter:url" content="${data.url}" />`}</p>
        )}
      </div>

      {/* Open Graph Meta Tags */}
      <div className="og-tags">
        {(data.title ||
          data.description ||
          data.twitter ||
          data.image ||
          data.alt) && (
          <>
            <br />
            <p className="comment">{`<!-- Open Graph Meta Tags -->`}</p>
            <p>{`<meta property="og:type" content="website" />`}</p>
          </>
        )}
        {/* OG -Title */}
        {data.title && (
          <p>{`<meta property="og:title" content="${data.title}" />`}</p>
        )}
        {/* OG - Description */}
        {data.description && (
          <p>
            {`<meta property="og:description" content="${data.description}" />`}
          </p>
        )}
        {/* OG - URL */}
        {data.url && (
          <p>{`<meta property="og:url" content="${data.url}" />`}</p>
        )}
        {/* OG - Image */}
        {data.image && (
          <p>{`<meta property="og:image" content="${data.image}" />`}</p>
        )}
        {/* OG - Image Alt */}
        {data.alt && (
          <p>{`<meta property="og:image:alt" content="${data.alt}" />`}</p>
        )}
      </div>

      {/* Facebook Meta Tags */}
      <div className="fb-tags">
        {data.title && (
          <>
            <br />
            <p className="comment">{`<!-- Facebook Meta Tags -->`}</p>
          </>
        )}
        {data.title && (
          <p>{`<meta property="og:site_name" content="${data.title}" />`}</p>
        )}
      </div>

      {/* MakeMeta */}
      <div className="makemeta">
        {(data.title ||
          data.description ||
          data.url ||
          data.twitter ||
          data.image ||
          data.alt) && (
          <>
            <br />
            <p className="comment">
              {`<!-- Meta Tags generated using https://makemeta.app -->`}
            </p>
          </>
        )}
      </div>

      {/* Copy to Clipboard */}
      {(data.title ||
        data.description ||
        data.url ||
        data.twitter ||
        data.image ||
        data.alt) && (
        <motion.button
          className="btn-copy"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.25 }}
          onClick={() => navigator.clipboard.writeText(clipboardContent)}
        >
          Copy
        </motion.button>
      )}
    </motion.section>
  );
}

export default Output;
