import React from 'react'
import {
    TableContainer,
    Table as MuiTable,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    TablePagination,
    Grid,
    LinearProgress,
    makeStyles
} from '@material-ui/core'
import { IJSON } from './../../Types/common/IJson';

export interface IHeader {
    readonly displayTitle: String
    readonly item?: any
    readonly keyName?: string
    readonly event?: (item: any, index: number) => JSX.Element | undefined | null
    readonly loadingBlock?: Boolean
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
    },
    tableContainer: {
        background:'#F9F9F9 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #00000005',
        borderRadius: 3,
        height: 'calc(100% - 100px)'
    },
    header:{
        height: 41
    },
    headerCell: {
        fontSize: 11,
        fontFamily: 'Poppins',
        letterSpacing: 0,
        fontWeight: 600,
        color: '#656464',
        height: 41,
        paddingBottom: 0,
        textAlign: 'left'
    },
    bodyRow:{
        height: 37,
        textAlign: 'left'
    },
    body: {
        paddingLeft: 10,
        paddingRight: 10
    },
    bodyCell: {
        fontSize: 12,
        fontFamily: 'Open Sans',
        fontWeight: 600,
        letterSpacing: 0,
        color: '#2E5BFF',
        textAlign: 'left'
    },
    cell: {
        height: '100%',
        width: '100%',
        textAlign: 'left'
    },
    disabledCell:{
        height: '100%',
        width: '100%',
        pointerEvents: 'none',
        opacity: 0.5
    },
    pagination: {
        background:'#F9F9F9 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #00000005',
        borderRadius: 3,
        borderTop: '1px solid #EFEFEF',
        height: 53,
        fontSize: 12,
        fontFamily: 'Open Sans',
        fontWeight: 600,
        letterSpacing: 0,
        color: '#656464'
    },
    tableMessage: {
        textAlign: 'center'
    }
  });
  
  const i18n = {
    emptyData: 'No hay datos, según los parámetros de búsqueda',
    loadingText: 'Cargando datos, por favor espere...'
  }

interface ITable {
    readonly headers: ReadonlyArray<IHeader>
    readonly data: ReadonlyArray<any>
    readonly isLoading: Boolean
    readonly enablePagination?: Boolean
}

const Table = (props: ITable) => {

    const classes = useStyles();
    const { headers, data, isLoading } = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return <Paper className={classes.root}>
        { isLoading ? <LinearProgress /> : null}
        <TableContainer className={classes.tableContainer} >
            <MuiTable size="small" aria-label="a dense table" stickyHeader >
                <TableHead>
                <TableRow className={classes.header}>
                    {headers.map((header: IHeader, index: number) =>
                            <TableCell key={index} className={classes.headerCell} align="center">{header.displayTitle}</TableCell>
                    )}
                </TableRow>
                </TableHead>          
                {data.length > 0 ? 
                    <TableBody className={classes.body}>
                        {data.map((row: IJSON, index: number) =>
                            <TableRow className={classes.bodyRow} key={index} >
                                {headers.map((header: IHeader, headerIndex: number) => 
                                    header.keyName ? 
                                        <TableCell key={headerIndex} className={classes.bodyCell} align="center">{row[header.keyName]}</TableCell>
                                    :
                                    header.event ? 
                                        <TableCell key={headerIndex} className={classes.bodyCell} align="center">
                                            <Grid className={header.loadingBlock ? classes.disabledCell: classes.cell}>
                                                {header.event(row, index)}
                                            </Grid>
                                        </TableCell>                                   
                                    : /* Otherwise */
                                        <TableCell key={headerIndex} className={classes.bodyCell} align="center">
                                            <Grid className={header.loadingBlock ? classes.disabledCell: classes.cell}>
                                                {header.item}
                                            </Grid>
                                        </TableCell>
                                )}
                            </TableRow> 
                        )}
                    </TableBody>
                    : 
                    <TableBody>
                        <TableRow >
                        <TableCell colSpan={headers.length} className={classes.tableMessage}>
                            {
                                isLoading ? 
                                    i18n.loadingText                                
                                : 
                                    i18n.emptyData
                            }
                        </TableCell>
                        </TableRow>
                    </TableBody>
                }

            </MuiTable>
        </TableContainer>
        {
            !props.data ? null :
            !(props.data.length > 0) ? null :
                props.enablePagination !== undefined && !props.enablePagination ? null :
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        className={classes.pagination}
                        component={Paper}
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
        }
        
    </Paper>
}

export default Table;