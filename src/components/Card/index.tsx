import { ReactNode } from 'react';
import './Card.css';

export default function Card({ children }: { children: ReactNode }) {
  return <div id="card-container">{children}</div>;
}
