import StoreLocatorMaps from '@core_modules/storelocator/pages/default/components/Maps';
import SkeletonStoreLocator from '@core_modules/storelocator/pages/default/components/Skeleton';
import StoreList from '@core_modules/storelocator/pages/default/components/StoreList';
import Alert from '@common/Alert';

const StoreLocatorContent = ({ gmapKey, storeLocations, t }) => {
    // state
    const [centerPosition, setCenterPosition] = React.useState({});
    const [selectedStore, setSelectedStore] = React.useState();
    const [storeList, setStoreList] = React.useState(
        (storeLocations?.length > 0
            && storeLocations?.map((storeLocation) => ({
                ...storeLocation,
                lat: storeLocation.latitude,
                lng: storeLocation.longitude,
            }))) || null,
    );

    // effect
    React.useEffect(() => {
        if (storeList !== null) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const lng = position.coords.longitude;
                    const lat = position.coords.latitude;
                    setCenterPosition({ lat, lng });
                });
            } else {
                setCenterPosition({ lat: -6.17539, lng: 106.82715 });
            }
        }
    }, []);

    if (storeList === null) {
        return (
            <div className="pt-[20vh] text-center">
                <Alert severity="error" className="capitalize">
                    {t('storelocator:noAvailableStore')}
                </Alert>
            </div>
        );
    }

    return (
        <div className="flex flex-row" style={{ padding: '0 16px' }}>
            <div className="xs:basis-full sm:basis-4/12 md:basis-3/12 last-xs first-sm">
                <StoreList
                    t={t}
                    storeList={storeList}
                    totalAllStore={storeLocations.length}
                    onClickListItem={(store) => {
                        setCenterPosition({ lat: store.lat, lng: store.lng });
                        setSelectedStore(store);
                    }}
                />
            </div>
            <div className="xs:basis-full sm:basis-8/12 md:basis-9/12">
                <StoreLocatorMaps
                    t={t}
                    centerPosition={centerPosition}
                    mapPositions={storeList}
                    gmapKey={gmapKey}
                    setStoreList={setStoreList}
                    selectedStore={selectedStore}
                />
            </div>
        </div>
    );
};

const StoreLocatorContentWrapper = (props) => {
    const {
        loading, storeLocations, storeConfig, t,
    } = props;
    return (
        <div className="desktop:max-w-[1280px] desktop:px-10 tablet:max-w-[768px] tablet:px-6 mobile:px-4 my-0 mx-auto]">
            {loading || typeof window === 'undefined' ? (
                <SkeletonStoreLocator />
            ) : (
                <StoreLocatorContent t={t} gmapKey={storeConfig.icube_pinlocation_gmap_key} storeLocations={storeLocations} />
            )}
        </div>
    );
};

export default StoreLocatorContentWrapper;
