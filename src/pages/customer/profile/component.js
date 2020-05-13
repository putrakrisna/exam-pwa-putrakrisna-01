import Button from '@components/Button';
import Typography from '@components/Typography';
import TextField from '@components/Forms/TextField';
import PasswordField from '@components/Forms/Password';
// import { regexPhone } from '@helpers/regex';
import {
    FormControlLabel, Checkbox, Grid,
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import helper from '@helpers/token';
import { Skeleton } from '@material-ui/lab';
import useStyles from './style';
import { getCustomer } from '../../../services/graphql/repository/customer';

const ProfileForm = ({ t, data }) => {
    const styles = useStyles();

    const [edit, setEdit] = React.useState(false);
    const [editPass, setEditPass] = React.useState(false);
    const [editEmail, setEditEmail] = React.useState(false);

    const ProfileSchema = Yup.object().shape({
        email: editEmail && Yup.string()
            .email(t('validate:email:wrong'))
            .required(t('validate:email:required')),
        firstName: Yup.string().required(t('validate:firstName:required')),
        lastName: Yup.string().required(t('validate:lastName:required')),
        // telephone: Yup.string().required(t('validate:telephone:required'))
        //     .matches(regexPhone, t('validate:phoneNumber:wrong')),
        currentPassword:
            (editEmail || editPass) && Yup.string().required(t('validate:password:required')),
        password:
            editPass && Yup.string().required(t('validate:password:required')),
        confirmPassword:
            editPass
            && Yup.string()
                .required(t('validate:confirmPassword:required'))
                .test(
                    'check-pass',
                    t('validate:confirmPassword.wrong'),
                    // eslint-disable-next-line no-use-before-define
                    (input) => (input === formik.values.password),
                ),
    });

    const formik = useFormik({
        initialValues: {
            firstName: data.firstName,
            lastName: data.lastName,
            // telephone: data.telephone,
            email: data.email,
            currentPassword: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: ProfileSchema,
        onSubmit: (values, { setSubmitting }) => {
            // eslint-disable-next-line no-console
            console.log(values);
            setEdit(false);
            setEditPass(false);
            setEditEmail(false);
            setSubmitting(false);
        },
    });

    return (
        <form className={styles.container} onSubmit={formik.handleSubmit}>
            <TextField
                label="First Name"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                    !!(formik.touched.firstName && formik.errors.firstName)
                }
                errorMessage={
                    (formik.touched.firstName && formik.errors.firstName)
                    || null
                }
                disabled={!edit}
            />
            <TextField
                label="Last Name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                    !!(formik.touched.lastName && formik.errors.lastName)
                }
                errorMessage={
                    (formik.touched.lastName && formik.errors.lastName) || null
                }
                disabled={!edit}
            />

            {/* <TextField
                label="Telephone"
                name="telephone"
                value={formik.values.telephone}
                onChange={formik.handleChange}
                error={
                    !!(formik.touched.telephone && formik.errors.telephone)
                }
                errorMessage={
                    (formik.touched.telephone && formik.errors.telephone) || null
                }
                disabled={!edit}
            /> */}

            <FormControlLabel
                className={styles.checkboxLabel}
                onChange={() => setEditEmail(!editEmail)}
                disabled={!edit}
                control={(
                    <Checkbox
                        checked={editEmail}
                        name="emailCheckbox"
                        color="primary"
                        size="medium"
                    />
                )}
                label={(
                    <Typography variant="span">
                        {t('common:button:change')}
                        {' '}
                        Email
                    </Typography>
                )}
            />

            <FormControlLabel
                className={styles.checkboxLabel}
                onChange={() => setEditPass(!editPass)}
                disabled={!edit}
                control={(
                    <Checkbox
                        checked={editPass}
                        name="passwordCheckbox"
                        color="primary"
                        size="medium"
                    />
                )}
                label={(
                    <Typography variant="span">
                        {t('common:button:change')}
                        {' '}
                        Password
                    </Typography>
                )}
            />

            <div className={[styles.editContainer, edit ? 'show' : 'hide']}>
                <div className={editEmail ? 'show' : 'hide'}>
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                            !!(formik.touched.email && formik.errors.email)
                        }
                        errorMessage={
                            (formik.touched.email && formik.errors.email) || null
                        }
                    />
                </div>
                <div className={editEmail || editPass ? 'show' : 'hide'}>
                    <PasswordField
                        label="Current Password"
                        showVisible
                        name="currentPassword"
                        value={formik.values.currentPassword}
                        onChange={formik.handleChange}
                        error={
                            !!(formik.touched.currentPassword
                            && formik.errors.currentPassword)
                        }
                        errorMessage={
                            (formik.touched.currentPassword
                                && formik.errors.currentPassword)
                            || null
                        }
                    />
                </div>
                <div className={editPass ? 'show' : 'hide'}>
                    <PasswordField
                        label="Password"
                        showVisible
                        showPasswordMeter
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                            !!(formik.touched.password && formik.errors.password)
                        }
                        errorMessage={
                            (formik.touched.password
                                && formik.errors.password)
                            || null
                        }
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={
                            !!(formik.touched.confirmPassword
                            && formik.errors.confirmPassword)
                        }
                        errorMessage={
                            (formik.touched.confirmPassword
                                && formik.errors.confirmPassword)
                            || null
                        }
                    />
                </div>
            </div>

            <div className={styles.bottomButtons}>
                <Button
                    variant="outlined"
                    fullWidth
                    className={edit ? 'hide' : 'show'}
                    onClick={() => setEdit(!edit)}
                >
                    {t('common:button:change')}
                    {' '}
                    Data
                </Button>
                <Button
                    fullWidth
                    className={edit ? 'show' : 'hide'}
                    type="submit"
                >
                    {t('common:button:save')}
                </Button>
            </div>
        </form>
    );
};

const ProfilePageSkeleton = () => {
    const styles = useStyles();
    const TextFieldSkeleton = () => (
        <Grid container className={styles.skeletonField} spacing={2} direction="column">
            <Skeleton className={styles.skeleton} variant="rect" width="25%" height={18} animation="wave" />
            <Skeleton className={styles.skeleton} variant="rect" width="80%" height={18} animation="wave" />
        </Grid>
    );
    const CheckboxSkeleton = () => (
        <Grid container className={styles.skeletonField} spacing={1} direction="row">
            <Skeleton className={styles.skeleton} variant="rect" width="20px" height={18} animation="wave" />
            <Skeleton className={styles.skeleton} variant="rect" width="30%" height={18} animation="wave" />
        </Grid>
    );
    return (
        <div className={styles.skeletonContainer}>
            <TextFieldSkeleton />
            <TextFieldSkeleton />
            <TextFieldSkeleton />
            <CheckboxSkeleton />
            <CheckboxSkeleton />
            <TextFieldSkeleton />
            <Grid container className={styles.skeletonField} alignItems="center" direction="column">
                <Skeleton className={styles.skeleton} variant="rect" width="90%" height={32} animation="wave" />
            </Grid>
        </div>
    );
};

const ProfilePage = (props) => {
    const token = helper.getToken();
    const { error, loading, data } = getCustomer(token);

    if (loading) return <ProfilePageSkeleton />;
    if (error) return <p>{`Error: ${error.message}`}</p>;
    if (!data) return null;

    return (
        <ProfileForm
            {...props}
            data={{
                firstName: data.customer.firstname,
                lastName: data.customer.lastname,
                email: data.customer.email,
                telephone: '081234567890',
            }}
        />
    );
};

export default ProfilePage;
