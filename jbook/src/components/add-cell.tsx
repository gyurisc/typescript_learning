import React from 'react'
import { useActions } from '../hooks/use-actions';

interface AddCellProps {
    nextCellId: string | null;
    forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, nextCellId }) => {
  return (
    <div></div>
  )
}


export default AddCell;