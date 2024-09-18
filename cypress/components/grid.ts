import { CyElement } from "./element";

export interface CyGridRow {
    col(i: number): CyElement;
}

export interface CyGrid {
    row(i: number): CyGridRow;
}
