import { Box} from '@mui/system';
import Pagination from '@mui/material/Pagination';
import React from 'react';

function PaginationCont(props) {

    return (
        <Box mt={3} display={'flex'} justifyContent={'center'}>
            <Pagination 
            count={props.count} 
            size={'large'}
            onChange={( e, page ) => props.setCurrentPage(page)}
            />
        </Box>
    );
}

export default PaginationCont;