/// <reference types="react" />
export interface IHeader {
    readonly displayTitle: String;
    readonly item?: any;
    readonly keyName?: string;
    readonly event?: (item: any, index: number) => JSX.Element | undefined | null;
    readonly loadingBlock?: Boolean;
}
export interface ITable {
    readonly headers: ReadonlyArray<IHeader>;
    readonly data: ReadonlyArray<any>;
    readonly isLoading: Boolean;
    readonly enablePagination?: Boolean;
}
declare const Table: (props: ITable) => JSX.Element;
export default Table;
