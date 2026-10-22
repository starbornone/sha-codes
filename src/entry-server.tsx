import Root from './Root';
import { renderToString } from 'react-dom/server';

export function render(): string {
  return renderToString(<Root />);
}
