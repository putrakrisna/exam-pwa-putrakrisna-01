/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import Button from '@components/Button';
import Typography from '@components/Typography';
import formatDate from '@helpers/date';
import {
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Router from 'next/router';
import useStyles from '../style';
import Loader from './skeleton';

export default (props) => {
    const { t } = props;
    const styles = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const loading = false;
    if (loading) return <Loader />;
    const history = [];
    return (
        <div className={styles.tableOuterContainer}>
            <TableContainer component={Paper} className={styles.tableContainer}>
                <Table className={styles.table} aria-label="a dense table">
                    <TableHead>
                        <TableRow className={styles.tableRowHead}>
                            <TableCell align="left">{t('return:table:returnId')}</TableCell>
                            <TableCell align="left">{t('return:table:orderId')}</TableCell>
                            <TableCell align="left">{t('returm:table:products')}</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">{t('return:table:createdAt')}</TableCell>
                            <TableCell align="left">{t('return:table:updatedAt')}</TableCell>
                            <TableCell align="left">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {history.length === 0 ? (
                            <>
                                <TableRow className={styles.tableRowResponsive}>
                                    <TableCell
                                        className={styles.tableCellResponsive}
                                        align="left"
                                        data-th={(
                                            <Typography align="center" type="bold" letter="capitalize">
                                                {t('return:table:returnId')}
                                            </Typography>
                                        )}
                                    >
                                        <div className={styles.displayFlexRow}>
                                            <div className={styles.mobLabel}>
                                                <Typography align="center" type="bold" letter="capitalize">
                                                    {t('return:table:returnId')}
                                                </Typography>
                                            </div>
                                            <div className={styles.value}>12313123</div>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={styles.tableCellResponsive}
                                        align="left"
                                        data-th={(
                                            <Typography align="center" type="bold" letter="capitalize">
                                                {t('return:table:orderId')}
                                            </Typography>
                                        )}
                                    >
                                        <div className={styles.displayFlexRow}>
                                            <div className={styles.mobLabel}>
                                                <Typography align="center" type="bold" letter="capitalize">
                                                    {t('return:table:orderId')}
                                                </Typography>
                                            </div>
                                            <div className={styles.value}>12313123</div>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={styles.tableCellResponsive}
                                        align="left"
                                        data-th={(
                                            <Typography align="center" type="bold" letter="capitalize">
                                                {t('return:table:products')}
                                            </Typography>
                                        )}
                                    >
                                        <div className={styles.displayFlexRow}>
                                            <div className={styles.mobLabel}>
                                                <Typography align="center" type="bold" letter="capitalize">
                                                    {t('return:table:products')}
                                                </Typography>
                                            </div>
                                            <div className={styles.value}>TShirs Okey</div>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={styles.tableCellResponsive}
                                        align="left"
                                        data-th={(
                                            <Typography align="center" type="bold" letter="capitalize">
                                                Status
                                            </Typography>
                                        )}
                                    >
                                        <div className={styles.displayFlexRow}>
                                            <div className={styles.mobLabel}>
                                                <Typography align="center" type="bold" letter="capitalize">
                                                    Status
                                                </Typography>
                                            </div>
                                            <div className={styles.value}>Pending Approval</div>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={styles.tableCellResponsive}
                                        align="left"
                                        data-th={(
                                            <Typography align="center" type="bold" letter="capitalize">
                                                {t('return:table:cratedAt')}
                                            </Typography>
                                        )}
                                    >
                                        <div className={styles.displayFlexRow}>
                                            <div className={styles.mobLabel}>
                                                <Typography align="center" type="bold" letter="capitalize">
                                                    {t('return:table:cratedAt')}
                                                </Typography>
                                            </div>
                                            <div className={styles.value}>{formatDate() }</div>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={styles.tableCellResponsive}
                                        align="left"
                                        data-th={(
                                            <Typography align="center" type="bold" letter="capitalize">
                                                {t('return:table:updatedAt')}
                                            </Typography>
                                        )}
                                    >
                                        <div className={styles.displayFlexRow}>
                                            <div className={styles.mobLabel}>
                                                <Typography align="center" type="bold" letter="capitalize">
                                                    {t('return:table:updatedAt')}
                                                </Typography>
                                            </div>
                                            <div className={styles.value}>
                                                {formatDate() }
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={styles.tableCellResponsive}
                                        align="left"
                                        data-th={(
                                            <Typography align="center" type="bold" letter="capitalize">
                                                Actions
                                            </Typography>
                                        )}
                                    >
                                        <div className={styles.displayFlexRow}>
                                            <div className={styles.mobLabel}>
                                                <Typography align="center" type="bold" letter="capitalize">
                                                    Actions
                                                </Typography>
                                            </div>
                                            <div className={styles.value}>
                                                <Button
                                                    variant="text"
                                                    className="clear-margin-padding"
                                                    onClick={() => Router.push(
                                                        '/rma/customer/view/id/[id]',
                                                        `/rma/customer/view/id/${12323}`,
                                                    )}
                                                >
                                                    <Typography
                                                        className="clear-margin-padding"
                                                        variant="span"
                                                    >
                                                        {t('return:table:view')}
                                                    </Typography>
                                                </Button>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 20, 50, { label: 'All', value: -1 }]}
                                        colSpan={6}
                                        count={0}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        labelRowsPerPage="Limit"
                                        SelectProps={{
                                            inputProps: { 'aria-label': 'rows per page' },
                                            native: true,
                                        }}
                                        onChangePage={handleChangePage}
                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                    />
                                </TableRow>
                            </>
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6}>
                                    <Alert severity="warning">{t('return:empty')}</Alert>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
