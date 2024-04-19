import { RowElement, RowID } from "./interface";

declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): None;
declare function updateRow(rowId: RowID, row: RowElement): RowID;