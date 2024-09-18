import { CyElement } from "./element";

export interface CyGridCell extends CyElement {}

export interface CyGridRow extends CyElement {
    col(i: number): CyGridCell;
}

export interface CyGrid extends CyElement {
    row(i: number): CyGridRow;
}
