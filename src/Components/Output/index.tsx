import './Output.css';

function Output({ data }: { data: any }) {
  return (
    <section className="output wrapper-sm">
      <p className="ta-da">Ta da!</p>
      <div className="title">
        {data.title && <p>&lt;title&gt;{data.title}&lt;/title&gt;</p>}
        <br />
      </div>
      {/* Twitter Tags */}
      <div className="twitter-tags">
        {(data.title ||
          data.description ||
          data.twitter ||
          data.image ||
          data.alt) && (
          <p className="comment">&lt;!-- Twitter Meta Tags --&gt;</p>
        )}
        {data.image && (
          <p>
            &lt;meta name="twitter:card" content="summary_large_image" /&gt;
          </p>
        )}
        {/* Twitter - Title */}
        {data.title && (
          <p>&lt;meta name="twitter:title" content="{data.title}" /&gt;</p>
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
            &lt;meta name="twitter:description" content="{data.description}"
            /&gt;
          </p>
        )}
        {/* Twitter - Image */}
        {data.image && (
          <p>&lt;meta name="twitter:image" content="{data.image}" /&gt;</p>
        )}
        {/* Twitter - Image Alt */}
        {data.alt && (
          <p>&lt;meta name="twitter:image:alt" content="{data.alt}" /&gt;</p>
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
            <p className="comment">&lt;!-- Open Graph Meta Tags --&gt;</p>
          </>
        )}
        {/* OG -Title */}
        {data.title && (
          <p>&lt;meta property="og:title" content="{data.title}" /&gt;</p>
        )}
        {/* OG - Description */}
        {data.description && (
          <p>
            &lt;meta property="og:description" content="{data.description}"
            /&gt;
          </p>
        )}
        {/* OG - URL */}
        {data.url && (
          <p>&lt;meta property="og:url" content="{data.url}" /&gt;</p>
        )}
        {/* OG - Image */}
        {data.image && (
          <p>&lt;meta property="og:image" content="{data.image}" /&gt;</p>
        )}
        {/* OG - Image Alt */}
        {data.alt && (
          <p>&lt;meta property="og:image:alt" content="{data.alt}" /&gt;</p>
        )}
      </div>

      {/* Facebook Meta Tags */}
      <div className="fb-tags">
        {data.title && (
          <>
            <br />
            <p className="comment">&lt;!-- Facebook Meta Tags --&gt;</p>
          </>
        )}
        {data.title && (
          <p>&lt;meta property="og:site_name" content="{data.title}" /&gt;</p>
        )}
      </div>
      {/* MakeMeta */}
      <div className="loading">
        {(!data.title ||
          !data.description ||
          !data.twitter ||
          !data.image ||
          !data.alt) && (
          <>
            <br />
            <p className="comment">Preparing Meta Tag Generation...</p>
          </>
        )}
      </div>
      <div className="makemeta">
        {(data.title ||
          data.description ||
          data.twitter ||
          data.image ||
          data.alt) && (
          <>
            <br />
            <p className="comment">
              &lt;!-- Meta Tags generated using https://makemeta.app --&gt;
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default Output;
