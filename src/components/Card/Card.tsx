import React from "react";
import { Item } from "../../api/getItems";
import { HorizontCard } from "./HorizontCard/HorizontCard";
import { VerticalCard } from "./VerticalCard/VerticalCard";

export enum ViewType {
  Horizont,
  Vertical,
}

export interface CardProps extends Item {
  type: ViewType;
  like: boolean;
  onLike: (value: boolean) => void;
  images: string[];
}

const componentByViewType = {
  [ViewType.Horizont]: HorizontCard,
  [ViewType.Vertical]: VerticalCard,
};

export const Card: React.FC<CardProps> = ({ type, id, ...rest }) => {
  const Component = componentByViewType[type];

  return <Component id={id} {...rest} />;
};
