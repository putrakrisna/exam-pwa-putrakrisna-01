import { useQuery } from '@apollo/react-hooks';
import * as Schema from './schema';

export const getOrder = (params) => useQuery(Schema.getOrder(), {
    variables: params,
    skip: !params,
});

export default {
    getOrder,
};
