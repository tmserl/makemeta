function Output({ data }: { data: any }) {
  return (
    <section>
      <div className="twitter-tags">
        <p>&lt;!-- Twitter Meta Tags --&gt;</p>
        <p>&lt;meta name="twitter:card" content="summary_large_image" /&gt;</p>
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
    </section>
  );
}

export default Output;
