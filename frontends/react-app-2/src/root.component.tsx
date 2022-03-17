import { ReactChild, ReactFragment, ReactPortal } from "react";

export default function Root(props: { name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  return <section>{props.name} is mounted!</section>;
}
