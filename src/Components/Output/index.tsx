import './Output.css';

function Output({ data }: { data: any }) {
  return (
    <section className="output wrapper-sm">
      <p className="ta-da">Ta da!</p>
      {!data.title &&
        !data.description &&
        !data.twitter &&
        !data.image &&
        !data.alt && (
          <div className="loading">
            <p className="comment">Preparing Meta Tag Generation...</p>
          </div>
        )}

      {data.title && (
        <div className="title">
          <p>{`<title>${data.title}</title>`}</p>
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
    </section>
  );
}

export default Output;
