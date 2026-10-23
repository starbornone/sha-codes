import Root from './Root';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

export { allPages, absoluteUrl, notFoundMeta } from './meta';

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <Root />
    </StaticRouter>,
  );
}
