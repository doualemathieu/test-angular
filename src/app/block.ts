import { Position } from "./position";

export interface Block {
    position: Position;
    selected: boolean;
    index: Number;
}
