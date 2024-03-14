import Dialog from '@common_dialog';

const ConfirmationDelete = ({
    t, open = false, handleDelete, handleCancel,
}) => (
    <Dialog
        open={open}
        onClose={handleCancel}
        title={t('cart:confirmDelete')}
        positiveAction={handleDelete}
        positiveLabel={t('common:button:yes')}
        negativeLabel={t('common:button:cancel')}
        negativeAction={handleCancel}
        classWrapper="swift-dialog-confirm-delete-cart-item"
        classContainerAction="swift-dialog-confirm-delete-cart-item-action"
    />
);

export default ConfirmationDelete;
